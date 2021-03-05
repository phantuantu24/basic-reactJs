import React, { Component } from 'react'
import './App.css';
import UseEffectBasicFetchingData from './components/UseEffectBasicFetchingData';
import UseEffectRouteFetchingData from './components/UseEffectRouteFetchingData';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <UseEffectRouteFetchingData />
        {/* <UseEffectBasicFetchingData /> */}
      </div>
    )
  }
}

export default App
