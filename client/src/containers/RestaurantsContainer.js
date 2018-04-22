import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurantActions';
import RestaurantList from './../components/restaurants/RestaurantsList';

class RestaurantsContainer extends React.Component {
	constructor(props) {
		super(props);

		props.fetchRestaurants();
	}

	render() {
		return (
			<div>
				<RestaurantList restaurants={this.props.restaurants} />
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);