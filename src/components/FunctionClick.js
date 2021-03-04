import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Btn Function work!!!!!");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Function Me</button>
        </div>
    )
}

export default FunctionClick
