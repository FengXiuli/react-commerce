import React from "react"
import api from '../../../api'
import HomeHotView from './HomeHotView'

export default class Home extends React.Component{
	constructor() {
		super()
		this.state = {
			homehot1: [],
			homehot2: []
		}
	}

	componentDidMount() {
		// 获取城市，传递参数
		const city = localStorage.getItem('city')
		api.homehot.homehot1Data(city)
		.then(res => res.json())
		.then(data => {
			this.setState({
				homehot1: data
			})
		})

		api.homehot.homehot2Data(city)
		.then(res => res.json())
		.then(data => {
			this.setState({
				homehot2: data
			})
		})
	}
	render() {
		const { homehot1, homehot2 } = this.state
		return (
				<div>
					<HomeHotView data={ homehot1 } title={ '热销单品' }/>
					<HomeHotView data={ homehot2 } title={ '家庭常用' }/>
				</div>	
			)
	}
}