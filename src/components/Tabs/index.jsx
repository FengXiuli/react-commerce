import React from "react"
import './style.less'

export default class Tabs extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			currentIndex: 0
		}
	}

	titleClickHandler(index) {
		return this.state.currentIndex === index ? "tab-title-after" : 'tab-title-before'
	}

	itemClickHandler(index) {
		return this.state.currentIndex === index ? "item-block" : 'item-none'
	}

	changeHandler(index) {
		// 如果想要改变state对象中的值只能通过setState，只能通过this.state访问state中的值
		this.setState({
			currentIndex: index
		})
		
	}

	render() {
		return (

			<div id="tab-wrap">
				<div className="tab-title-wrap">
				{/*
					此部分有很多注意点需要学习和总结的内容，如下：
						1. 如果想要改变state对象中的值只能通过setState，只能通过this.state访问state中的值
						2. className进行事件处理不需要使用bind来进行绑定的
						3. 点击1时1中的内容高亮，点击2时2中的内容高亮这种功能实现的逻辑：
							1. 在state中设置icurrentIndex初始值
							2. 给div添加点击事件（点击事件中传入index，通过setState将currentIndex的值更改为传入的index）
							3. 给className添加事件titleClickHandler，传入index（不需要使用bind绑定）
							4. 在titleClickHandler处理函数中实现逻辑（通过判断this.state.currentIndex === index，返回相应的name名称）
						4. react插槽需要借助React.Children.map（可以看官网）来遍历，第一个参数是要遍历的组件，第二个参数是map的函数,通过element.props.children展示所有的内容
							通过element.children.tabname展示tab中的tablename的值
						5. 在使用到该组件的父组件中使用tab组件进行切换内容的展示
				*/}
				{/*className进行事件处理不需要使用bind来进行绑定的*/}
					{
						React.Children.map(this.props.children, (element, index) => {
						return <span className={ this.titleClickHandler(index) } onClick={ this.changeHandler.bind(this, index) }>{ element.props.tablename}</span>
					})
					}
				</div>
				<div className="tab-item-wrap">
					{
						React.Children.map(this.props.children, (element, index) => {
						return <div className={ this.itemClickHandler(index) } onClick={ this.changeHandler.bind(this, index) }>{ element.props.children}</div>
					})
					}
				</div>
			</div>
			)
	}
}