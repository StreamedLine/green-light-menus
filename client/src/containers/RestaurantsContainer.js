import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurantActions';

class RestaurantsContainer extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.fetchRestaurants}>fetchRestaurants</button>
			</div>
		)
	}
}

const mapStateToProps = ({userReducer}) => {
  return {Restaurants: userReducer.Restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRestaurants }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);