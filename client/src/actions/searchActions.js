export function search(search) {
	const body = JSON.stringify({
		search
  });
	return dispatch => {
		dispatch({type: 'UPDATE_GREENLIGHT', payload: search.allergies_attributes})
		return fetch('http://localhost:3000/search', {
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: body
    })
		.then(res => res.json())
		.then(json => {
			dispatch({type: 'SEARCH', payload: json})
		});
	}
}