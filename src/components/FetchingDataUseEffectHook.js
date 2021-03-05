import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function FetchingDataUseEffectHook() {

  const initialState = []
  const [posts, setPosts] = useState([initialState])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log("Error - ", err)
      })
  })

  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li style={{listStyleType: 'circle'}} key={post.id}>
              <label>Name: {post.name}</label><br/>
              <label>Email: {post.email}</label><hr/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FetchingDataUseEffectHook
