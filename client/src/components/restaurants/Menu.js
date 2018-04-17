import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
	render() {
		const menuItems = this.props.menu.menuItems.map(item=> <MenuItem item={item} />) 

		return (
			<div>
				<h3>{this.props.menu.title}</h3>
				{menuItems}
			</div>
		)
	}
}