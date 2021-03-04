import React, { Component } from 'react'

export class RefsDemo extends Component {
	
	constructor(props) {
		super(props)
		// 1st way
		this.inputRef = React.createRef();
		//2nd way
		this.callbackRef = null
		this.setCallbackRef = (element) => {
			this.callbackRef = element
		}
	}
	
	componentDidMount() {
		//1st way Ref
		// this.inputRef.current.focus()
		// console.log(this.inputRef)
		//2nd way Ref
		if (this.callbackRef) {
			this.callbackRef.focus()
		}
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef}/>
				<input type="text" ref={this.setCallbackRef}/>
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default RefsDemo
