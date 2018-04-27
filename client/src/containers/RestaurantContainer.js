import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter} from 'react-router-dom';
import { fetchFull } from '../actions/restaurantActions';
import MenuForm from './../components/restaurants/MenuForm';
import ItemForm from './../components/restaurants/ItemForm';
import RestaurantList from './../components/restaurants/RestaurantsList';
import RestaurantDetails from '../components/restaurants/RestaurantDetails';

class RestaurantContainer extends React.Component {
	constructor(props) {
		super(props)
		
		if (!this.props.currentRestaurant && !this.props.loadingFull) {
			this.props.fetchFull(this.props.match.params.id);
		} 
	}

	render() {
		const currentRestaurant = this.props.currentRestaurant;

		return (
			<div>
				{this.props.loggedIn &&
			    <div>
						<Link to={`/restaurants/${this.props.match.params.id}/add_menu`}>Add Menu Here</Link>		
						<Route path={`/restaurants/:id/add_menu`} component={MenuForm} />	  
				  </div>
		  	}
		  	
			  <Route exact path={`/restaurants/:id`} component={() => <RestaurantDetails restaurant={currentRestaurant} loggedIn={this.props.loggedIn} />} />  
			  <Route exact path={'/restaurants/:id/menus/:menu_id'} component={ItemForm} />	
			  <Route exact path={'/restaurants/:id/menus/:menu_id/menu_items/:menu_item_id'} component={ItemForm} />	
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer, userReducer}) => {
  return {
  	currentRestaurant: restaurantReducer.currentRestaurant,
  	cachedFullRestaurants: restaurantReducer.cachedFullRestaurants, 
  	loadingFull: restaurantReducer.loadingFull,
  	loggedIn: userReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFull }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RestaurantContainer));