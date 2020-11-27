import React from "react"
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'

export default class Mine extends React.Component{
	render() {
		return (
			<div>
				<NavBar />
				<Link to="./login"><button>登录</button></Link>
			</div>
			)
	}
}