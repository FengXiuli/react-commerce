import React from "react"
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'
import Header from '../../components/Header'
import * as cityActions from "../../actions/city"
import { bindActionCreators } from "redux"

import { connect } from 'react-redux'

 class City extends React.Component{

 	hotCityHandler = city => {
 		this.props.cityActions.updateCity({
 			cityName: city
 		})
 		// 返回到上一个页面
        window.history.back(-1);
        
        // 用户修改城市，需要存储
        localStorage.setItem("city",city);
    }
	render() {
		return (
				<div>
					<Header title="城市选择"/>
					<CurrentCity city={ this.props.city.cityName }/>
					<HotCity cityNameHandler={ this.hotCityHandler }/>
				</div>	
			)
	}
}

function mapStateToProps(state) {
	return {
		city: state.city
	}
}

function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)