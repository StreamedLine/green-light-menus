import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const Toolbar = styled.div`
	display: block;
	background: white;
	padding: 0.5em;
	font-size: 1.25em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default class Menu extends React.Component {
	render() {
			const menuItems = this.props.menu.menuItems.map((item, i)=> <MenuItem key={i} menu={this.props.menu} item={item} />) 

			return (
				<div className="menu">
					<span id={this.props.menu.id}></span>
					<h3>{this.props.menu.title}</h3>
			
					{this.props.loggedIn && 
						<Toolbar>
							<Link to={`/restaurants/${this.props.restaurant.id}/menus/${this.props.menu.id}`}>Add Item</Link>
							<Link to={`/restaurants/${this.props.restaurant.id}/menus/${this.props.menu.id}/edit`}>Edit Menu</Link>
						</Toolbar>
					}

					<div className="menuItems">
						{menuItems}
					</div>
				</div>
			)
		}
}