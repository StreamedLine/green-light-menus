import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import MenuItem from './MenuItem';
import AddItemForm from './AddItemForm';

class Menu extends React.Component {
	render() {
		const menuItems = this.props.menu.menuItems.map((item, i)=> <MenuItem key={i} item={item} />) 
		const path = this.props.match.url

		return (
			<div>
				<h3>{this.props.menu.title}</h3>
				<AddItemForm menu_id={this.props.menu.id} />

				{this.props.loggedIn && false && "addItemForm should go here. (it's outside for testing purposes"}

				<div className="menuItems">
					{menuItems}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({userReducer}) => {
  return {
  	loggedIn: userReducer.loggedIn
  }
}

//const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators({ fetchFull }, dispatch)
//}

export default connect(mapStateToProps)(withRouter(Menu));