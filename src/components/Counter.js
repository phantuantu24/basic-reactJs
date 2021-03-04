import React, { Component } from 'react'

class Counter extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	increment() {
		// this.setState({
		// 	count: this.state.count += 1
		// })
		this.setState((prevState) => ({
			count: prevState.count + 1
		}))
		console.log(this.state.count);
	}

	decrement() {
		if (this.state.count > 0) {
			this.setState({
				count: this.state.count -= 1
			}, () => {
				console.log("Callback Value: ", this.state.count);
			})
		}
	}

	render() {
		return (
			<div>
				<h3>Counter - {this.state.count}</h3>
				<div className="buttonFunc">
					<button onClick={() => this.increment()}>Increment</button>
					<button onClick={() => this.decrement()}>Decrement</button>
				</div>
			</div>
		)
	}
}

export default Counter
