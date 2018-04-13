import React from 'react'

export default class CreateForm extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.createUser(this.state)
		this.props.history.push('/login')
	}

	render() {
	  return (
  	  <form onSubmit={this.handleOnSubmit}>
  	  	<h3>Create Account</h3> 
  	  	<p>
	    	  <label htmlFor="username">username</label>
  	    	<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange} />
	  	  </p>
    		<p>
	    	  <label htmlFor="email">email</label>
  	    	<input type="email" value={this.state.email} name="email" onChange={this.handleOnChange} />
	  	  </p>
	      <p>
	      	<label htmlFor="password">password</label>
	      	<input type="password" value={this.state.password} name="password" onChange={this.handleOnChange} />
	      </p>
	      <br/>
	      <input type="submit" value="Create Account" />
	    </form>
	  )
	}
}