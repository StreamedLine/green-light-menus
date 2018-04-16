import React from 'react';

export default class CreateRestaurant extends React.Component {
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
		this.props.history.push('/') //should go to /addMenu
	}

	render() {
		return (
			<div>
			<h3>Add Your Restaurant Below</h3>
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


