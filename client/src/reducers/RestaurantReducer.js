const initialState = {
	allergies: [],
 	restaurants: [], 
 	cachedFullRestaurants: [], 
 	loadedIndex: false, 
 	loadingFull: false, 
 	currentRestaurant: null,
 	done: false, 
 	error: {on: '', msg: ''}
};

function handleError(state, action, on) {
	const error = {on: on, msg: action.payload.error[0]}
	return Object.assign({}, state, {error});
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLERGIES':
			return Object.assign({}, state, {allergies: action.payload})

		case 'FETCH_RESTAURANTS':
			if (state.loadedIndex) return state;
			return Object.assign({}, state, {restaurants: action.payload, loadedIndex: true});

		case 'FETCH_FULL':
			if (!action.payload) {
  			return state
			}
			let cachedFullRestaurants = state.cachedFullRestaurants.slice(0);
			if (state.cachedFullRestaurants.find( r => r.id == action.payload.id) ) {
				cachedFullRestaurants = cachedFullRestaurants.map( r => r.id == action.payload.id ? action.payload : r)
			} else {
				cachedFullRestaurants.push(action.payload)
			}
			return Object.assign({}, state, {cachedFullRestaurants}, {currentRestaurant: action.payload});

		case 'SET_LOAD_STATUS':
			return Object.assign({}, state, {loadingFull: action.payload})

	  case 'CREATE_RESTAURANT':
	  	if (action.payload.error) {
				return handleError(state, action, 'create')
			}	
			const error = {on: '', msg: ''};
	  	return Object.assign({}, state, {error}, {done: true}, {restaurants: state.restaurants.concat(action.payload), cachedFullRestaurants: state.cachedFullRestaurants.concat(action.payload)}, {currentRestaurant: action.payload});

	  case 'ADD_MENU':
	  	return state

	  case 'ADD_MENU_ITEM':
	  	const restaurant = state.cachedFullRestaurants.find( r => r.menus.filter( m => m.id == action.payload.id).length > 0 );
	  	if (!restaurant || action.payload.error) {
				return handleError(state, action, 'create')
			}	
	  	const menus = restaurant.menus.map(m => action.payload.id == m.id ? action.payload : m);
	  	const restaurants = state.cachedFullRestaurants.map( r => r.id == restaurant.id ? restaurant : r);
	  	const currentRestaurant = state.cachedFullRestaurants.find( r => r.id == restaurant.id )
	  	return Object.assign({}, state, {cachedFullRestaurants: restaurants}, {done: true}, {currentRestaurant: currentRestaurant})


	  case 'RESET_DONE':
			return Object.assign({}, state, {done: false})

		default:
			return state;
	}
}

