const initialState = {
	allergies: [],
 	restaurants: [], 
 	cachedFullRestaurants: [], 
 	loadedIndex: false, 
 	loadingFull: false, 
 	currentRestaurant: {restaurant: {}, menus: [], menuItems: [], editable: false},
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
			var currentRestaurant = {restaurant: action.payload, 
															 menus: action.payload.menus, 
															 menuItems: action.payload.menus.map(menu => {return {menu_id: menu.id, menuItems: menu.menuItems}}),
															 editable: action.payload.user.username === window.localStorage.getItem('username')}
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
	  	var menus = state.currentRestaurant.menus.map(m => m.id == action.payload.id ? action.payload : m);
	  	var currentRestaurant = Object.assign({}, state.currentRestaurant, {menus});
	  	return Object.assign({}, state, {currentRestaurant});

	  case 'ADD_MENU_ITEM':
			var menuItems = state.currentRestaurant.menuItems.map(mi => mi.menu_id == action.payload.id ? {menu_id: action.payload.id, menuItems: action.payload.menuItems} : mi);
			if (!!menuItems.find(mi => mi.menu_id == action.payload.id) === false){
			  menuItems = menuItems.concat({menu_id: action.payload.id, menuItems: action.payload.menuItems});
			}
			var menus = state.currentRestaurant.menus.map(m => m.id == action.payload.id ? action.payload : m);
			var currentRestaurant = Object.assign({}, state.currentRestaurant, {menus}, {menuItems})
	  	return Object.assign({}, state, {done: true}, {currentRestaurant});

	  case 'RESTAURANT_EDITABLE':
	  	var currentRestaurant = Object.assign({}, state.currentRestaurant, {editable: true})
	  	return Object.assign({}, state, {currentRestaurant})

	  case 'RESTAURANT_NOT_EDITABLE':
	  	var currentRestaurant = Object.assign({}, state.currentRestaurant, {editable: false})
	  	return Object.assign({}, state, {currentRestaurant})

	  case 'RESET_DONE':
			return Object.assign({}, state, {done: false});

		default:
			return state;
	}
}

