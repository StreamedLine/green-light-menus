export function getAllergies() {
	return (dispatch) => {
		return fetch('http://localhost:3000/allergies')
			.then(res => res.json())
			.then(json => dispatch({type: 'GET_ALLERGIES', payload: json }))
	}
}

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

export function createRestaurant(restaurant, username) {
	return dispatch => {
		return fetch("http://localhost:3000/restaurants", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
				restaurant,
				username
		  })
    })
			.then(res => res.json())
			.then(json => dispatch({type: 'CREATE_RESTAURANT', payload: json}))
	}
}


export function addMenu(menu, restaurant_id) {
	return dispatch => {
		return fetch(`http://localhost:3000/restaurants/${restaurant_id}/menus`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
      	restaurant_id: restaurant_id,
				menu: menu
		  })
    })
			.then(res => res.json())
			.then(json => dispatch({type: 'ADD_MENU', payload: json, restaurant_id}))
	}
}

export function addMenuItem(menu, menu_id) {
	return dispatch => {
		return fetch(`http://localhost:3000/menus/${menu_id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
      	menu: menu
		  })
    })
			.then(res => res.json())
			.then(json => 	dispatch({type: 'ADD_MENU_ITEM', payload: json}))
	}
}




