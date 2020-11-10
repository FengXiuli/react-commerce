import React from 'react'
import './style.less'

export default class Swiper extends React.Component {
	render() {
		const dots = this.props.dots
		const bannerDots = new Array(dots).fill(1)
		const currentIndex = this.props.currentIndex
		return (
			<div className='swiper-pagination'>
					<ul>
						{
							bannerDots.map((element, index) => {
								return(
									//注意1：值得学习的表达方式*
										<li key={index} className={currentIndex === index ? 'selected' : ''}></li> 
									)
							})
						}
						
					</ul>
			</div>
			)
	}
}