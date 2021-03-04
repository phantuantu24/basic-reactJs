import React, { useState } from 'react'

function UseStateWithArray() {
  const initStateArrayNumber = []
  const [number, setNumber] = useState(initStateArrayNumber)
  const addNumber = () => {
    setNumber([
      // copy all of exist number of array
      ... number,
      // new object for a element of array
      {
        id: number.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }
  //Some basic CSS style
  const listItemCSS = {
    listStyleType: 'none'
  }
  return (
    <div>
      <button onClick={addNumber}>Add New Number</button>
      <button onClick={() => setNumber(initStateArrayNumber)}>Clear All List Of Number</button>
      <ul>
        {
          number.map(numberList => (
            <li style={listItemCSS} key={numberList.id}>{numberList.value}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseStateWithArray
