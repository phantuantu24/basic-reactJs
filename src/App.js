import React from 'react'
import './App.css';
import BasicFetchingData from './components/BasicFetchingData';
import UseReducerFetchingData from './components/UseReducerFetchingData';

function App() {
  return (
    <div className="App">
      <UseReducerFetchingData />
      {/* <BasicFetchingData /> */}
    </div>
  )
}

export default App
