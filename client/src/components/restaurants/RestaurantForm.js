import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetDone } from '../../actions/restaurantActions';

class RestaurantForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			description: '',
			phone: '',
			address: '',
			zip: '',
			website: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.createRestaurant(this.state, this.props.username);
	}

	render() {
		var message = null;
	
		if (this.props.done == true) {
			this.props.resetDone();
			this.props.history.push('/restaurants')
		} else {
			if (this.props.err && this.props.err.on == 'create') {
				message = this.props.err.msg;
			}
		}

		return (
			<div>
			<h3>Add Your Restaurant Below</h3>
				<h4>{message}</h4>
				<form onSubmit={this.handleOnSubmit} >
					<p>
						<label htmlFor="name">name</label>
						<input type="text" name="name" id="name" onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="description">description</label>
						<input type="text" name="description" id="description" onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="phone">phone</label>
						<input type="text" name="phone" id="phone" onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="address">address</label>
						<input type="text" name="address" id="address" onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="zip">zip</label>
						<input type="text" name="zip" id="zip" onChange={this.handleOnChange} /> 
					</p>
					
					<p>
						<label htmlFor="website">website</label>
						<input type="text" name="website" id="website" onChange={this.handleOnChange} /> 
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
  return {done: restaurantReducer.done, err: restaurantReducer.error}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetDone, }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);


