import React from 'react';

class Restaurant extends React.Component {
	constructor(props) {
		super(props)

		props.fetchRestaurant();
	}
	render() {
		return (
			<div>
			im here
				{console.log(this.props)}
			</div>
		)
	}
}

export default Restaurant