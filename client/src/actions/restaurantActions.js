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

// export function postPutRestaurant(restaurant, usernameOrId, method) {
// 	let body = {}, path = '';
// 	if (method === 'POST') {
// 	  body = JSON.stringify({
// 			restaurant: restaurant,
// 			username: usernameOrId
// 	  });
// 	  path = "http://localhost:3000/restaurants";
// 	} else if (method === 'PUT') {
// 		body = JSON.stringify({
// 			restaurant: Object.assign({}, restaurant, {id: usernameOrId})
// 	  });
// 	  path = `http://localhost:3000/restaurants/${usernameOrId}`
// 	}

// 	const token = window.localStorage.getItem('token');
	
// 	return (dispatch) => {
// 		return fetch(path, {
// 			method: method,
// 			headers: {
// 				"Content-Type": "application/json",
//         "Accept": "application/json",
// 				"Authorization": `Bearer ${token}`
//       },
//       body: body
//     })
// 		.then(res => {return res.json()})
// 		.then(json => dispatch({type: 'POST_PUT_RESTAURANT', payload: json}))
// 	}
// }
export function postRestaurant(restaurant, username, method) {
  const body = JSON.stringify({
		restaurant: restaurant,
		username: username
  });
  const path = "http://localhost:3000/restaurants";
	const token = window.localStorage.getItem('token');
	
	return (dispatch) => {
		return fetch(path, {
			method: method,
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json",
				"Authorization": `Bearer ${token}`
      },
      body: body
    })
		.then(res => {return res.json()})
		.then(json => dispatch({type: 'POST_RESTAURANT', payload: json}))
	}
}
export function PutRestaurant(restaurant, restaurantId, method) {
	const body = JSON.stringify({
		restaurant: Object.assign({}, restaurant, {id: restaurantId})
	});
	const path = `http://localhost:3000/restaurants/${restaurantId}`;
	const token = window.localStorage.getItem('token');
	
	return (dispatch) => {
		return fetch(path, {
			method: method,
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json",
				"Authorization": `Bearer ${token}`
      },
      body: body
    })
		.then(res => {return res.json()})
		.then(json => dispatch({type: 'PUT_RESTAURANT', payload: json}))
	}
}


export function postMenu(menu, id, method, restaurant_id) {
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

	const token = window.localStorage.getItem('token');
	
	return dispatch => {
		return fetch(path, {
			method: method,
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: body
    })
		.then(res => res.json())
		.then(json => dispatch({type: `POST_PUT_MENU`, payload: json}))
	}
}


export function addMenuItem(menu, menu_id) {
	const token = window.localStorage.getItem('token');

	return dispatch => {
		return fetch(`http://localhost:3000/menus/${menu_id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
      	menu: menu
		  })
    })
			.then(res => res.json())
			.then(json => {return dispatch({type: 'ADD_MENU_ITEM', payload: json})})
	}
}

export function resetDone() {
	return {type: 'RESET_DONE'}
}

export function setLoadIndex(status) {
	return {type: 'SET_LOADED_INDEX', payload: status}
}
