import React from 'react';

export default class CreateRestaurant extends React.Component {
	render() {
		return (
			<div>
			<h3>Add Your Restaurant Below</h3>
				<form>
					<p>
						<label for="name">name</label>
						<input type="text" name="name" id="name"/> 
					</p>
					
					<p>
						<label for="description">description</label>
						<input type="text" name="description" id="description"/> 
					</p>
					
					<p>
						<label for="phone">phone</label>
						<input type="text" name="phone" id="phone"/> 
					</p>
					
					<p>
						<label for="address">address</label>
						<input type="text" name="address" id="address"/> 
					</p>
					
					<p>
						<label for="zip">zip</label>
						<input type="text" name="zip" id="zip"/> 
					</p>
					
					<p>
						<label for="website">website</label>
						<input type="text" name="website" id="website"/> 
					</p>
					<p>
						<input type="submit"/>
					</p>
				</form>
			</div>
		)
	}
}


