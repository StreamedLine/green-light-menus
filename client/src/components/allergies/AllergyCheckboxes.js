import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
	margin-top: 5px;
  padding: 10px;
  background-color: lightgrey;
  text-align: center;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
	display: inline-block;
	font-size: 1.25em;
	margin-left: -5px;
	padding-left: 0;
	cursor: pointer;
	user-select: none;
	transition: color 0.3s;
`;

class AllergyCheckboxes extends React.Component {
	onCheck = (e) => {
		const elInput = e.target.parentElement.getElementsByTagName('input')[0];
		const elLabel = e.target.parentElement.getElementsByTagName('label')[0];
		if (elInput.checked) {
			elLabel.classList.add('green')
			elLabel.classList.remove('red')
		} else {
			elLabel.classList.add('red')
			elLabel.classList.remove('green')
		}
	}

	render() {
		const menu_id = this.props.menu_id || 'default';
		const boxes = this.props.allergies.map((allergy, i) => {
			
			if (this.props.menuItem) {
				var checked = this.props.menuItem.allergies.find( a => a.name === allergy.name) ? 'checked' : null;
			}

			return (
				<div key={i}>
					<Input type="checkbox" onChange={this.onCheck} id={`${allergy.name}-${this.props.menu_id}`} name={`${allergy.name}-${this.props.menu_id}`} defaultChecked={checked} /> 
					<Label className={checked ? 'green' : 'red'} htmlFor={`${allergy.name}-${this.props.menu_id}`}>{allergy.name}</Label>
				</div>
			)
		});
		
		return (
			<Div>{boxes}</Div>
		)
	}
}


const mapStateToProps = ({restaurantReducer}) => {
  return {
  	allergies: restaurantReducer.allergies
  }
}

export default connect(mapStateToProps)(AllergyCheckboxes);