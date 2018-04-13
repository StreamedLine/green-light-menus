import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantsList extends React.Component {
	render() {
		const restaurants = this.props.restaurants.map(restaurant => {
			return (
					<div key={restaurant.id} className="restaurant">
						<Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
					</div>
			)
		});

		return (
			<div>
				{restaurants}
			</div>
		)
	}
}

export default RestaurantsList