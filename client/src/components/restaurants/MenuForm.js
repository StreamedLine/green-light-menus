import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMenu } from '../../actions/restaurantActions';

class AddMenuForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();

		this.props.addMenu(this.state, this.props.match.params.id);
		
		this.props.history.push(this.props.location.pathname.match(/\/.*\/\d+/)[0])
	}

	render() {
		return (
			<div className="pullLeft">
				<h4>Add New Menu Here</h4>
				<p>Example: Breakfast Menu</p>
				<form onSubmit={this.handleOnSubmit} >
						<label htmlFor='title'>Title</label>
						<input type="text" name='title' id='title' value={this.state.title} onChange={this.handleOnChange} />
						<input type="submit" value="Add Menu"/>
				</form>		
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addMenu }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddMenuForm);