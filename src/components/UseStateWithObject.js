import React, { useState } from 'react'

function UseStateWithObject() {

  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  })

  function changeName(event) {
    setName({
      // we must to copy all state of name and then we only override thh first or last name
      ... name,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h1>Input your first name and last name</h1>
      <input type="text" name="firstName" value={name.firstName} onChange={changeName}/>
      <input type="text" name="lastName" value={name.lastName} onChange={changeName}/>
      <h2>First name is: {name.firstName}</h2>    
      <h2>Last name is: {name.lastName}</h2>    
    </div>
  )
}

export default UseStateWithObject
