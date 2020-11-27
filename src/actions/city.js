import * as cityActions from '../constants/city'

// data是传递的数据
export function initCity(data) {
	return {
		type: cityActions.INIT_CITY,
		data
	}
}

// data是传递的数据
export function updateCity(data) {
	return {
		type: cityActions.UPDATE_CITY,
		data
	}
}