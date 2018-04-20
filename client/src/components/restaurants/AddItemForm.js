import React from 'react';

export default class AddItemForm extends React.Component {
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


	}

	render() {
		return (
			<div className="pullLeft">
				<h4>Add Item to Menu</h4>
				<form onSubmit={this.handleOnSubmit} >
						<label htmlFor='title'>Title</label>
						<input type="text" name='title' id='title' value={this.state.title} onChange={this.handleOnChange} />
						<label htmlFor='description'>description</label>
						<input type="text" name='description' value={this.state.description} onChange={this.handleOnChange} />
						<div className="allergyBoxes">
							
						</div>
						<input type="submit" value="Add Item"/>
				</form>		
			</div>
		)
	}
}