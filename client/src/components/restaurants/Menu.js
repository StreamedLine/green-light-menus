import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import MenuItem from './MenuItem';
import AddItemForm from './AddItemForm';


class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentForm: -1
		}
	}

	handleFormToggle = (id) => {
		if (id == this.state.currentForm) {
			this.setState({currentForm: -1})
		} else {
			this.setState({currentForm: id})
		}
	}

	render() {
		const menuItems = this.props.menu.menuItems.map((item, i)=> <MenuItem key={i} item={item} />) 
		const path = this.props.match.url

		return (
			<div className="menu">
				<h3>{this.props.menu.title}</h3>
				
				<Link to={`/restaurants/${this.props.currentRestaurantId}/menus/${this.props.menu.id}`} onClick={()=> {this.handleFormToggle(this.props.menu.id)}}>Add Item</Link>
				{(this.state.currentForm == this.props.menu.id) && <AddItemForm menu_id={this.props.menu.id} /> }

				{this.props.loggedIn && false && "addItemForm should go here. (it's outside for testing purposes"}

				<div className="menuItems">
					{menuItems}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({userReducer, restaurantReducer}) => {
  return {
  	currentRestaurantId: restaurantReducer.currentRestaurant.id,
  	loggedIn: userReducer.loggedIn
  }
}

//const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators({ fetchFull }, dispatch)
//}

export default connect(mapStateToProps)(withRouter(Menu));