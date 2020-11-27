import React from "react"
import Header from '../../../../components/Header'
import Swiper from '../../../../components/Swiper'
import Tabs from '../../../../components/Tabs'
import CommentDataView from '../CommentDataView'
import img1 from '../../../../static/images/img1.jpg'
import img2 from '../../../../static/images/img2.jpg'
import img3 from '../../../../static/images/img3.jpg'
import img4 from '../../../../static/images/img4.jpg'
import img5 from '../../../../static/images/img5.jpg'
import img6 from '../../../../static/images/img6.jpg'
import './style.less'

export default class DetailsDataView extends React.Component{
	render() {
		const data = this.props.data
		const imgs = [img1, img2, img3, img4, img5, img6]
		return (
				<div id="details-info">
					<Header title="详情页"/>
					<Swiper banners={ imgs }/>
					<Tabs>
						<tab tablename="房屋信息">
							<h3>{ data.title }</h3>
							<section className="price-info">	
								<ul className="clear-fix">
									<li>
										<span>{ data.price }</span>
										<span>租金</span>
									</li>
									<li>
										<span>{ data.info.type }</span>
										<span>房型</span>
									</li>
									<li>
										<span>{ data.houseType }</span>
										<span>面积</span>
									</li>
								</ul>
							</section>
							<section className="house-info clear-fix">	
								<div className="house-type">
		 							<p>楼层： { data.info.level }</p>
		 							<p>类型： { data.info.type }</p>
		 							<p>年代： { data.info.years }</p>
								</div>
								<div className="house-style">
		 							<p>装修： { data.info.style }</p>
		 							<p>朝向： { data.info.orientation }</p>
								</div>
							</section>
						</tab>
						<tab tablename="房屋评价">
							<CommentDataView comment={ this.props.comment }/>
						</tab>
							
					</Tabs>
						
				</div>
			)
	}
}