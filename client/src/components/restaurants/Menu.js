import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import AddItemForm from './AddItemForm';

class Menu extends React.Component {
	render() {
		const menuItems = this.props.menu.menuItems.map(item=> <MenuItem item={item} />) 

		return (
			<div>
				<h3>{this.props.menu.title}</h3>
				
				{this.props.loggedIn && <AddItemForm />}

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

export default connect(mapStateToProps)(Menu);