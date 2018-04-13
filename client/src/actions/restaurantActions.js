export function fetchRestaurants() {
	return (dispatch) => {
		return fetch('http://localhost:3000/restaurants')
			.then(res => res.json())
			.then(json => dispatch({type: 'FETCH_RESTAURANTS', payload: json }))
	}
}

export function fetchRestaurant(id) {
	return (dispatch) => {
		return fetch('http://localhost:3000/restaurant/' + id)
			.then(res => res.json())
			.then(json => dispatch({type: 'FETCH_RESTAURANT', payload: json }))
	}
}