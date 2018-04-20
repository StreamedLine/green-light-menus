import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchToken, createUser } from './actions/userActions';
import { createRestaurant, getAllergies } from './actions/restaurantActions'
import UserLoginForm from './components/users/UserLoginForm';
import UserCreateForm from './components/users/UserCreateForm';
import NavLinksContainer from './containers/NavLinksContainer';
import BasicAbout from './components/about/BasicAbout';
import RestaurantsContainer from './containers/RestaurantsContainer';
import Restaurant from './components/restaurants/Restaurant';
import CreateRestaurant from './components/restaurants/CreateRestaurant';
import AddMenuForm from './components/restaurants/AddMenuForm'
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
            <Route exact path="/" render={() => (<h2>Welcome To Greenlight Menus</h2> )} /> 
            <Route path="/register" component={({history}) => (<UserCreateForm createUser={this.props.createUser} history={history} />)} /> 
            <Route path="/login" component={({history}) => (<UserLoginForm fetchToken={this.props.fetchToken} history={history} />)} /> 
            <Route path="/logout" render={() => (<h3>successfully logged out</h3>)} />
            <Route exact path="/about" render={BasicAbout} />

            <Route path="/create_restaurant" component={({history}) => (<CreateRestaurant createRestaurant={this.props.createRestaurant} history={history} username={this.props.username} />)} />
            <Route path={`/restaurants/:id/add_menu`} component={AddMenuForm} />

            <Route exact path="/restaurants" component={RestaurantsContainer} />
            <Route exact path="/restaurants/:id" component={({match}) => (<Restaurant id={match.params.id}/>)} />
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