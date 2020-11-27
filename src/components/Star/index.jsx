import React from "react"
import './style.less'

export default class Star extends React.Component {
	render() {
		let star = this.props.star
		if (star >= 5) {
			star = 5
		}
		return (
			<div className="star-container">
				{
					[1, 2, 3, 4, 5].map((item, index) => {
						// 注意点： light前面是有空格的，因为下面的className是使用的字符串拼接的形式组合在一起的，而样式class当有多个样式的时候是使用空格隔开的
						let lightClass = star >= item ? ' light' : ''
						return <i key={ index } className={'icon-star' + lightClass}></i>
					})
				}			
			</div>
			)
	}
}