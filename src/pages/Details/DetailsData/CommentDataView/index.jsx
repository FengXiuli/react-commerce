import React from "react"
import Item from './Item'

export default class Comment extends React.Component {
	render() {
		return (
			<div>
				 <Item comment={ this.props.comment } />	
			</div>
			)
	}
}