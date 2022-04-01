import { CHANGE_SEARCH_FIELD,
			PENDING,
			SUCCESS,
			FAILED
 		} from './constants';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

// dispatch here comes from thunkMiddleware
export const searchRobots = () => (dispatch) => {
	dispatch({type: PENDING})

	fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: SUCCESS, payload: data}))
    .catch(error => dispatch({type: FAILED, payload: error}))
}