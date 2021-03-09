import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {

  const [timer, setTmer] = useState(0)
  const [onInterval, setOnInterval] = useState(false)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTmer(prevTimer => prevTimer + 1)
    }, 1000);
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      <h2>Hook Timer - {timer}</h2>
      <div>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Hook Timer
        </button>
      </div>
    </div>
  )
}

export default HookTimer
