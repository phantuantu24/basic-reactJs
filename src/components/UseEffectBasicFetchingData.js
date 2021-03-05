import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function UseEffectBasicFetchingData() {

  const initialState = []
  const [users, setUsers] = useState(initialState)
  const [errorMsg, setErrorMsg] = useState('')
  const errorCSS = {
    color: 'red',
    fontWeight: 'bold'
  }

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        console.log(res)
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
        setErrorMsg(`Something went wrong - ${err}`)
      })
  }, [])

  return (
    <div>
      <h1 className="App">List of Users</h1>
      <ul>
        {
          !errorMsg ? users.map(user => (
            <li style={{listStyleType: 'circle'}} key={user.id}>
              <label>Name: {user.name}</label><br/>
              <label>Email: {user.email}</label><hr/>
            </li>
          )) : <div style={errorCSS}>{errorMsg}</div>
        }
      </ul>
    </div>
  )
}

export default UseEffectBasicFetchingData
