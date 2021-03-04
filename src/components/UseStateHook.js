import React, { useState } from 'react'

function UseStateHook() {

  //initial count = 0 like useState(0)
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default UseStateHook
