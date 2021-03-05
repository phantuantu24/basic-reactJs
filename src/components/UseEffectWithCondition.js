import React, { useState, useEffect } from 'react'

function UseEffectWithCondition() {

  const initStateCount = 0
  const [count, setCount] = useState(initStateCount)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('Update document title')
    document.title = `You clicked ${count} times`
  }, [count]) // input variable of state which you want to track its change to run the effect

  return (
    <div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectWithCondition
