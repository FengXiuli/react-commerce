import * as userActions from '../constants/login'

const initState = {}

export default function login(state = initState, action) {
	switch (action.type) {
		case userActions.LOGIN_USERINFO:
			return state = action.data;
		case userActions.LOGIN_UPDATE:
			return state = action.data;
		default:
			return state;
	}
}