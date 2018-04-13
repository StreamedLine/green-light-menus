export function fetchRestaurants() {
	return (dispatch) => {
		fetch('http://localhost:3000/retaurants')
			.then(res => res.json())
			.then(json => dispatch('FETCH_RESTAURANTS', {payload: json}))
	}
}