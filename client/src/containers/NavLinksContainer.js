import React from 'react';
import { Link } from 'react-router-dom';
import UserLinks from '../components/users/UserLinks';

export default class NavLinksContainer extends React.Component {
	render() {
		return (
			<div>
				<UserLinks loggedIn={this.props.loggedIn} logoutUser={this.props.logoutUser} />
				<Link to="/about">About</Link>
			</div>
		)
	}
}
