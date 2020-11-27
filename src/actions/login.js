import * as userActions from '../constants/login'

// data是传递的数据
export function loginUserInfo(data) {
	return {
		type: userActions.LOGIN_USERINFO,
		data
	}
}

// data是传递的数据
export function loginUpdate(data) {
	return {
		type: userActions.LOGIN_UPDATE,
		data
	}
}