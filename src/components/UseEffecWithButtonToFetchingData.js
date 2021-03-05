import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function UseEffecWithButtonToFetchingData() {

  const initialState = {}
  const [post, setUPost] = useState(initialState)
  const [id, setId] = useState(1)
  const [idFromButton, setIdFromButton] = useState(1)

  const handleClick = () => {
    setIdFromButton(id)
  }

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(res =>{
        console.log(res)
        setUPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButton])

  return (
    <div>
      <h1 className="App">List of Users</h1>
      <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
      <button onClick={handleClick}>Fetch Post</button>
      <h3>{post.title}</h3>
    </div>
  )
}

export default UseEffecWithButtonToFetchingData
