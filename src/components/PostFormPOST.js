import React, { Component } from 'react'
import Axios from 'axios'

export class PostFormPOST extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			userId: '',
			title: '',
			body: '',
			errorMsg: '',
			successMsg: ''
		}
	}

	changeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submitHandler = (event) => {
		event.preventDefault()
		Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(repsonse => {
				console.log(repsonse)
				this.setState({
					successMsg: `Post the data successfully - Status Code: ${repsonse.status}`
				})
			})
			.catch(error => {
				this.setState({
					errorMsg: `Cannot post data to the server - ${error}`
				})
			})
	}
	
	render() {
		const { userId, title, body, errorMsg, successMsg } = this.state
		const errorCSS = {
			color: 'red',
			fontWeight: 'bold'
		}
		const successCSS = {
			color: 'green',
			fontWeight: 'bold'
		}
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input type="text" name="userId" value={userId} onChange={this.changeHandler}/> 
					</div>
					<div>
						<input type="text" name="title" value={title} onChange={this.changeHandler}/> 
					</div>
					<div>
						<input type="text" name="body" value={body} onChange={this.changeHandler}/> 
					</div>
					{ errorMsg ? <div style={errorCSS}>{errorMsg}</div> : <div style={successCSS}>{successMsg}</div>}
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostFormPOST
