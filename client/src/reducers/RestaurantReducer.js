const initialState = {
	allergies: [],
 	restaurants: [], 
 	cachedFullRestaurants: [], 
 	loadedIndex: false, 
 	loadingFull: false, 
 	currentRestaurant: {restaurant: {}, menus: [], menuItems: []},
 	done: false, 
 	error: {on: '', msg: ''}
};

function handleError(state, action, on) {
	const error = {on: on, msg: action.payload.error[0]};
	return Object.assign({}, state, {error});
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLERGIES':
			return Object.assign({}, state, {allergies: action.payload});

		case 'FETCH_RESTAURANTS':
			return Object.assign({}, state, {restaurants: action.payload, loadedIndex: true});

		case 'FETCH_FULL':
			if (!action.payload) {
  			return state;
			}
			let cachedFullRestaurants = state.cachedFullRestaurants.slice(0);
			if (state.cachedFullRestaurants.find( r => r.id == action.payload.id)) {
				cachedFullRestaurants = cachedFullRestaurants.map( r => r.id == action.payload.id ? action.payload : r);
			} else {
				cachedFullRestaurants.push(action.payload);
			}
			var currentRestaurant = {restaurant: action.payload, menus: action.payload.menus, menuItems: action.payload.menus.map(menu => {return {menu_id: menu.id, menuItems: menu.menuItems}})}
			return Object.assign({}, state, {cachedFullRestaurants}, {currentRestaurant});

		case 'SET_LOAD_STATUS':
			return Object.assign({}, state, {loadingFull: action.payload});

	  case 'POST_PUT_RESTAURANT':
	  	if (action.payload.error) {
				return handleError(state, action, 'create');
			}	
			const error = {on: '', msg: ''};
			var currentRestaurant = {restaurant: action.payload, menus: action.payload.menus, menuItems: action.payload.menus.map(menu => {return {menu_id: menu.id, menuItems: menu.menuItems}})}
	  	return Object.assign({}, state, {error}, {done: true}, {restaurants: state.restaurants.concat(action.payload), cachedFullRestaurants: state.cachedFullRestaurants.concat(action.payload)}, {currentRestaurant});

	  case 'POST_PUT_MENU':
	  	console.log(action)
	  	// var restaurant = state.cachedFullRestaurants.find( r => r.id = action.restaurant_id);
	  	// var menus = restaurant.menus.map( m => m.id == action.payload.id ? action.payload : m);
	  	// restaurant = Object.assign({}, restaurant, {menus: menus});
	  	// var restaurants = state.cachedFullRestaurants.map( r => r.id == restaurant.id ? restaurant : r);
	  	var currentRestaurant = Object.assign({}, state.currentRestaurant, {menus: state.currentRestaurant.menus.concat(action.payload)})
	  	return Object.assign({}, state, {currentRestaurant});

	  case 'ADD_MENU_ITEM':
	  	var currentRestaurant = state.cachedFullRestaurants.find( r => r.menus.filter( m => m.id == action.payload.id).length > 0 );
	  	if (!currentRestaurant || action.payload.error) {
				return handleError(state, action, 'create')
			}	
			//add new menu to current restaurant here
	  	var restaurants = state.cachedFullRestaurants.map( r => r.id == currentRestaurant.id ? currentRestaurant : r);
	  	return Object.assign({}, state, {cachedFullRestaurants: restaurants}, {done: true}, {currentRestaurant: JSON.parse(JSON.stringify(currentRestaurant))});

	  case 'RESET_DONE':
			return Object.assign({}, state, {done: false});

		default:
			return state;
	}
}

