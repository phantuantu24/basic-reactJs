import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

	//2nd way
	static contextType = UserContext

	render() {
		return (
			<div>
				Component E context "{this.context}"
				<ComponentF />
			</div>
		)
	}
}

//1st way
// ComponentE.contextType = UserContext

export default ComponentE
