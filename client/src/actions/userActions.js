export function fetchToken({email, password}) {
	return dispatch => {
		return fetch("http://localhost:3000/user_token", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
		    auth: {
		      email,
		      password
		    }
		  })
    })
			.then(res => res.json())
			.then(res => {
				if (!res.jwt) dispatch({type: 'FETCH_TOKEN', payload: {jwt: false}});
				fetch("http://localhost:3000/auth", {
					headers: {
						"Authorization": `Bearer ${res.jwt}`
					}
				})
					.then(response => response.json())
					.then(json => dispatch({type: 'FETCH_TOKEN', payload: {jwt: res.jwt, username: json.username}}))
				
			})
	}
}

export function authenticateUser(token) {
	return dispatch => {
		if (!token) dispatch({type: 'FETCH_TOKEN', payload: {jwt: false}});
		fetch("http://localhost:3000/auth", {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
			.then(response => response.json())
			.then(json => dispatch({type: 'FETCH_TOKEN', payload: {jwt: token, username: json.username}}))
		}
}

export function createUser({username, email, password}) {
	return dispatch => {
		return fetch("http://localhost:3000/users/create", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
		    user: {
		    	username,	
		      email,
		      password
		    }
		  })
    })
			.then(res => res.json())
	}
}

export function logoutUser() {
	return {type: 'LOGOUT_USER'}
}