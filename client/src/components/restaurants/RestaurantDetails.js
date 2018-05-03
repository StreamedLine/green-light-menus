import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantBasicDetails from './RestaurantBasicDetails';
import Menu from './Menu';
import styled from 'styled-components';

const Toolbar = styled.div`
	display: block;
	background: #cc9a9a;
	padding: 0.5em;
	font-size: 1.25em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ExtendedToolbar = Toolbar.extend`
	border-top: 4px solid #490647;
`;

const MenuLink = styled.a`
	font-size: 0.8em;
	text-decoration: none;
	border: 1px solid green;
	margin: 5px;
	background: lightgrey;
	padding: 5px;
	border-radius: 10px;
`;

const H3 = styled.h3`
	color: #490647;
`;

export default class RestaurantDetails extends React.Component {
	render() {
		const restaurant = this.props.restaurant;

		return (
			<div className='restaurantDetails'>
				{restaurant &&
					<div>
								
						
						{this.props.loggedIn &&
					    <Toolbar className="toolbar">
					    	<Link to={`/restaurants/${this.props.match.params.id}/edit`}>Edit Restaurant</Link>
								<Link to={`/restaurants/${this.props.match.params.id}/add_menu`}>Add Menu Here</Link>
						  </Toolbar>
				  	}

						<RestaurantBasicDetails restaurant={restaurant} />

						<div className="menus">
							<h1>Menus</h1>
							<ExtendedToolbar>
								<H3>Menu List</H3>
								{restaurant.menus.map((menu, i)=> <MenuLink href={'#' + menu.id}> {menu.title} </MenuLink>)}
							</ExtendedToolbar>
							
							{restaurant.menus.map((menu, i)=> <Menu key={i} restaurant={restaurant} menu={menu} loggedIn={this.props.loggedIn} />)}
						</div>
					</div>										
				}
			</div>
		)
	}
}