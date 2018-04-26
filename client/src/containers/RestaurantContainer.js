import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter} from 'react-router-dom';
import { fetchFull } from '../actions/restaurantActions';
import AddMenuForm from './../components/restaurants/AddMenuForm';
import RestaurantList from './../components/restaurants/RestaurantsList';
import RestaurantDetails from '../components/restaurants/RestaurantDetails';

class RestaurantContainer extends React.Component {
	constructor(props) {
		super(props)
		
		let restaurant = props.cachedFullRestaurants.find(r => r.id == props.match.params.id);
		if (!restaurant && !props.loadingFull) {
			props.fetchFull(props.match.params.id);
		} 
	}

	render() {
		const currentRestaurant = this.props.cachedFullRestaurants.find(r => r.id == this.props.match.params.id);

		return (
			<div>
				<div>
					{this.props.loggedIn &&
				    <p>
							<Link to={`/restaurants/${this.props.match.params.id}/add_menu`}>Add Menu Here</Link>		
							<Route path={`/restaurants/:id/add_menu`} component={AddMenuForm} />	  
					  </p>
			  	}
				  <RestaurantDetails restaurant={currentRestaurant} loggedIn={this.props.loggedIn} />  
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer, userReducer}) => {
  return {
  	cachedFullRestaurants: restaurantReducer.cachedFullRestaurants, 
  	loadingFull: restaurantReducer.loadingFull,
  	loggedIn: userReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFull }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RestaurantContainer));