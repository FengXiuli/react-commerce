import {
	combineReducers
} from 'redux'
import city from './city'
import login from './login'
import collect from './collect'

const rootReducers = combineReducers({
	city,
	login,
	collect
})

export default rootReducers