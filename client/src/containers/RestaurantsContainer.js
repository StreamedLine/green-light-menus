import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import RestaurantForm from './../components/restaurants/RestaurantForm';
import MenuForm from './../components/restaurants/MenuForm';
import RestaurantContainer from './RestaurantContainer';
import RestaurantList from './../components/restaurants/RestaurantsList';

export default class RestaurantsContainer extends React.Component {
	render() {
		return (
			<div>
				<Switch>
		    	<Route exact path='/restaurants' component={RestaurantList} />
        	<Route path={`/restaurants/:id`} component={RestaurantContainer} />	
				</Switch>
			</div>
		)
	}
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ postPutRestaurant }, dispatch)
// }

// export default connect(null, mapDispatchToProps)(RestaurantsContainer);