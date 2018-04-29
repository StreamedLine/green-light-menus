export function search(search) {
	const body = JSON.stringify({
		search
  });
	return dispatch => {
		return fetch('http://localhost:3000/search', {
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: body
    })
		.then(res => res.json())
		.then(json => {
			dispatch({type: 'UPDATE_GREENLIGHT', payload: json.greenLights})
			dispatch({type: 'FETCH_RESTAURANT', payload: json.restaurants})
		});
	}
}