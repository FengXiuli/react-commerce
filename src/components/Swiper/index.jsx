import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import Pagination from './Pagination'
import './style.less'

export default class Swiper extends React.Component {
	constructor() {
		super()
		this.state = {
			currentIndex: 0
		}
	}
	// 注意3：可以在这里打印出index,看看index表示的是什么
	// 注意6： 容易错将这种函数写进constructor中
	handleChangeIndex = index => {
		// 注意4：将我们所访问的每张轮播图的索引赋值给currentIndex
			this.setState({
				currentIndex: index
			})
		}
	render() {
		const banners = this.props.banners;
		return (
			<div className='swiper'>
				<SwipeableViews onChangeIndex={this.handleChangeIndex}>
					{
						banners.map((element, index) => {
							{/*注意1. map是有返回值的，返回值也应该使用括号括起来*/}
							return (
								<div key={index} className='swiper-view'>
									<img src={element} alt=""/> {/*注意2. img后面的斜杠 / 很容易忘记，最终会导致出错*/}
								</div>
								)
						})
					}

				</SwipeableViews>
				<Pagination dots={banners.length} currentIndex={this.state.currentIndex}/>{/*注意5：访问state设置的值的方式*/}
			</div>
			)
	}
}