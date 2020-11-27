import React from "react"
import './style.less'

export default class CoLoginView extends React.Component {
	constructor() {
		super() 
		this.state = {
			value: ''
		}
	}
	// input受控组件：输入用户名
	userHandler(event) {
		this.setState({
			value: event.target.value
		})
	}
	// 登录(这边登录的功能要写在业务逻辑的代码中，而不是View组件中，所以我们通过子传父值的形式，一层层传给Login-->index.jsx)
	loginHandler() {
		this.props.onloginHandler(this.state.value)
	}

	render() {
		const icon1 = this.props.icon1
		const icon2 = this.props.icon2 
		const placeholder1 = this.props.name === "密码登录" ? "请输入用户名" : "请输入手机号"
		const placeholder2 = this.props.name === "短信登录" ? "请输入短信" : "请输入密码"
		const show = this.props.name === "短信登录" ? 'show': ''
		return (
			<div className="co-login">
				<section className="person-login">
					<div className="login-name">
					    <span ><i className={ `iconfont ${icon1}` }></i></span>
						<input 
						type="text"
						value={ this.state.value }
						placeholder={ placeholder1 }
						onChange={ this.userHandler.bind(this) }
						/>
					</div>
					<div className="login-password">
					    <span><i className={`iconfont ${icon2}`}></i></span>
						<input
						type="text"
						placeholder={ placeholder2 }
						/>
					</div>
					<button onClick={ this.loginHandler.bind(this) }>登录</button>
				</section>
				<section className="otherway-login">
					<div className="weixin-login">
						<span><i className="iconfont icon-weixin"></i>&nbsp;微信登录</span>
						<span><i className="iconfont icon-qq"></i>&nbsp;QQ登录</span>
					</div>
					<div className="register clear-fix">
						<span>免费注册</span>
						<span className={show}>忘记密码</span>
						<span className={show}>忘记用户名</span>
					</div>
				</section>			
			</div>
			)
	}
}