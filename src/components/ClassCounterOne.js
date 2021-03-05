import React, { Component } from 'react'

export class ClassCounterOne extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, preState) {
    if (preState.count !== this.state.count) {
      console.log('Updating document title')
      document.title = `Clicked ${this.state.count} times`
    }
  }
  
  render() {
    const { count, name } = this.state
    return (
      <div>
        <input type="text" value={name} onChange={(event) => this.setState({
          name: event.target.value
        })}/>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterOne
