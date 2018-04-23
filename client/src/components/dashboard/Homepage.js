import React from 'react';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';

const Homepage = () => (
	<div>
		<h1>Welcome To Greenlight Menus</h1>
		<h2>How can we assist you today?</h2>

		<div className="searchByRestaurant">
			<h3>Search For Restaurant</h3>
			<form>
				<label htmlFor="restaurant">restaurant</label>
				<input type="text" id="restaurant" name="restaurant" />
				<input type="submit" value="search" />				
			</form>
		</div>

		<div className="searchByAllergies">
			<h3>Search For Food</h3>
			<form>
				<label htmlFor="zip">zip</label>
				<input type="text" id="zip" name="zip" />
				<h4>I would like to avoid:</h4>
				<AllergyCheckboxes />
				<input type="submit" value="search" />				
			</form>
		</div>
	</div>
)

export default Homepage;