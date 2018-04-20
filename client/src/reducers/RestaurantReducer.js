const initialState = {restaurants: [], cachedFullRestaurants: [], loadedIndex: false, loadingFull: false};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_RESTAURANTS':
			if (state.loadedIndex) return state;
			return Object.assign({}, state, {restaurants: action.payload, loadedIndex: true});

		case 'FETCH_FULL':
			if (!action.payload || state.cachedFullRestaurants.filter(r => r.id === action.payload.id).length > 0) {
  			return state
			}
			const cachedFullRestaurants = state.cachedFullRestaurants.concat(action.payload)
			return Object.assign({}, state, {cachedFullRestaurants: cachedFullRestaurants});

		case 'SET_LOAD_STATUS':
			return Object.assign({}, state, {loadingFull: action.payload})

	  case 'CREATE_RESTAURANT':
	  	const newState = Object.assign({}, state, {restaurants: state.restaurants.concat(action.payload), cachedFullRestaurants: state.cachedFullRestaurants.concat(action.payload)})
	  	return newState

	  case 'ADD_MENU':
	  	return state

		default:
			return state;
	}
}
