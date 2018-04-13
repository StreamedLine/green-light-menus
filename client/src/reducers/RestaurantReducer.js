const initialState = {restaurants: []};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_RESTAURANTS':
			return {restaurants: action.payload}
		default:
			return state
	}
}