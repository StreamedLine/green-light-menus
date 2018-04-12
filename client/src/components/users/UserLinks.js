import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class UserLinks extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.loggedIn
					?	<Link to="/logout" onClick={this.props.logoutUser}>Logout</Link> 
					: <div>
							<Link to="/register">Register</Link>
							<Link to="/login">Login</Link>
						</div>
				}
			</div>
		)
	}
}

