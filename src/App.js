import React, { Component } from 'react'
import './App.css';
import PostFormPOST from './components/PostFormPOST';
import PostListGET from './components/PostListGET';

//npm i axios - HTTP library
export class App extends Component {
  render() {
    return (
      <div className="App-header">
        <PostFormPOST />
        {/* <PostListGET /> */}
      </div>
    )
  }
}

export default App
