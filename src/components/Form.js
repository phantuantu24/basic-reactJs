import React, { Component } from 'react'

export class Form extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 userName: '',
			 comment: '',
			 topic: 'react'
		}
	}
	
	handlerUsernameChange = (event) => {
		this.setState({
			userName: event.target.value
		});
	}

	handleCommentsChange = (event) => {
		this.setState({
			comment: event.target.value
		})
	}

	handlerTopicChange = (event) => {
		this.setState({
			topic: event.target.value
		})
	}

	handlerSubmit = (event) => {
		alert(`${this.state.userName}. My comments: ${this.state.comment}. I select ${this.state.topic}.`)
		event.preventDefault() // prevent form to clear data are typed before
	}

	render() {
		const { userName, comment, topic } = this.state
		return (
			<div>
				<h2>Form Component</h2>
				<form onSubmit={this.handlerSubmit}>
					<div>
						<label>Username</label>
						<input type="text" value={userName} onChange={this.handlerUsernameChange}/>
					</div>
					<div>
						<label>Comments</label>
						<textarea value={comment} onChange={this.handleCommentsChange}></textarea>
					</div>
					<div>
						<label>Topic</label>
						<select value={topic} onChange={this.handlerTopicChange}>
							<option value="react">React</option>
							<option value="angular">Angular</option>
							<option value="vue">Vue</option>
						</select>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Form
