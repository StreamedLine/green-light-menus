import React from 'react';

const Homepage = () => (
	<div>
		<h1>Welcome To Greenlight Menus</h1>
		<h2>How can we assist you today?</h2>

		<div className="searchByRestaurant">
			<h3>Search For Restaurant</h3>

		</div>

		<div className="searchByAllergies">
			<h3>Search For Food</h3>
			<form>
				<label htmlFor="zip">zip</label>
				<input type="text" id="zip" name="zip" />
				
			</form>
		</div>
	</div>
)

export default Homepage;