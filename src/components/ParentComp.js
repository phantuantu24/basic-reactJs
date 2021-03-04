import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			name: 'Phan Tuan Tu'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Tuan Tu'
			})
		}, 2000)
	}
	
	render() {
		console.log('********* PARENT COMPONENT **********')
		return (
			<div>
				Parent Component
				<RegularComp name={this.state.name}/>
				<PureComp name={this.state.name}/>
			</div>
		)
	}
}

export default ParentComp
