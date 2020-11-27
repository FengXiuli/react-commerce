import React from "react"
import './style.less'

export default class LoadMore extends React.Component{
	constructor() {
		super()
		this.load = React.createRef()
	}

	/**
     * 监听页面滚动事件
     */
     componentDidMount() {
     	//将this指向当前组件，否则其指向全局
     	const that = this 
     	let timer = null // 此处timer不能使用const定义，因为下面timer是一直变化的
     	//获取页面的高度
     	const winHeight = document.documentElement.clientHeight
     	// 获取元素距离页面视窗顶部的距离
     	const divTop = that.load.current.getBoundingClientRect().top
     	window.onscroll = function(event) {
     		if (timer) {
     			clearTimeout(timer)
     		}
     		timer = setTimeout(function() {
     			if (divTop < winHeight) {
     				that.props.loadHandler() //是that 不是 this哦,所以页面会报错无法识别loadHandler
     			}
     		},100)
     	}
     }
     componentWillUnmount(){
        // 取消滚动事件
        window.onscroll = null;
    }

	render() {
		return (
				<div ref={ this.load }>
					加载更多
				</div>	
			)
	}
}