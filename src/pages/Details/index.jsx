import React from "react"
import DetailsData from './DetailsData'


export default class Details extends React.Component{
	render() {
		const id = this.props.match.params.id

		return (
				<div>
					<DetailsData id={ id } history={ this.props.history }/>
				</div>
			)
	}
}

