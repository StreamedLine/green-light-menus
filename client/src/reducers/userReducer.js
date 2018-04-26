const initialState = {token: false, loggedIn: false, username: '', done: false, error: {on: '', msg: ''}};

function handleError(state, action, on) {
	const error = {on: on, msg: action.payload.error[0]}
	return Object.assign({}, state, {error});
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_USER':
			if (action.payload.error) {
				handleError(state, action, 'create')
			} else {
				const error = {on: '', msg: ''};
				return Object.assign({}, state, {error}, {done: true});
			}		
			break //gets rid of annoying error
		//will always return something by this point

		case 'FETCH_TOKEN':
			const {token, username} = action.payload;
			let newState = {};
			if (action.payload.jwt) {
				newState = {token, username, loggedIn: true, done: true, error: {on: '', msg: ''}}
			} else {
		    newState = {token: false, loggedIn: false, error: {on: 'login', msg: 'invalid username/password'}};
			}
			return Object.assign({}, state, newState)

		case 'RESET_DONE':
			return Object.assign({}, state, {done: false})

		case 'AUTHENTICATE_USER': 
			return action.authenticated ? state : {token: false, loggedIn: false};

		case 'LOGOUT_USER':
			return {token: false, loggedIn: false};

		default:
			return state
	}
}