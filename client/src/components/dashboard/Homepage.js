import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  { search } from '../../actions/searchActions';
import  { setLoadIndex } from '../../actions/restaurantActions';
import AllergyCheckboxes from '../allergies/AllergyCheckboxes';
import RestaurantList from '../restaurants/RestaurantsList';

class Homepage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			search: {
				query: '',
				zip: ''
			}
		}
	}

	handleOnSubmit = (e) => {
		e.preventDefault();

		const checkboxes = e.target.querySelectorAll('input[type=checkbox]');
		const checked = Array.from(checkboxes).filter(cb => cb.checked);
		const checkedVals = checked.map(cb => {return {name: cb.name.split('-').slice(0,-1).join('')}});

		const search = Object.assign({}, this.state.search, {allergies_attributes: checkedVals});
		this.props.search(search);
	}

	handleOnChange = (e) => {
		var search = Object.assign({}, this.state.search, {[e.target.name]: e.target.value})
		this.setState(Object.assign({}, this.state, {search: search}))
	}

	render() {
		return (	
			<div>
				<h1>Welcome To Greenlight Menus</h1>

				<div className="searchByAllergies">
					<h3 className="black">Search</h3>
					<form onSubmit={this.handleOnSubmit}>
						<label htmlFor="query">search</label>
						<input type="text" id="query" name="query" onChange={this.handleOnChange} />
						<div className="extraSearch">
							<label htmlFor="zip">zip</label>
							<input type="text" id="zip" name="zip" placeholder='optional' onChange={this.handleOnChange} />
						</div>
						<input type="submit" value="search" />				
					</form>
				</div>
				<div className="searchResults">
				<h3 className="black">Search Results</h3>
					<RestaurantList restaurants={this.props.searchResults} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({filterReducer}) => {
  return {customMode: filterReducer.customMode, searchResults: filterReducer.searchResults}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ search, setLoadIndex }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);