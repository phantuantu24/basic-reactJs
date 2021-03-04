import React, { Component } from 'react'
// CONDITIONAL RENDERING
export class UserGreeting extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false
		}
	}

	render() {
		// SHORT CIRCUIT OPERATOR ----------------------------
		// return (
		// 	this.state.isLoggedIn && <div>Welcome Tuan Tu</div>
		// )
		// TERNARY CONDITIONAL OPERATOR ----------------------
		return this.state.isLoggedIn ? (
			<div>Welcome Tuan Tu</div>
		) : (
			<div>Welcome Guest</div>
		)
		// ELEMENT VARIABLES -----------------------
		// let message
		// if (this.state.isLoggedIn) {
		//     message = <div>Welcome Tuan Tu</div>
		// } else {
		//     message = <div>Welcome Guest</div>
		// }
		// return (<div>{message}</div>)
		// IF - ELSE ----------------------
		// if (this.state.isLoggedIn) {
		//     return (<div> Welcome Tuan Tu</div>)
		// } else {
		//     return (<div>Welcome Guest</div>)
		// }
		// ---------------------------------
		// return (
		//     <div>
		//         <div>Welcome Admin</div>
		//         <div>Welcome Guest</div>
		//     </div>
		// )
	}
}

export default UserGreeting
