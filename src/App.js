import React, { useReducer } from 'react'
import './App.css';
import UseReducerComplexCounter from './component.js/UseReducerComplexCounter';
import UseReducerSimpleCounter from './component.js/UseReducerSimpleCounter';
import UseReducerMultiple from './component.js/UseReducerMultiple'
import ComponentA from './component.js/useReducerAndUseContext/ComponentA';
import ComponentB from './component.js/useReducerAndUseContext/ComponentB';
import ComponentC from './component.js/useReducerAndUseContext/ComponentC';

export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
      {/* <UseReducerMultiple /> */}
      {/* <UseReducerComplexCounter /> */}
      {/* <UseReducerSimpleCounter /> */}
    </div>
  )
}

export default App
