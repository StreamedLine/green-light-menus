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
	padding: 1em;
	border: 4px solid black;
`;

const MenuTitle = styled.h3`
	color: black;
	font-weight: bolder;
	font-size: 2em;
`;

export default class Menu extends React.Component {
	titleHelper = (title) => {
		if (title.split(/ -/).reverse()[0].toLowerCase() !== 'menu') {
			return title + ' Menu';
		} else {
			return title
		}
	}

	render() {
			const menuItems = this.props.menu.menuItems.map((item, i)=> {
				if (this.props.greenlights.count == 0) {return <MenuItem key={i} menu={this.props.menu} item={item} loggedIn={this.props.loggedIn} />}
				return this.props.greenlights.every(gl => item.allergies.find(a => a.name == gl)) ? <MenuItem key={i} menu={this.props.menu} item={item} loggedIn={this.props.loggedIn} /> : null;
			}) 

			return (
				<MenuDiv>
					<span id={this.props.menu.id}></span>
					<MenuTitle>{this.titleHelper(this.props.menu.title)}</MenuTitle>
			
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