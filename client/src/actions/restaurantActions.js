export function fetchRestaurants() {
	return (dispatch) => {
		return fetch('http://localhost:3000/restaurants')
			.then(res => res.json())
			.then(json => dispatch({type: 'FETCH_RESTAURANTS', payload: json }))
	}
}

export function fetchFull(id) {
	return (dispatch) => {
		dispatch({type: 'SET_LOAD_STATUS', payload: true});
		return fetch('http://localhost:3000/restaurants/' + id)
			.then(res => res.json())
			.then(json => { 
				if (json.status === 404) {
					json = false
				}
				dispatch({type: 'SET_LOAD_STATUS', payload: false});
				return dispatch({type: 'FETCH_FULL', payload: json });
			});
	}
}