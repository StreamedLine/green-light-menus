import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addMenuItem, resetDone } from '../../actions/restaurantActions.js';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';

class ItemForm extends React.Component {
	constructor(props) {
		super(props);

		this.menuItem = false;
		//check to see if we are editing (instead of creating)
		const {menu_item_id, menu_id} = this.props.match.params;
		if (menu_item_id) {
			this.menuItem = this.props.currentRestaurant.menus.find( m => m.id == menu_id ).menuItems.find( mi => mi.id == menu_item_id);
		}

		this.state = {
			title: this.menuItem.title || '',
			description: this.menuItem.description || ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		const item_id = this.menuItem !== false ? this.menuItem.id : false;

		const checkboxes = e.target.querySelectorAll('input[type=checkbox]');
		const checked = Array.from(checkboxes).filter(cb => cb.checked);
		const checkedVals = checked.map(cb => {return {name: cb.name.split('-').slice(0,-1).join('')}});

		const menu = {
			id: this.props.match.params.menu_id,
			menuItems_attributes: [
				Object.assign({}, this.state, {id: item_id}, {allergies_attributes: checkedVals}) 
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

		const allergyBoxes = <AllergyCheckboxes menu_id={this.props.match.params.menu_id} menuItem={this.menuItem}/>;

		return (
			<div className="pullLeft">
				<h4>{this.menuItem ? 'Edit' : 'Add'} Item In Menu</h4>
				<form onSubmit={this.handleOnSubmit} >
					<h4>{message}</h4>
					<label htmlFor='title'>Title</label>
					<input type="text" name='title' id='title' value={this.state.title} onChange={this.handleOnChange} />
					<label htmlFor='description'>description</label>
					<input type="text" name='description' value={this.state.description} onChange={this.handleOnChange} />
					<div className="allergyBoxes">
						{allergyBoxes}
					</div>
					<input type="submit" value={`${this.menuItem ? 'Edit' : 'Add'} Item`}/>
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
