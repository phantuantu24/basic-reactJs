import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="PhanTuanTu"/>
        <HoverCounter name="PhanTuanTu"/>
      </div>
    )
  }
}

export default App
