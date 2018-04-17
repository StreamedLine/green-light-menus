import React from 'react';

export default class MenuItem extends React.Component {
	render() {
		const greenLights = this.props.item.allergies.map(greenLight=> <span>{greenLight.name}</span>)
		return (
			<div>
				<div className="menuItem">
					<hr/>
					<div className="menuItemTitle">{this.props.item.title} <em>Green Lights:</em> {greenLights}</div>
					{this.props.item.description} 
					{false && "Allow Edit here if logged in"}
				</div>
			</div>
		)
	}
}