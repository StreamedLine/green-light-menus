import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, logoutUser } from './actions/userActions'
import UserLoginForm from './components/users/UserLoginForm'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Future</h1>
            <Link to="/login">Login</Link>
            <Link to="/logout">logout</Link>
          </header>
        

          <Route path="/login" render={() => (<UserLoginForm fetchToken={this.props.fetchToken} />)} /> 
          <Route path="/logout" render={() => (<h3>successfully logged out</h3>)} />
          
        </div>
      </Router>  
    );
  }
}

const mapStateToProps = (state) => {
  return {token: state.token, loggedIn: state.loggedIn}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchToken, logoutUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




