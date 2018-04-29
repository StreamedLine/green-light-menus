import { combineReducers } from 'redux';
import userReducer from './userReducer'
import restaurantReducer from './restaurantReducer'
import filterReducer from './filterReducer'

export default combineReducers({
	userReducer,
	restaurantReducer,
	filterReducer
})