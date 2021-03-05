import React, { useState, useEffect } from 'react'
import UseEffectRunOnlyOnce from './UseEffectRunOnlyOnce'
// clean up function will be written on UseEffectRunOnlyOnce.js
function UseEffectWithCleanUp() {

  const [display, setDisplay] = useState(false)
  const displayCSS = {
    color: 'red',
    fontWeight: 'bold'
  }
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display Mouse Move Position</button>
      { display ? <UseEffectRunOnlyOnce /> : <div style={displayCSS}>Mouse Position is Off</div>}
    </div>
  )
}

export default UseEffectWithCleanUp
