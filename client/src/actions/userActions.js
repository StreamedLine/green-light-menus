import { API_URL } from '../constants';

export function fetchToken(email, password) {
	return dispatch => {
		return fetch("http://localhost:3000/user_token", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
		    auth: {
		      email: "dave@dave.com",
		      password: "password"
		    }
		  })
    })
			.then(res => res.json())
			.then(res => dispatch({type: 'FETCH_TOKEN', payload: res.jwt || false}))
	}
}