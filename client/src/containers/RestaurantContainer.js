import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter} from 'react-router-dom';
import { fetchFull, postPutMenu, postPutRestaurant} from '../actions/restaurantActions';
import MenuForm from './../components/restaurants/MenuForm';
import ItemForm from './../components/restaurants/ItemForm';
import RestaurantForm from './../components/restaurants/RestaurantForm';
import RestaurantList from './../components/restaurants/RestaurantsList';
import RestaurantDetails from '../components/restaurants/RestaurantDetails';

class RestaurantContainer extends React.Component {
	constructor(props) {
		super(props)
		
		if ((!this.props.currentRestaurant || this.props.currentRestaurant != this.props.match.params.id) && !this.props.loadingFull) {
			this.props.fetchFull(this.props.match.params.id);
		} 
	}

	render() {
		const currentRestaurant = this.props.currentRestaurant;

		return (
			<div>
				{this.props.loggedIn && currentRestaurant.editable &&
			    <div>
						<Route path={`/restaurants/:id/add_menu`} component={(props) => <MenuForm {...props} submitMenu={this.props.postPutMenu} />} />	 
				  </div>
		  	}
		  	
			  <Route exact path={`/restaurants/:id`} component={(props) => <RestaurantDetails {...props} allergies={this.props.allergies} restaurant={currentRestaurant} loggedIn={this.props.loggedIn} />} />  
			  {this.props.loggedIn && 
			  	<div>
					  <Route exact path='/restaurants/:id/edit' component={({history}) => (<RestaurantForm {...this.props} username={this.props.username} submitRestaurant={this.props.postPutRestaurant} history={history} edit={true} />)} />
					  <Route exact path={'/restaurants/:id/menus/:menu_id'} component={ItemForm} />	
					  <Route exact path={'/restaurants/:id/menus/:menu_id/edit'} component={(props) => <MenuForm {...props} submitMenu={this.props.postPutMenu} currentRestaurant={currentRestaurant} edit={true} />} />	
					  <Route exact path={'/restaurants/:id/menus/:menu_id/menu_items/:menu_item_id'} component={ItemForm} />	
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer, userReducer}) => {
  return {
  	allergies: restaurantReducer.allergies,
  	currentRestaurant: restaurantReducer.currentRestaurant,
  	cachedFullRestaurants: restaurantReducer.cachedFullRestaurants, 
  	loadingFull: restaurantReducer.loadingFull,
  	loggedIn: userReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFull, postPutMenu, postPutRestaurant }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RestaurantContainer));