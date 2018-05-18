import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, createUser, checkLoginStatus } from './actions/userActions';
import { postRestaurant, putRestaurant, getAllergies } from './actions/restaurantActions'
import Homepage from './components/dashboard/Homepage'
import RestaurantForm from './components/restaurants/RestaurantForm';
import UserLoginForm from './components/users/UserLoginForm';
import UserCreateForm from './components/users/UserCreateForm';
import { FooterComponent } from './components/users/Footer';
import NavLinksContainer from './containers/NavLinksContainer';
import BasicAbout from './components/about/BasicAbout';
import RestaurantsContainer from './containers/RestaurantsContainer';
import './App.css';



class App extends Component {
  componentDidMount() {
    this.props.checkLoginStatus();
    this.props.getAllergies();
    //play around with calling both of these api endpoints in one action and using Promise.all([fetch1, fetch2]) to wait for both responses
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavLinksContainer /> 
          </header>
          
          <div className="main">
            <Switch>
              <Route exact path="/" component={Homepage} /> 
              <Route path="/register" component={UserCreateForm} /> 
              <Route path="/login" component={UserLoginForm} /> 
              <Route path="/logout" render={() => (<h3>successfully logged out</h3>)} />
              <Route exact path="/about" component={BasicAbout} />
              <Route path="/create_restaurant" component={({history}) => (<RestaurantForm {...this.props} postRestaurant={this.props.postRestaurant} putRestaurant={this.props.putRestaurant} history={history} />)} />
              <Route path="/restaurants" component={RestaurantsContainer} />
            </Switch>
          </div>
        
        <FooterComponent />
        </div>
      </Router>  
    );
  }
}

const mapStateToProps = ({userReducer}) => {
  return {token: userReducer.token, username: userReducer.username}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchToken, createUser, postRestaurant, putRestaurant, getAllergies, checkLoginStatus}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);