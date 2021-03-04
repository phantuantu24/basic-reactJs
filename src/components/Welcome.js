import React, { Component } from 'react';

//class Component
class Welcome extends Component {
	render() {
		const { name } = this.props
		return (
			<h2>Welcome {name}</h2>
		)
	}
}

export default Welcome;