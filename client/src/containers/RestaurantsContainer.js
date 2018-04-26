import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createRestaurant } from '../actions/restaurantActions';
import CreateRestaurant from './../components/restaurants/CreateRestaurant';
import AddMenuForm from './../components/restaurants/AddMenuForm';
import RestaurantContainer from './RestaurantContainer';
import RestaurantList from './../components/restaurants/RestaurantsList';

class RestaurantsContainer extends React.Component {
	render() {

		return (
			<div>
				<Switch>
		    	<Route path={`/create_restaurant`} render={(props, {history}) => (<CreateRestaurant {...props} history={history} />)} />
		    	<Route exact path='/restaurants' component={RestaurantList} />
        	<Route path={`/restaurants/:id`} component={RestaurantContainer} />
				</Switch>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createRestaurant }, dispatch)
}

export default connect(null, mapDispatchToProps)(RestaurantsContainer);