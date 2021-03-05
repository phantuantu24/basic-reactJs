import React, { useState, useEffect } from 'react'

function UseEffectWithIncorrectDependency() {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(preCount => preCount + 1)
  }

  useEffect(() => {
    console.log('useEffect called')
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>Automatic Timer</h1>
      <h2>{count}</h2>
    </div>
  )
}

export default UseEffectWithIncorrectDependency
