import React from 'react';

export default class RestaurantDetails extends React.Component {
	render() {
		const restaurant = this.props.restaurant;

		return (
			<div className='restaurantDetails'>
				{restaurant &&
					<div>
						<h4>Description</h4>
						<p>{restaurant.description}</p>
						<h4>Address</h4>
						<p>{restaurant.address} {restaurant.zip}</p>
						<h4>Visit our website</h4>
						<p>{restaurant.website}</p>
					</div>										}
			</div>
		)
	}
}