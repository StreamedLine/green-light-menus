import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetDone } from '../../actions/restaurantActions';

class RestaurantForm extends React.Component {
	constructor(props) {
		super(props);

		let currentVals = {};
		if (props.edit) {
			currentVals = {...props.currentRestaurant};
		}

		this.state = {
			name: currentVals.name || '',
			description: currentVals.description || '',
			phone: currentVals.phone || '',
			address: currentVals.address || '',
			zip: currentVals.zip || '',
			website: currentVals.website || ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();

		if (!this.props.edit) { 
			this.props.submitRestaurant(this.state, this.props.username, 'POST');
		} else {
			this.props.submitRestaurant(this.state, this.props.currentRestaurant.id, 'PUT');
		}
	}

	render() {
		var message = null;
	
		if (this.props.done == true) {
			this.props.resetDone();
			this.props.history.push(`/restaurants/${this.props.currentRestaurant.id}`)
		} else {
			if (this.props.err && this.props.err.on == 'create') {
				message = this.props.err.msg;
			}
		}
		console.log(this)
		return (
			<div>
			<h3>{this.props.edit ? 'Edit' : 'Add'} Your Restaurant Below</h3>
				<h4>{message}</h4>
				<form onSubmit={this.handleOnSubmit} >
					<p>
						<label htmlFor="name">name</label>
						<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="description">description</label>
						<input type="text" name="description" id="description" value={this.state.description} onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="phone">phone</label>
						<input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="address">address</label>
						<input type="text" name="address" id="address" value={this.state.address} onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="zip">zip</label>
						<input type="text" name="zip" id="zip" value={this.state.zip} onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="website">website</label>
						<input type="text" name="website" id="website" value={this.state.website} onChange={this.handleOnChange} /> 
					</p>
					<p>
						<input type="submit"/>
					</p>
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer}) => {
  return {done: restaurantReducer.done, err: restaurantReducer.error, currentRestaurant: restaurantReducer.currentRestaurant}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetDone, }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);


