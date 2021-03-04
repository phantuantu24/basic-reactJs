import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler () {
        console.log("Btn Class work!!!!!");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click Me</button>
            </div>
        )
    }
}

export default ClassClick
