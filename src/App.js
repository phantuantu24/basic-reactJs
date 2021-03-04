import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        {/* <FragmentDemo /> */}
      </div>
    )
  }
}

export default App

