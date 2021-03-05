import React, { useState, useEffect } from 'react'

function UseEffectHook() {

  const initStateCount = 0
  const [count, setCount] = useState(initStateCount)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectHook
