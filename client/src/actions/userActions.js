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
			.then(res => dispatch({type: 'FETCH_TOKEN', payload: res.jwt || false}))
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