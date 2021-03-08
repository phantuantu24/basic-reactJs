import React from 'react'
import './App.css';
import UseReducerComplexCounter from './component.js/UseReducerComplexCounter';
import UseReducerSimpleCounter from './component.js/UseReducerSimpleCounter';

function App() {
  return (
    <div className="App">
      <UseReducerComplexCounter />
      {/* <UseReducerSimpleCounter /> */}
    </div>
  )
}

export default App
