import React from "react"
import './style.less'
import SearchInput from '../../../components/SearchInput'
export default class Search extends React.Component{
	backHandler() {
		// 点击返回上一菜单
		window.history.back(-1)
	}
	render() {
		const history = this.props.history
		return (
			 <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={ this.backHandler.bind(this) }>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput history={ history }/>
                </div>
            </div>
			)
	}
}