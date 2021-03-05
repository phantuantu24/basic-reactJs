import React, { Component } from 'react'
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import UseEffectHook from './components/UseEffectHook';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <UseEffectHook />
        {/* <ClassCounterOne /> */}
      </div>
    )
  }
}

export default App
