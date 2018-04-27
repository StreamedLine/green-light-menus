import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MenuItem extends React.Component {
	render() {
		const greenLights = this.props.item.allergies.map((greenLight, i)=> <span key={i}>{greenLight.name}</span>)
		
		return (
			<div>
				<div className="menuItem">
					<hr/>
					<Link to={`${this.props.location.pathname}/menus/${this.props.menu.id}/menu_items/${this.props.item.id}`}>Edit</Link>
					<div className="menuItemTitle">{this.props.item.title} <em>Green Lights:</em> {greenLights}</div>
					{this.props.item.description} 
					{false && "Allow Edit here if logged in"}
				</div>
			</div>
		)
	}
}

export default withRouter(MenuItem)