import React from 'react';

export default class MenuForm extends React.Component {
	constructor(props) {
		super(props);


		var currentTitle = false;
		//if it's an edit form (instead of create)
		if (props.edit) {
			let currentMenu = props.currentRestaurant.menus.find( m => m.id == props.match.params.menu_id)
			currentTitle = currentMenu ? currentMenu.title : false;
		}

		this.state = {
			title: currentTitle || ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		if (!this.props.edit) {
			this.props.submitMenu(this.state, this.props.match.params.id, 'POST', this.props.match.params.id);
			this.props.history.push(this.props.location.pathname.match(/\/.*\/\d+/)[0])
		} else {
			this.props.submitMenu(this.state, this.props.match.params.menu_id, 'PUT', this.props.currentRestaurant.restaurant.id);
			this.props.history.push(`/restaurants/${this.props.currentRestaurant.restaurant.id}`)
		}
	}

	render() {
		console.log(this)
		return (
			<div className="pullLeft">
				<h4>{this.props.edit ? 'Edit' : 'Add'} New Menu Here</h4>
				<p>Example: Breakfast Menu</p>
				<form onSubmit={this.handleOnSubmit} >
						<label htmlFor='title'>Title</label>
						<input type="text" name='title' id='title' value={this.state.title} onChange={this.handleOnChange} />
						<input type="submit" value={`${this.props.edit ? 'Edit' : 'Add'} Menu`}/>
				</form>		
			</div>
		)
	}
}

