import React from 'react'

function Count({ text, count }) {
  console.log(`Rendering ${text}`)
  return (
    <div>
      Text: {text} - Count: {count}
    </div>
  )
}

export default React.memo(Count)
