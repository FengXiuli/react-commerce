import React from "react"
import StoreBuyView from './StoreBuyView'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../../actions/collect"

 class StoreBuy extends React.Component {
 	constructor() {
 		super()
 		this.state = {
 			collected: false
 		}
 	}

 	componentDidMount() {
 		this.setState({
 			collected: this.isStore()
 		})
 	}

	//收藏
	oncollectHandler() {
		const username = this.props.login.name
		const goods_id = this.props.id
		if (username) {
			//isStore()为true表示已经收藏了，为false表示没有收藏
			if (this.isStore()) {
				// 取消收藏
				this.props.collectActions.cancelCollect({
					id: goods_id
				})
				this.setState({
		 			collected: false
		 		})
			} else {
				//收藏
				this.props.collectActions.setCollect({
					id: goods_id
				})
				this.setState({
		 			collected: true
		 		})
			}
			
		} else {
			this.props.history.push('/login')
		}
	}

	//判断是否收藏
	isStore() {
		 // debugger
		const collects = this.props.collect
		const goods_id = this.props.id
		return collects.some((element) => {
            return element.id === goods_id;
        })


		// return collects.some((element) => element.id === goods_id)
	}

	//购买
	onbuyHandler() {
		console.log('购买')
	}
	render() {
		return (
			<div>
				<StoreBuyView oncollectHandler={ this.oncollectHandler.bind(this) } onbuyHandler={ this.onbuyHandler.bind(this) } collected={ this.state.collected }/>			
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {    
		login: state.login,
		collect: state.collect
	}
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StoreBuy)