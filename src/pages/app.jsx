import React from "react"
import { connect } from 'react-redux'
import * as cityActions from '../actions/city'
import { bindActionCreators } from 'redux'

 class App extends React.Component {

	/**
     * 初始化需求
     *    1.城市初始化
     * 
     */
     componentDidMount() {
     	const city = localStorage.getItem("city")
     	//调用函数initCity为其传入初始值{cityName: city || '上海'}进行城市的初始化
     	this.props.cityActions.initCity({
     		cityName: city || '上海'
     	})
     }

	render() {
		return (
			<div>
				{ this.props.children }		
			</div>
			)
	} 
}

function mapStateToProps (state) {
	return {
		city: state.city  //state.city中city表示的是合并之后的reducer中的city，之所以使用tate.city表示是因为我们将reducer合并了
	}
}
function mapDispatchToProps (dispatch) {
	return {
		cityActions: bindActionCreators(cityActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
