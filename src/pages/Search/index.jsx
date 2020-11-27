import React from "react"
import SearchHeader from './SearchHeader'
import SearchList from './SearchList'
import { connect } from 'react-redux'

class Search extends React.Component{

	render() {
		const cityName = this.props.city.cityName // 从redux中获取的城市名称
		const content = this.props.match.params.content // 接收Home页面路由跳转传递过来的值
		return (
			<div>
				<SearchHeader history={ this.props.history }/>
				<SearchList cityName={ cityName } content={ content } />
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		city: state.city
	}
}
export default connect(mapStateToProps)(Search)