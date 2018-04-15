import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFull } from '../../actions/restaurantActions';
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
		return (
			<div>
				<RestaurantDetails restaurant={this.props.cachedFullRestaurants.find(r => r.id == this.props.id)} />
			</div>
		)
	}
}

const mapStateToProps = ({restaurantReducer}) => {
  return {cachedFullRestaurants: restaurantReducer.cachedFullRestaurants, loadingFull: restaurantReducer.loadingFull}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFull }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);