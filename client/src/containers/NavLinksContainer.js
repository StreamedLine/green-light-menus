import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import UserLinks from '../components/users/UserLinks';

class NavLinksContainer extends React.Component {
	render() {
		return (
			<div>
				<UserLinks loggedIn={this.props.loggedIn} logoutUser={this.props.logoutUser} />
				<Link to="/">Home</Link>
				<Link to="/restaurants">Restaurants</Link>
				<Link to="/about">About</Link>
			</div>
		)
	}
}

const mapStateToProps = ({userReducer}) => {
  return {loggedIn: userReducer.loggedIn}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logoutUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLinksContainer);