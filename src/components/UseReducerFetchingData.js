import React, { useEffect, useReducer } from 'react'
import Axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.paylaod
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        post: {}
      }
    default:
      return state
  }
}

function UseReducerFetchingData() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const errorCSS = {
    color: 'red',
    fontWeight: 'bold'
  }

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        dispatch({type: 'FETCH_SUCCESS', paylaod: res.data})
      })
      .catch(err => {
        dispatch({type: 'FETCH_ERROR'})
      })
  }, [])

  return (
    <div>
      { state.loading ? 'Loading...' : state.post.title }
      { state.error ? <h3 style={errorCSS}>{state.error}</h3> : null }
    </div>
  )
}

export default UseReducerFetchingData
