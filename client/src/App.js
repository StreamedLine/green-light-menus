import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, createUser } from './actions/userActions';
import { createRestaurant } from './actions/restaurantActions'
import UserLoginForm from './components/users/UserLoginForm';
import UserCreateForm from './components/users/UserCreateForm';
import NavLinksContainer from './containers/NavLinksContainer';
import BasicAbout from './components/about/BasicAbout';
import RestaurantsContainer from './containers/RestaurantsContainer';
import Restaurant from './components/restaurants/Restaurant';
import CreateRestaurant from './components/restaurants/CreateRestaurant';
import './App.css';



class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><h1>Greenlight Menus</h1></Link>
            <NavLinksContainer /> 
          </header>
          <div className="main">
            <Route exact path="/" render={() => (<h2>Welcome To Greenlight Menus</h2> )} /> 
            <Route path="/register" component={({history}) => (<UserCreateForm createUser={this.props.createUser} history={history} />)} /> 
            <Route path="/login" component={({history}) => (<UserLoginForm fetchToken={this.props.fetchToken} history={history} />)} /> 
            <Route path="/logout" render={() => (<h3>successfully logged out</h3>)} />
            <Route exact path="/about" render={BasicAbout} />

            <Route path="/create_restaurant" component={({history}) => (<CreateRestaurant createRestaurant={this.props.createRestaurant} history={history} username={this.props.username} />)} />

            <Route exact path="/restaurants" component={RestaurantsContainer} />
            <Route path="/restaurants/:id" component={({match}) => (<Restaurant id={match.params.id}/>)} />
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
  return bindActionCreators({fetchToken, createUser, createRestaurant}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);