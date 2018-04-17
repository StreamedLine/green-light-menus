import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFull } from '../../actions/restaurantActions';
import { Link } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';

class Restaurant extends React.Component {
	constructor(props) {
		super(props)
		
		let restaurant = props.cachedFullRestaurants.find(r => r.id == props.id);
		if (!restaurant && !props.loadingFull) {
			props.fetchFull(props.id);
		} 
	}

	render() {
		const currentRestaurant = this.props.cachedFullRestaurants.find(r => r.id == this.props.id);

		return (
			<div>
				{this.props.loggedIn
					?	<p>
							<Link to={`/restaurants/${this.props.id}/add_menu`}>Add Menu Here</Link>
						</p>
					: <RestaurantDetails restaurant={currentRestaurant} loggedIn={this.props.loggedIn} />
				}
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);