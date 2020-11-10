import React from "react"
import NavBar from '../../components/NavBar'
import HomeHeader from './HomeHeader'
import HomeHot from './HomeHot'
import Swiper from '../../components/Swiper'

import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'
import banner4 from '../../static/images/banner4.png'
import banner5 from '../../static/images/banner5.png'
import banner6 from '../../static/images/banner6.png'

export default class Home extends React.Component{
	render() {
		return (
				<div>
					<HomeHeader />
					<Swiper banners={ [banner1,banner2,banner3,banner4,banner5,banner6] }/>
					<HomeHot />
					<NavBar />
				</div>	
			)
	}
}