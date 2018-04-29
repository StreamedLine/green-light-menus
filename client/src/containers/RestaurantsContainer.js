import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import RestaurantForm from './../components/restaurants/RestaurantForm';
import MenuForm from './../components/restaurants/MenuForm';
import RestaurantContainer from './RestaurantContainer';
import RestaurantList from './../components/restaurants/RestaurantsList';
import { fetchRestaurants } from '../actions/restaurantActions';

class RestaurantsContainer extends React.Component {
	constructor(props) {
		super(props);

		if (!props.customMode) {
			props.fetchRestaurants();
		}
	}

	render() {
		return (
			<div>
				<Switch>
		    	<Route exact path='/restaurants' component={() => <RestaurantList restaurants={this.props.restaurants} /> } />
        	<Route path={`/restaurants/:id`} component={RestaurantContainer} />	
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer, filterReducer}) => {
  return {restaurants: restaurantReducer.restaurants, customMode: filterReducer.customMode}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRestaurants }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);