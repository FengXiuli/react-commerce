import React from "react"
import DetailsDataView from './DetailsDataView'
import StoreBuy from './StoreBuy'
import api from '../../../api'

export default class DetailsData extends React.Component{
	constructor() {
		super()
		this.state = {
			data: {},
			comment: []
		}
	}
	componentDidMount() {
		// 房屋信息
		const id = this.props.id
		api.details.detailsData(id)
		.then(res => res.json())
		.then(res => {
			this.setState({
				data: res
			})
		})

		//房屋评价
		api.comment.commentData(id)
		.then(res => res.json())
		.then(res => {
			this.setState({
				comment: res.data
			})
		})
	}
	render() {
		const id = this.props.id
		return (
				<div>
					{
	                    this.state.data.title && this.state.comment ?
	                    <DetailsDataView data={ this.state.data } comment={ this.state.comment }/>
	                    : <div>数据请求中</div>
                	}
                	<StoreBuy history={ this.props.history } id= {this.props.id}/>
				</div>
			)
	}
}