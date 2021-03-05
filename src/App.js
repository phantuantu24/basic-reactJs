import React, { Component } from 'react'
import './App.css';
import FetchingDataUseEffectHook from './components/FetchingDataUseEffectHook';
export class App extends Component {
  render() {
    return (
      <div className="App-header">
        <FetchingDataUseEffectHook />
      </div>
    )
  }
}

export default App
