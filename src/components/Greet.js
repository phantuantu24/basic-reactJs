import React from 'react';

//Fuctional Component

// function Great() {
//     return <h1>Hello newbie</h1>
// }
// ES6 like below ----------------
const Greet = (props) => {
	const { name, heroName } = props
	return (
		<div>
			<h1>Hello {name} and {heroName}</h1>
			{props.children}
		</div>
	);
}

export default Greet;