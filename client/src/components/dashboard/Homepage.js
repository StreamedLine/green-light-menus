import React from 'react';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';

class Homepage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			visible: false,
			search: {
				query: '',
				zip: ''
			}
		}
	}

	toggleVisibility = () => {
		const opposite = !this.state.visible;
		this.setState({visible: opposite})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();

		const checkboxes = e.target.querySelectorAll('input[type=checkbox]');
		const checked = Array.from(checkboxes).filter(cb => cb.checked);
		const checkedVals = checked.map(cb => {return {name: cb.name.split('-').slice(0,-1).join('')}});

		const search = Object.assign({}, this.state.search, {allergies_attributes: checkedVals});
		
	}

	handleOnChange = (e) => {
		var search = Object.assign({}, this.state.search, {[e.target.name]: e.target.value})
		this.setState(Object.assign({}, this.state, {search: search}))
	}

	render() {
		return (	
			<div>
				<h1>Welcome To Greenlight Menus</h1>

				<div className="searchByAllergies">
					<h3>Search</h3>
					<form onSubmit={this.handleOnSubmit}>
						<label htmlFor="query">search</label>
						<input type="text" id="query" name="query" onChange={this.handleOnChange} />
						<p onClick={this.toggleVisibility}>more..</p>
						{this.state.visible &&
							<div className="extraSearch">
								<label htmlFor="zip">zip</label>
								<input type="text" id="zip" name="zip" onChange={this.handleOnChange} />
								<h4>I can eat:</h4>
								<AllergyCheckboxes />
							</div>
						}
						<input type="submit" value="search" />				
					</form>
				</div>
			</div>
		)
	}
}

export default Homepage;