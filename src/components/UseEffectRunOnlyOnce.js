import React, { useState, useEffect } from 'react'

function UseEffectRunOnlyOnce() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const logMousePosition = (event) => {
    console.log('Mosue event')
    setX(event.clientX)
    setY(event.clientY)
  }

  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener('mousemove', logMousePosition)
    // the return function inseatd of componentWillUnmount
    return (() => {
      console.log('This is componentWillUnmount');
      window.removeEventListener('mousemove', logMousePosition)
    })
  }, []) // array empty for prevent the JXS to re-render many times
  return (
    <div>
      Hooks X = {x} Y - {y}
    </div>
  )
}

export default UseEffectRunOnlyOnce
