import React from "react"
import Header from '../../../components/Header'
import Tabs from '../../../components/Tabs'
import CoLoginView from '../../../components/CoLoginView'
import './style.less'
export default class LoginView extends React.Component {
	onloginHandler(data) {
		// 传给父组件
		this.props.onUserloginHandler(data)
	}
	render() {
		return (
			<div id="login-view">
				<Header title="登录页"/>		
				<Tabs>
					<tab tablename="密码登录">
						<CoLoginView icon1="icon-mine" icon2="icon-phone" name="密码登录" onloginHandler={ this.onloginHandler.bind(this) }/>
					</tab>
					<tab tablename="短信登录">
						<CoLoginView icon1="icon-phone" icon2="icon-yanzhengma" name="短信登录"/>
					</tab>
				</Tabs>
			</div>
			)
	}
}