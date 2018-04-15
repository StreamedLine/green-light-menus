import React from 'react';
import { Link } from 'react-router-dom';

export default class UserLinks extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.loggedIn
					?	<div>	
							<Link to="/create_restaurant">Add Restaurant</Link>
							<Link to="/logout" onClick={this.props.logoutUser}>Logout</Link> 
						</div>
					: <div>
							<Link to="/register">Register</Link>
							<Link to="/login">Login</Link>
						</div>
				}
			</div>
		)
	}
}

