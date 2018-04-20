import React from 'react';
import { connect } from 'react-redux';

class AddItemForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();


	}

	render() {
		const allergyBoxes = this.props.allergies.map(allergy => {return (<div>
				<input type="checkbox" id={allergy.name} name={allergy.name}/> 
				<label htmlFor={allergy.name}>{allergy.name}</label>
			</div>)})

		return (
			<div className="pullLeft">
				<h4>Add Item to Menu</h4>
				<form onSubmit={this.handleOnSubmit} >
						<label htmlFor='title'>Title</label>
						<input type="text" name='title' id='title' value={this.state.title} onChange={this.handleOnChange} />
						<label htmlFor='description'>description</label>
						<input type="text" name='description' value={this.state.description} onChange={this.handleOnChange} />
						<div className="allergyBoxes">
							{allergyBoxes}
						</div>
						<input type="submit" value="Add Item"/>
				</form>		
			</div>
		)
	}
}


const mapStateToProps = ({restaurantReducer}) => {
  return {
  	allergies: restaurantReducer.allergies
  }
}

export default connect(mapStateToProps)(AddItemForm);