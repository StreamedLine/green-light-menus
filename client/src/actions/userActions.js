import { API_URL } from '../constants';

export function fetchToken(email, password) {
	return dispatch => {
		return fetch(API_URL, {email, password})
			.then(res => res.json())
			.then(res => dispatch({type: 'FETCH_TOKEN', payload: res.jwt}))
	}
}