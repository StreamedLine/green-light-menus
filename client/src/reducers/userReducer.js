const initialState = {token: false};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TOKEN':
			return Object.assign({}, state, {token: action.payload})

		case 'AUTHENTICATE_USER': 
			return {action.authenticated ? state : Object.assign({}, state, {token: false})} 

		default:
			return state
	}
}