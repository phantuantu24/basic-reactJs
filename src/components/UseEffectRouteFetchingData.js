import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function UseEffectRouteFetchingData() {

  const initialState = {}
  const [post, setUPost] = useState(initialState)
  const [id, setId] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const errorCSS = {
    color: 'red',
    fontWeight: 'bold'
  }

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res =>{
        console.log(res)
        setUPost(res.data)
      })
      .catch(err => {
        console.log(err)
        setErrorMsg(`Something went wrong - ${err}`)
      })
  }, [id])

  return (
    <div>
      <h1 className="App">List of Users</h1>
      <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
      { !id ? 
        <div style={errorCSS}>Please input the Id for see the information</div> 
        : <h3>{post.title}</h3>
      }
    </div>
  )
}

export default UseEffectRouteFetchingData
