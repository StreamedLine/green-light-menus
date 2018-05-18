import React from 'react';

export default class Like extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			likes: 0
		}
		//this.like = this.like.bind(this)
	}

	like = () =>  {
		const likes = this.state.likes + 1;
		this.setState({likes})
	}

	callApi = () => {
		console.log('a')
		fetch('http://localhost:3000/restfdfdsants')
			.then(res => {
				if (res.ok) {
					console.log('b', res)
					return res.json()
				}
				throw new Error(res.statusText)
			})
			.then(json => console.log('c', json))
			.catch(error => console.log('d', error))
				dispatch({type: 'ERROR_PRESENT', message: error})

				// a b c+json e

				// a e d+error
 	}

	render() {
		return (
			<div>
				<div onClick={ this.like}>Like {this.state.likes}</div>
				<div onClick={ this.callApi}>Call APi </div>
			</div>
		)
	}
}