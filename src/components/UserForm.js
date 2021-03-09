import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

  const [firstName, bindFirstName, resetFirstName] = useInput('') 
  const [lastName, bindLastName, resetLastName] = useInput('') 

  const submitHandler = (event) => {
    event.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...bindFirstName}/>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...bindLastName}/>
        </div>
        <div><button>Submit</button></div>
      </form>
    </div>
  )
}

export default UserForm
