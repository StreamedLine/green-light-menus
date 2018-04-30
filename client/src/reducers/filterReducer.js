const initialState = {
	greenLights: [],
	customMode: false,
	searchResults: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_GREENLIGHTS':
			return Object.assign({}, state, {greenLights: action.payload}, {customMode: true})

		case 'SEARCH':
			return Object.assign({}, state, {searchResults: action.payload})

		default:
			return state;
	}
}

