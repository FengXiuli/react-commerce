import React from 'react'
import './style.less'
export default class SearchInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}
	keyHandler(event) {
		const keyCode = event.keyCode
		const value = this.state.value
		if (keyCode === 13) {
			// 动态路由跳转(search后面的斜杠不要忘记)（不要忘记在路由页面进行配置哦）
			// 路由没有被直接管理，所以要通过从直接被路由管理的组件一步步地将this.props.history传递过来才可以的
			this.props.history.push('/search/' + value) // /search/的第一个斜杠前面是没有点的（容易写错）
		}
	}
	getValueHandler(event) {
		this.setState({
			value: event.target.value
		})
	}
	render() {
		return (
			<input 
			type="text"
			className="search-input"
			placeholder="请输入搜索内容"
			value={ this.state.value }
			onKeyUp={ this.keyHandler.bind(this) }
			onChange={ this.getValueHandler.bind(this) }
			/>
			)
	}
}