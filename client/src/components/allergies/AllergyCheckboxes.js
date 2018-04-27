import React from 'react';
import { connect } from 'react-redux';

class AllergyCheckboxes extends React.Component {
	render() {
		const menu_id = this.props.menu_id || 'default';
		const boxes = this.props.allergies.map((allergy, i) => {
			const checked = this.props.menuItem.allergies.find( a => a.name === allergy.name) ? 'checked' : null;

			return (
				<div key={i}>
					<input type="checkbox" id={`${allergy.name}-${this.props.menu_id}`} name={`${allergy.name}-${this.props.menu_id}`} checked={checked}/> 
					<label htmlFor={`${allergy.name}-${this.props.menu_id}`}>{allergy.name}</label>
				</div>
			)
		});
		
		return (
			<div>{boxes}</div>
		)
	}
}


const mapStateToProps = ({restaurantReducer}) => {
  return {
  	allergies: restaurantReducer.allergies
  }
}

export default connect(mapStateToProps)(AllergyCheckboxes);