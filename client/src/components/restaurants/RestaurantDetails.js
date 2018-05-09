import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantBasicDetails from './RestaurantBasicDetails';
import Menu from './Menu';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';
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

const H4 = styled.h4`
	margin: 0;
`;

const MenuFilter = styled.div`
	margin-bottom: 1em;
`;

export default class RestaurantDetails extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			greenlights: []
		}
	}

	handleOnSubmit = (e) => {
		e.preventDefault();

		const checkboxes = e.target.querySelectorAll('input[type=checkbox]');
		const checked = Array.from(checkboxes).filter(cb => cb.checked);
		const greenlights = checked.map(cb => cb.name.split('-').slice(0,-1).join(''));

		this.setState({greenlights: greenlights})
	}

	render() {
		const restaurant = this.props.restaurant;
		const menus = restaurant.menus.map((menu, i)=> {
			let menuItems = restaurant.menuItems.find(mi => mi.menu_id == menu.id);
			menuItems = menuItems ? menuItems.menuItems : [];
			return (<Menu key={i} restaurant={restaurant.restaurant} menu={menu} menuItems={menuItems} greenlights={this.state.greenlights} loggedIn={this.props.loggedIn} />)
		});

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

						<RestaurantBasicDetails restaurant={restaurant.restaurant} />

						<div className="menus">
							<h1>Menus</h1>
							<ExtendedToolbar>
								<H3>Menu List</H3>
		
								<MenuFilter>
									<H4>filter Menus</H4>
									<form onSubmit={this.handleOnSubmit}>
										<AllergyCheckboxes />
										<input type="submit" value="filter"/>
									</form>
								</MenuFilter>
		
								{restaurant.menus.map((menu, i)=> <MenuLink key={i} href={'#' + menu.id}> {menu.title} </MenuLink>)}
							</ExtendedToolbar>
							
							{menus}
						</div>
					</div>										
				}
			</div>
		)
	}
}