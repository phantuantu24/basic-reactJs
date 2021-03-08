import React from 'react'
import './App.css';
import UseReducerComplexCounter from './component.js/UseReducerComplexCounter';
import UseReducerSimpleCounter from './component.js/UseReducerSimpleCounter';
import UseReducerMultiple from './component.js/UseReducerMultiple'

function App() {
  return (
    <div className="App">
      <UseReducerMultiple />
      {/* <UseReducerComplexCounter /> */}
      {/* <UseReducerSimpleCounter /> */}
    </div>
  )
}

export default App
