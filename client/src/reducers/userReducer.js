const initialState = {token: false, loggedIn: false};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TOKEN':
		  const newState = action.payload ? {token: action.payload, loggedIn: true} : {token: false, loggedIn: false};
			return newState

		case 'AUTHENTICATE_USER': 
			return action.authenticated ? state : {token: false, loggedIn: false};

		case 'LOGOUT_USER':
			return {token: false, loggedIn: false};

		default:
			return state
	}
}