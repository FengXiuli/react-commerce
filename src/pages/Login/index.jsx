import React from "react"
import LoginView from './LoginView'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userInfoActions from "../../actions/login"

class Login extends React.Component {

	onUserloginHandler(user) {
		// 将input输入框中用户输入的名称写入redux
		this.props.userInfoActions.loginUserInfo({
			name: user
		})

		//返回上一个页面
		window.history.back(-1)
	}

	render() {
		console.log('ddd',this.props.login.name)
		return (
			<div>
				<LoginView onUserloginHandler={ this.onUserloginHandler.bind(this) }/>		
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		login: state.login
	}
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userInfoActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)