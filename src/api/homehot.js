import base from './base'
import {
	getData
} from '../utils/http'

const homehot = {
	homehot1Data() {
		return getData(base.homehot1)
	},
	homehot2Data() {
		return getData(base.homehot2)
	}
}
export default homehot