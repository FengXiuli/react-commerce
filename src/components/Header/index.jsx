import React from "react"
import './style.less'

export default class Header extends React.Component{
	clickBackHandler() {
		/**
         * 返回到上一级
         *     window.history.back(-1);  最好的方式  使用go()也是可以的
         *     this.props.history.push("/home")  不太好：因为是将该路由推到历史站的栈顶
         *     this.props.history.replace("/home")  更不好：因为替换了路由
         */
		window.history.back(-1)
	}
	render() {
		return (
				<div id="common-header">
					<span className="back-icon" onClick={ this.clickBackHandler }>
						<i className="icon-chevron-left"></i>
					</span>
					<h1>{ this.props.title }</h1>
				</div>	
			)
	}
}