const initialState = {token: false};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return Object.assign({}, state, {token: action.payload})
			
		default:
			return state
	}
}