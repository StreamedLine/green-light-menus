import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMenuItem } from '../../actions/restaurantActions.js';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';

class AddItemForm extends React.Component {
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
			id: this.props.menu_id,
			menuItems_attributes: [
				Object.assign({}, this.state, {allergies_attributes: checkedVals})
			]
		}
		
		this.props.addMenuItem(menu, this.props.menu_id)
		console.log(this, menu, this.props.menu_id)
	}

	render() {
		const allergyBoxes = <AllergyCheckboxes menu_id={this.props.menu_id} />;

		return (
			<div className="pullLeft">
				<h4>Add Item to Menu</h4>
				<form onSubmit={this.handleOnSubmit} >
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addMenuItem }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddItemForm);