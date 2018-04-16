const initialState = {token: false, loggedIn: false, username: ''};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TOKEN':
			const {token, username} = action.payload
		  const newState = action.payload ? {token: token, username: username, loggedIn: true} : {token: false, loggedIn: false};
			return Object.assign({}, state, newState)

		case 'AUTHENTICATE_USER': 
			return action.authenticated ? state : {token: false, loggedIn: false};

		case 'LOGOUT_USER':
			return {token: false, loggedIn: false};

		default:
			return state
	}
}