import React from 'react'
// INLINE Styling

const heading = {
    fontSize: '72px',
    color: 'blue',
    fontStyle: 'Italic'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
