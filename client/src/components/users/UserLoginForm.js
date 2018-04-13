import React from 'react'

export default class LoginForm extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.fetchToken(this.state)
		this.props.history.push('/')
	}

	render() {
	  return (
  	  <form onSubmit={this.handleOnSubmit}>
  	  	<h3>Login</h3>
    		<p>
	    	  <label htmlFor="email">email</label>
  	    	<input type="text" value={this.state.email} name="email" onChange={this.handleOnChange} />
	  	  </p>
	      <p>
	      	<label htmlFor="password">password</label>
	      	<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange} />
	      </p>
	      <br/>
	      <input type="submit" value="Login" />
	    </form>
	  )
	}
}