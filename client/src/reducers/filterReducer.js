const initialState = {
	greenLights: [],
	customMode: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_GREENLIGHTS':
			if (action.payload.length > 0) {
				return Object.assign({}, state, {greenLights: action.payload}, {customMode: true})
			} 
			return Object.assign({}, state, {customMode: false})

		default:
			return state;
	}
}

