import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function BasicFetchingData() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/11')
      .then(res => {
        setLoading(false)
        setError('')
        setPost(res.data)
      })
      .catch(err => {
        setLoading(false)
        setPost({})
        setError(`Something went wrong - ${err}`)
      })
  }, [])

  return (
    <div>
      { loading ?  "Loading..." : post.title }
      { error ? error : null }
    </div>
  )
}

export default BasicFetchingData
