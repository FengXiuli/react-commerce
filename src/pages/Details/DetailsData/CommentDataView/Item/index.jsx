import React from "react"
import './style.less'
import Star from '../../../../../components/Star'

export default class Item extends React.Component {
	render() {
		const comment = this.props.comment
		return (
			<div className="comment-item-view">
				{
					comment.map((element, index) => {
						return (
							<div className="comment-item"key={ index }>
								<section>
								 	<span><i className="icon-user"></i></span>
								 	<span>{ element.username }</span>
								 </section>
								 <Star star={ element.star }/>
								 <p>{ element.comment }</p>
							</div>
							)
					})
				}
			</div>
				
			)
	}
}