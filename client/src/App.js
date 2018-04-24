import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, createUser } from './actions/userActions';
import { createRestaurant, getAllergies } from './actions/restaurantActions'
import Homepage from './components/dashboard/Homepage'
import UserLoginForm from './components/users/UserLoginForm';
import UserCreateForm from './components/users/UserCreateForm';
import NavLinksContainer from './containers/NavLinksContainer';
import BasicAbout from './components/about/BasicAbout';
import RestaurantsContainer from './containers/RestaurantsContainer';
import AddItemForm from './components/restaurants/AddItemForm';
import './App.css';



class App extends Component {
  componentDidMount() {
    this.props.getAllergies()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><h1>Greenlight Menus</h1></Link>
            <NavLinksContainer /> 
          </header>
          <div className="main">
            <Route exact path="/" component={Homepage} /> 

            <Route path="/register" component={UserCreateForm} /> 
            <Route path="/login" component={UserLoginForm} /> 
            <Route path="/logout" render={() => (<h3>successfully logged out</h3>)} />
            <Route exact path="/about" component={BasicAbout} />

            <Route exact path="/restaurants" component={RestaurantsContainer} />
          </div>
        </div>
      </Router>  
    );
  }
}

const mapStateToProps = ({userReducer}) => {
  return {token: userReducer.token, username: userReducer.username}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchToken, createUser, createRestaurant, getAllergies}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);