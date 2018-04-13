import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchRestaurants, fetchRestaurant } from '../actions/restaurantActions';
import RestaurantList from './../components/restaurants/RestaurantsList';
import Restaurant from './../components/restaurants/Restaurant'

class RestaurantsContainer extends React.Component {
	constructor(props) {
		super(props);

		props.fetchRestaurants();
	}

	render() {
		return (
			<div>
				<RestaurantList restaurants={this.props.restaurants} />

				<Route path="/restaurants/:id" render={({match}) => (<Restaurant id={match.params.id} fetchRestaurant={fetchRestaurants} />)} />
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer}) => {
  return {restaurants: restaurantReducer.restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRestaurants, fetchRestaurant }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);