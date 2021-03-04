import React, { useState } from 'react'

function UseStateWithPreviousState() {
  const initialCountNumber = 0
  const [count, setCount] = useState(initialCountNumber)
  const errorCSS = {
    color: 'red',
    fontWeight: 'bold'
  }

  const incrementFives = () => {
    for (let index = 0; index < 5; index++) {
      setCount(preCount => preCount + 1)
    }
  }
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCountNumber)}>Reset</button>
      <button onClick={() => setCount(preCount => preCount + 1)}>Increment</button>
      <button onClick={() => {
        if (count === 0) {
          return null
        } else {
          setCount(prevCount => prevCount - 1)
        }
      }}>Decrement</button>
      <button onClick={incrementFives}>Increment by 5</button>
      {count === 0 ? <div style={errorCSS}>Cannot be decreased {count} any more</div> : ''}
    </div>
  )
}

export default UseStateWithPreviousState
