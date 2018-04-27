import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser, resetDone } from '../../actions/userActions';


class CreateForm extends React.Component {
	constructor(props) {
		super(props);

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
	}

	render() {
		var message = null;
	
		if (this.props.done == true) {
			this.props.resetDone();
			this.props.history.push('/login')
		} else {
			if (this.props.err && this.props.err.on == 'create') {
				message = this.props.err.msg;
			}
		}

	  return (
  	  <form onSubmit={this.handleOnSubmit}>
  	  	<h3>Create Account</h3> 
  	  	<h4>{message}</h4>
  	  	<p>
	    	  <label htmlFor="email">email</label>
  	    	<input type="email" value={this.state.email} name="email" onChange={this.handleOnChange} />
	  	  </p>
  	  	<p>
	    	  <label htmlFor="username">username</label>
  	    	<input type="text" value={this.state.username} name="username" onChange={this.handleOnChange} />
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

const mapStateToProps = ({userReducer}) => {
  return {done: userReducer.done, err: userReducer.error}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser, resetDone}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);

