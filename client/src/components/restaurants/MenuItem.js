import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
	text-align: left;
	margin-left: 10px;
	display: block;
	position: relative;
	color: black;
`;

const Title = styled.span`
	display: inline-block;
	font-size: 1.2em;
	color: #111;
	margin-right: 30px;
`;

const GreenLights = styled.span`
	display: inline-block;
	right: 0;
	margin-right: 10px;
	position: relative;
`;

const GreenLight = styled.span`
	display: inline-block;
	margin-left: 10px;
	color: green;
	text-shadow: 0 0 30px green;
	padding: 5px;
	border-radius: 50%;
	text-align: center;
`;

class MenuItem extends React.Component {
	render() {
		const greenLights = (this.props.item.allergies && this.props.item.allergies.length > 0) ? this.props.item.allergies.map((greenLight, i)=> <GreenLight key={i}>{greenLight.name}</GreenLight>) : null;
		
		return (
			<div>
				<Item>
					<hr/>
					{this.props.loggedIn &&
						<Link to={`${this.props.location.pathname}/menus/${this.props.menu.id}/menu_items/${this.props.item.id}`}>edit</Link>
					}
					<Title className="menuItemTitle">{this.props.item.title}</Title> 
					<GreenLights>{greenLights}</GreenLights>
					<p>{this.props.item.description}</p>
				</Item>
			</div>
		)
	}
}

export default withRouter(MenuItem)