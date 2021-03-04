import React, { Component } from 'react'

export class LifecycleDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Tuan Tu'
    }
    console.log('Lifecycle constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle getDerivedStateFromProps', state)
    return null
  }

  componentDidMount() {
    console.log('Lifecycle componentDidMount')
  }
  
  render() {
    console.log('Lifecycle render')
    return (
      <div>
        Lifecycle Mounting {this.state.name}
      </div>
    )
  }
}

export default LifecycleDemo
