import React from 'react';
import key from '../../private/google-key'

export default class RestaurantDetails extends React.Component {
	render() {
		const restaurant = this.props.restaurant;
		console.log(key)
		return (
			<div className='restaurantDetails'>
				{restaurant &&
					<div>
						<h4>Description</h4>
						<p>{restaurant.description}</p>
						<h4>Address</h4>
						<p>{restaurant.address} {restaurant.zip}</p>
						<h4>Visit our website</h4>
						<p>{restaurant.website}</p>
						<iframe
						  width="600"
						  height="450"
						  frameBorder="0" style={{border: '4px solid grey'}}
						  src={`https://www.google.com/maps/embed/v1/place?key=${key}
						  						    &q=${encodeURI(restaurant.address+' '+restaurant.zip)}`} allowFullScreen>
						  }
						</iframe>
					</div>										}
			</div>
		)
	}
}