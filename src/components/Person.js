import React from 'react'

function Person({personObject}) {
    return (
        <div>
            <h2>
                I'm {personObject.name}. I'm {personObject.age} years old. I know {personObject.skill}
            </h2>
        </div>
    )
}

export default Person
