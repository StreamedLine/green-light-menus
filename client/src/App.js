import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import { fetchToken } from './actions/userActions'
import logo from './logo.svg';
import './App.css';

const loginForm = () => {
  return (
    <form onSubmit>
      Email <input type="text" value="email" name="email" />
      <br/>
      Password <input type="password" />
      <br/>
      <input type="submit" value="Login" />
    </form>
  )
}

class App extends Component {

  //```DEV
    // componentDidMount() {
    //   this.props.fetchToken('dave@dave.com', 'password')
    // }
  //^^^DEV

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Future</h1>
            <Link to="/login">Login</Link>
          </header>
        

          <Route path="/login" render={loginForm} />
        </div>
      </Router>  
    );
  }
}

const mapStateToProps = (state) => {
  return {token: state.token}
}

export default connect(mapStateToProps)(App);

//DEV ONLY BELOW
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({fetchToken: fetchToken}, dispatch)
// }


