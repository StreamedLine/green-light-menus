import React from 'react';
import key from '../../private/google-key';
import Menu from './Menu';

export default class RestaurantDetails extends React.Component {
	render() {
		const restaurant = this.props.restaurant;
		return (
			<div className='restaurantDetails'>
				{restaurant &&
					<div>
						<h3>{restaurant.name}</h3>
						<p>{restaurant.description}</p>
						<p><b>Address:</b> {restaurant.address} {restaurant.zip}</p>
						<p><a href={'//'+restaurant.website} target="_blank">{restaurant.website}</a></p>

						<iframe
						  width="600"
						  height="450"
						  frameBorder="0" style={{border: '4px solid grey'}}
						  src={`https://www.google.com/maps/embed/v1/place?key=${key}
						  						    &q=${encodeURI(restaurant.address+' '+restaurant.zip)}`} allowFullScreen>
						  }
						</iframe>)

						<div className="menus">
							<h2>Menu</h2>
							{restaurant.menus.map(menu=> <Menu menu={menu} />)}
						</div>
					</div>										
				}
			</div>
		)
	}
}