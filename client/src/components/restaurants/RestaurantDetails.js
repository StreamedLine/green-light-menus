import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantBasicDetails from './RestaurantBasicDetails';
import Menu from './Menu';

export default class RestaurantDetails extends React.Component {
	render() {
		const restaurant = this.props.restaurant;

		return (
			<div className='restaurantDetails'>
				{restaurant &&
					<div>
						<Link to={`/restaurants/${this.props.match.params.id}/edit`}>Edit Restaurant</Link>
						<Link to={`/restaurants/${this.props.match.params.id}/add_menu`}>Add Menu Here</Link>		
						
						{this.props.loggedIn &&
					    <div>
						  </div>
				  	}

						<RestaurantBasicDetails restaurant={restaurant} />

						<div className="menus">
							<h2>Menu</h2>
							{restaurant.menus.map((menu, i)=> <Menu key={i} restaurant={restaurant} menu={menu} />)}
						</div>
					</div>										
				}
			</div>
		)
	}
}