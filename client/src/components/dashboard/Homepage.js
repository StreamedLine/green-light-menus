import React from 'react';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';

class Homepage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			visible: false
		}
	}

	toggleVisibility = () => {
		const opposite = !this.state.visible;
		this.setState({visible: opposite})
	}

	render() {
		return (	
			<div>
				<h1>Welcome To Greenlight Menus</h1>

				<div className="searchByAllergies">
					<h3>Search</h3>
					<form>
						<label htmlFor="restaurant">restaurant</label>
						<input type="text" id="restaurant" name="restaurant" />
						<p onClick={this.toggleVisibility}>more..</p>
						{this.state.visible &&
							<div className="extraSearch">
								<label htmlFor="zip">zip</label>
								<input type="text" id="zip" name="zip" />
								<h4>I would like to avoid:</h4>
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