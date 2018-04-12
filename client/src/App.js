import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { fetchToken } from './actions/userActions'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //```DEV
    // componentDidMount() {
    //   this.props.fetchToken('dave@dave.com', 'password')
    // }
  //^^^DEV

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.token}
        </p>
      </div>
    );
  }
}

export default App;

//DEV ONLY BELOW
// const mapStateToProps = (state) => {
//   return {token: state.token}
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({fetchToken: fetchToken}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
