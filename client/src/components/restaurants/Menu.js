import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';


export default class Menu extends React.Component {
	render() {
			const menuItems = this.props.menu.menuItems.map((item, i)=> <MenuItem key={i} menu={this.props.menu} item={item} />) 
			//const path = this.props.match.url
			return (
				<div className="menu">
					<h3>{this.props.menu.title}</h3>
					
					<Link to={`/restaurants/${this.props.restaurant.id}/menus/${this.props.menu.id}`}>Add Item</Link>
					 
					{this.props.loggedIn && false && "addItemForm should go here. (it's outside for testing purposes"}

					<div className="menuItems">
						{menuItems}
					</div>
				</div>
			)
		}
}