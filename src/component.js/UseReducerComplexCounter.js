import React, { useReducer } from 'react'

const initialCount = {
  firstCounter: 0,
  secondCounter: 10
}
const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialCount
    default:
      return state
  }
}

function UseReducerComplexCounter() {

  const [count, dispatch] = useReducer(countReducer, initialCount)

  return (
    <div>
      <h3>Counter 1 - {count.firstCounter}</h3>
      <h3>Counter 2 - {count.secondCounter}</h3>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default UseReducerComplexCounter
