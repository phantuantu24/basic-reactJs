import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        // For the 3rd way
        // this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler() {
        this.setState({
            message: "GoodBye!"
        });
        console.log("This state of class: ", this);
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: "GoodBye!"
    //     });
    //     console.log("This state of class: ", this);
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1st way */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me For Event Binding</button>  */}
                {/* 2nd way */}
                <button onClick={() => this.clickHandler()}>Click Me For Event Binding</button>
                {/* 3rd way */}
                {/* <button onClick={this.clickHandler}>Click Me For Event Binding</button> */}
            </div>
        )
    }
}

export default EventBind
