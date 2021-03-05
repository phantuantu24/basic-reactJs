import React, { Component } from 'react'
import './App.css';
import UseEffectBasicFetchingData from './components/UseEffectBasicFetchingData';
import UseEffectRouteFetchingData from './components/UseEffectRouteFetchingData';
import UseEffecWithButtonToFetchingData from './components/UseEffecWithButtonToFetchingData';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <UseEffecWithButtonToFetchingData />
        {/* <UseEffectRouteFetchingData /> */}
        {/* <UseEffectBasicFetchingData /> */}
      </div>
    )
  }
}

export default App
