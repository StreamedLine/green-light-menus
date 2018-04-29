import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurantActions';


export default class RestaurantsList extends React.Component {
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
