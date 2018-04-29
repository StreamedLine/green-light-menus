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


export function postPutMenu(menu, id, method, restaurant_id) {
	let body = {}, path = '';
	if (method === 'POST') {
	  body = JSON.stringify({
    	restaurant_id: id,
			menu: menu
	  });
	  path = `http://localhost:3000/restaurants/${id}/menus`
	} else if (method === 'PUT') {
		body = JSON.stringify({
			menu: Object.assign({}, menu, {id})
	  });
	  path = `http://localhost:3000/menus/${id}`
	}
	
	return dispatch => {
		return fetch(path, {
			method: method,
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: body
    })
		.then(res => res.json())
		.then(json => dispatch({type: `POST_PUT_MENU`, payload: json, id, restaurant_id}))
	}
}


export function addMenuItem(menu, menu_id) {
	console.log('hi');
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

export function resetDone() {
	return {type: 'RESET_DONE'}
}


