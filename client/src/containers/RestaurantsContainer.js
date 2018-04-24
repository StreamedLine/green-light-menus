import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchRestaurants, createRestaurant } from '../actions/restaurantActions';
import CreateRestaurant from './../components/restaurants/CreateRestaurant';
import AddMenuForm from './../components/restaurants/AddMenuForm';
import Restaurant from './../components/restaurants/Restaurant';
import RestaurantList from './../components/restaurants/RestaurantsList';

class RestaurantsContainer extends React.Component {
	constructor(props) {
		super(props);

		props.fetchRestaurants();
	}

	render() {
		return (
			<div>
		    <Route path="/create_restaurant" render={({history}) => (<CreateRestaurant createRestaurant={this.props.createRestaurant} history={history} username={this.props.username} />)} />
        <Route path={`/restaurants/:id/add_menu`} component={AddMenuForm} />
        <Route path="/restaurants/:id" component={({match}) => (<Restaurant id={match.params.id}/>)} />
				<RestaurantList restaurants={this.props.restaurants} />
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer}) => {
  return {restaurants: restaurantReducer.restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRestaurants, createRestaurant }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);