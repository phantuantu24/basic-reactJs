import React, { Component } from 'react'
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import UseEffectHook from './components/UseEffectHook';
import UseEffectWithCondition from './components/UseEffectWithCondition';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <UseEffectWithCondition />
        {/* <UseEffectHook /> */}
        {/* <ClassCounterOne /> */}
      </div>
    )
  }
}

export default App
