import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addMenuItem, resetDone } from '../../actions/restaurantActions.js';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';

class ItemForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();

		const checkboxes = e.target.querySelectorAll('input[type=checkbox]');
		const checked = Array.from(checkboxes).filter(cb => cb.checked);
		const checkedVals = checked.map(cb => {return {name: cb.name.split('-').slice(0,-1).join('')}});

		const menu = {
			id: this.props.match.params.menu_id,
			menuItems_attributes: [
				Object.assign({}, this.state, {allergies_attributes: checkedVals})
			]
		}
		
		this.props.addMenuItem(menu, this.props.match.params.menu_id);
	}

	render() {
		var message = null;
	
		if (this.props.done == true) {
			this.props.resetDone();
			this.setState({title: '', description: ''});
			this.props.history.push(`/restaurants/${this.props.currentRestaurant.id}`);
		} else {
			if (this.props.err && this.props.err.on == 'create') {
				message = this.props.err.msg;
			}
		}

		const allergyBoxes = <AllergyCheckboxes menu_id={this.props.match.params.menu_id} />;

		return (
			<div className="pullLeft">
				<h4>Add Item to Menu</h4>
				<form onSubmit={this.handleOnSubmit} >
					<h4>{message}</h4>
					<label htmlFor='title'>Title</label>
					<input type="text" name='title' id='title' value={this.state.title} onChange={this.handleOnChange} />
					<label htmlFor='description'>description</label>
					<input type="text" name='description' value={this.state.description} onChange={this.handleOnChange} />
					<div className="allergyBoxes">
						{allergyBoxes}
					</div>
					<input type="submit" value="Add Item"/>
				</form>		
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer}) => {
  return {done: restaurantReducer.done, err: restaurantReducer.error, currentRestaurant: restaurantReducer.currentRestaurant}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addMenuItem, resetDone }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemForm));
