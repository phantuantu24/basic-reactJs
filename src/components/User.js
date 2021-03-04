import React, { Component } from 'react'

class User extends Component {
	render() {
		return (
			<div>
				I'm {this.props.name(false)}
			</div>
		)
	}
}

export default User
