import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
	text-align: left;
	margin-left: 10px;
	display: block;
	position: relative
`;

const Title = styled.span`
	display: inline-block;
	font-size: 1.2em;
	color: #111;
	margin: 0 30px;
`;

const GreenLights = styled.span`
	display: inline-block;
	right: 0;
	margin-right: 10px;
	position: relative;
`;

class MenuItem extends React.Component {
	render() {
		const greenLights = this.props.item.allergies.map((greenLight, i)=> <span key={i}>{greenLight.name}</span>)
		
		return (
			<div>
				<Item>
					<hr/>
					{false && "Allow Edit here if logged in"}
					<Link to={`${this.props.location.pathname}/menus/${this.props.menu.id}/menu_items/${this.props.item.id}`}>edit</Link>
					<Title className="menuItemTitle">{this.props.item.title}</Title> 
					{this.props.item.description} 
					<GreenLights><em>Green Lights:</em> {greenLights}</GreenLights>
				</Item>
			</div>
		)
	}
}

export default withRouter(MenuItem)