import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, resetDone } from '../../actions/userActions';


class LoginForm extends React.Component {
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
	}

	render() {
		var message = null;
		if (this.props.done) {
			this.props.resetDone();
			this.props.history.push('/')
		} else {
			if (this.props.err && this.props.err.on == 'login') {
				message = this.props.err.msg;
			}
		}

	  return (
  	  <form onSubmit={this.handleOnSubmit}>
  	  	<h3>Login</h3>
  	  	<h4>{message}</h4>
    		<p>
	    	  <label htmlFor="email">email</label>
  	    	<input type="email" value={this.state.email} name="email" onChange={this.handleOnChange} />
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

const mapStateToProps = ({userReducer}) => {
  return {authenticateUser: userReducer.authenticateUser, done: userReducer.done, err: userReducer.error}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchToken, resetDone}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);