import { CHANGE_SEARCH_FIELD,
			PENDING,
			SUCCESS,
			FAILED
 		} from './constants';

const initialState = {
	searchfield: ''
}

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return {...state, searchfield: action.payload}
		default:
			return state;
	}
}

const initialRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const getRobots = (state=initialRobots, action={}) => {
	switch(action.type) {
		case PENDING:
			return Object.assign({}, state, {isPending: true})
		case SUCCESS:
			return Object.assign({}, state, {isPending: false, robots: action.payload})
		case FAILED:
			return Object.assign({}, state, {isPending: false, error: action.payload})
		default:
			return state;
	}
}