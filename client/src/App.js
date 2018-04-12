import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, logoutUser, createUser } from './actions/userActions';
import UserLoginForm from './components/users/UserLoginForm';
import UserCreateForm from './components/users/UserCreateForm';
import NavLinksContainer from './containers/NavLinksContainer';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavLinksContainer loggedIn={this.props.loggedIn} logoutUser={this.props.logoutUser} /> 
          </header>
          <div className="main">
            <Route path="/register" render={() => (<UserCreateForm createUser={this.props.createUser} />)} /> 
            <Route path="/login" render={() => (<UserLoginForm fetchToken={this.props.fetchToken} />)} /> 
            <Route path="/logout" render={() => (<h3>successfully logged out</h3>)} />
          </div>    
        </div>
      </Router>  
    );
  }
}

const mapStateToProps = ({userReducer}) => {
  return {token: userReducer.token, loggedIn: userReducer.loggedIn}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchToken, logoutUser, createUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);