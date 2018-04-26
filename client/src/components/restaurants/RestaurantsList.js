import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurantActions';


class RestaurantsList extends React.Component {
	constructor(props) {
		super(props);

		props.fetchRestaurants();
	}

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

const mapStateToProps = ({restaurantReducer}) => {
  return {restaurants: restaurantReducer.restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRestaurants }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);