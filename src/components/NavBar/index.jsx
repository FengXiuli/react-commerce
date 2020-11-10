import React from 'react'
import { NavLink } from 'react-router-dom' 
import './style.less'

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="nav-bar">
		{/*清除浮动：一般一行排列而且使用了浮动元素的，都是要清楚浮动的，浮动的代码在初始化样式common.less中已经写好了*/}
			<ul className="clear-fix">
				<li>
					<NavLink exact to="/">
						<i className="iconfont icon-home"></i>
						首页
					</NavLink>
				</li>
				<li>
					<NavLink to="/shop">
						<i className="iconfont icon-shop"></i>
						商城
					</NavLink>
				</li>
				<li>
					<NavLink to="/life">
						<i className="iconfont icon-trophy"></i>
						生活服务
					</NavLink>
				</li>
				<li>
					<NavLink to="/mine">
						<i className="iconfont icon-team"></i>
						我的
					</NavLink>
				</li>
			</ul>
			</div>
			)
	}
}