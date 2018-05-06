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

const MenuDiv = styled.div`
	background: lightgrey;
	padding:1em;
`;

const MenuTitle = styled.h3`
	color: black;
	font-weight: bolder;
	font-size: 2em;
`;

export default class Menu extends React.Component {
	render() {
			const menuItems = this.props.menu.menuItems.map((item, i)=> {
				const green = this.props.allergies.every(a => item.allergies.find(ia => ia.name == a));
				return <MenuItem key={i} menu={this.props.menu} item={item} />
				if (green) {
					return <MenuItem key={i} menu={this.props.menu} item={item} />
				} else {
					return null
				}
			}) 

			return (
				<MenuDiv>
					<span id={this.props.menu.id}></span>
					<MenuTitle>{this.props.menu.title}</MenuTitle>
			
					{this.props.loggedIn && 
						<Toolbar className='toolbar'>
							<Link to={`/restaurants/${this.props.restaurant.id}/menus/${this.props.menu.id}`}>Add Item</Link>
							<Link to={`/restaurants/${this.props.restaurant.id}/menus/${this.props.menu.id}/edit`}>Edit Menu</Link>
						</Toolbar>
					}

					<div className="menuItems">
						{menuItems}
					</div>
				</MenuDiv>
			)
		}
}