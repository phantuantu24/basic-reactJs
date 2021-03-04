import React, { Component } from 'react'
import Axios from 'axios'

class PostListGET extends Component {

	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			errorMsg: ''
		}
	}

	componentDidMount() {
		//HTTP GET Request
		Axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				this.setState({
					posts: response.data
				})
			})
			.catch(error => {
				console.log("Error Happened: ", error)
				this.setState({
					errorMsg: `Error retreiving data: ${error}`
				})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		const errorCSS = {
			color: 'red',
			fontWeight: 'bold'
		}
		return (
			<div>
				<h1 className="App">List of Posts</h1>
				{
					posts.length ? posts.map(post =>
						<div key={post.id}>
							<h2>UserId: {post.userId}</h2>
							<h3>Title: {post.title}</h3>
							<p>Content: {post.body}</p>
						</div>
					) : null
				}
				{ errorMsg ? <div style={errorCSS}>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default PostListGET
