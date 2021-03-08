import React, { useReducer } from 'react'

const initialCount = 0
const countReducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialCount
    default:
      return state
  }
}

function UseReducerSimpleCounter() {

  const [count, dispatch] = useReducer(countReducer, initialCount)
  
  return (
    <div>
      <h3>Count - {count}</h3>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerSimpleCounter
