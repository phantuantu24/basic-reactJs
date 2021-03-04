import React, { Component } from 'react'
import './App.css'
import FocusInput from './components/FocusInput'
import ForwardingRefsParentInput from './components/ForwardingRefsParentInput'
import RefsDemo from './components/RefsDemo'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ForwardingRefsParentInput />
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
      </div>
    )
  }
}

export default App

