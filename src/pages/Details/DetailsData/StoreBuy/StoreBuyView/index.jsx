import React from "react"
import './style.less'
import { connect } from "react-redux"

export default class StoreBuyView extends React.Component {
	collectHandler() {
		this.props.oncollectHandler()
	}
	buyHandler() {
		this.props.onbuyHandler()
	}	
	render() {
		const collected = this.props.collected
		return (
			<div className="store">
				{
					collected ? <span className="store-uncollect " onClick={ this.collectHandler.bind(this) }>取消收藏</span>
					 : <span className="store-collect" onClick={ this.collectHandler.bind(this) }>收藏</span>
				
				}	
				<span className="store-buy" onClick={ this.buyHandler.bind(this) }>购买</span>	
			</div>
			)
	}
}

 