import React, { Component } from 'react'
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import UseEffectHook from './components/UseEffectHook';
import UseEffectRunOnlyOnce from './components/UseEffectRunOnlyOnce';
import UseEffectWithCondition from './components/UseEffectWithCondition';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <UseEffectRunOnlyOnce />
        {/* <ClassMouse /> */}
        {/* <UseEffectWithCondition /> */}
        {/* <UseEffectHook /> */}
        {/* <ClassCounterOne /> */}
      </div>
    )
  }
}

export default App
