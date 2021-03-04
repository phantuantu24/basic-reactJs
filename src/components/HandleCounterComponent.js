import React, { Component } from 'react'

const HandleCounterComponent = (OriginalComponent, CounterNumber) => {
	class NewComponent extends Component {

		constructor(props) {
			super(props)
		
			this.state = {
				count: 0
			}
		}
		
		incrementCounter = () => {
			this.setState((prevState) => {
				return {
					count: prevState.count + CounterNumber
				}
			})
		}

		render() {
			return (
				<OriginalComponent 
					count={this.state.count} 
					incrementCounter={this.incrementCounter}
					{... this.props} //when add more params at App.js
				/>
			)
		}
	}
	return NewComponent
}

export default HandleCounterComponent