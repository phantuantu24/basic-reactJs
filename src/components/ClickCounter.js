import React, { Component } from 'react'
import HandleCounterComponent from './HandleCounterComponent'

export class ClickCounter extends Component {

	render() {
		const { count, incrementCounter, name } = this.props
		return (
			<div>
				<button onClick={incrementCounter}> {name} Click {count} times</button>
			</div>
		)
	}
}

export default HandleCounterComponent(ClickCounter, 5)
