import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { fetchRestaurants } from '../../actions/restaurantActions';
import RestaurantBasicDetails from './RestaurantBasicDetails';
import styled from 'styled-components';

const InlineDiv = styled.div`
	@media (min-width: 700px) {
    float: left;
    min-width: 300px;
  }
`;

const ContainerDiv = styled.div`
	width: 100%;
`;

const StyledSpan = styled.span`
	font-size: 0.8em;
	color: black;
	background: tomato;
	border-radius: 10px;
	cursor: pointer
`;

export default class RestaurantsList extends React.Component {
	constructor() {
		super();

		this.state = {
			selected: 'none'
		}
	}
	render() {
		const restaurants = this.props.restaurants.map(restaurant => {

		return (
				<div key={restaurant.id} className="restaurant">
					<Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
					<StyledSpan onClick={()=> this.setState({selected: restaurant.id})}>preview</StyledSpan>
				</div>
		)
		});

		return (
			<ContainerDiv>
				<InlineDiv className="restaurants pullLeft">
					{this.props.restaurants.length > 0 &&
						<h1>Restaurants</h1>
					}
					{restaurants}
				</InlineDiv>
				<InlineDiv className="preview">
					{this.state.selected != 'none' ? <RestaurantBasicDetails restaurant={this.props.restaurants.find(r => r.id == this.state.selected)} />	: null}
				</InlineDiv>
			</ContainerDiv>
		)
	}
}
