const initialState = {token: false};

export default (state = initialState, action) => {
	console.log(state, action.type)
	switch (action.type) {
		case 'FETCH_TOKEN':
			return {token: action.payload}

		case 'AUTHENTICATE_USER': 
			return action.authenticated ? state : {token: false}

		default:
			return state
	}
}