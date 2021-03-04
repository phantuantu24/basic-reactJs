import React from 'react'

// function ForwardingRefsInput() {
// 	return (
// 		<div>
// 			<input type="text" />
// 		</div>
// 	)
// }

const ForwardingRefsInput = React.forwardRef((props, ref) => {
	return (
		<div>
			<input type="text" ref={ref} />
		</div>
	)
})

export default ForwardingRefsInput
