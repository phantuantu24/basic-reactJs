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

function UseReducerMultiple() {

  const [count, dispatch] = useReducer(countReducer, initialCount)
  const [count2, dispatchCount2] = useReducer(countReducer, initialCount)

  return (
    <div>
      <h3>Count - {count}</h3>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <div>
        <h3>Count 2 - {count2}</h3>
        <button onClick={() => dispatchCount2('increment')}>Increment</button>
        <button onClick={() => dispatchCount2('decrement')}>Decrement</button>
        <button onClick={() => dispatchCount2('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default UseReducerMultiple
