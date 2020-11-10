import React from "react"
import './style.less'

export default class Home extends React.Component{

	render() {
		const data = this.props.data
		const title = this.props.title
		return (
				<div id="hotproduct">
					<h3>{ title }</h3>
	                <div className="hot-container">
	                {/*有浮动是要清除浮动的*/}
	                    <ul className="clear-fix">
	                        {
	                           data.map((element, index) => {
	                           	return (
	                           		<li key={ element.id }>
	                           			<a href={ element.link }>
		                           			<img src={ element.img } alt=""/>
		                           			<span>
		                           				{element.title}
		                           			</span>
	                           			</a>
	                           		</li>
	                           		)
	                           })
	                        }
	                    </ul>
	                </div>
				</div>	
			)
	}
}