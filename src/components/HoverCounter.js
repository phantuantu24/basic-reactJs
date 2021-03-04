import React, { Component } from 'react'
import HandleCounterComponent from './HandleCounterComponent'

export class HoverCounter extends Component {

	render() {
		const { count, incrementCounter, name } = this.props
		return (
			<h2 onMouseOver={incrementCounter}>
				{name} Hovered {count} times
			</h2>
		)
	}
}

export default HandleCounterComponent(HoverCounter, 10)
