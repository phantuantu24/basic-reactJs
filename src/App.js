import React, { Component } from 'react'
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User name={(isLoggedIn) => isLoggedIn ? "PhanTuanTu" : "Guest"}/> */}
        <Counter counter={(count, incrementCount) =>
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        } />

        <Counter counter={(count, incrementCount) =>
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          />
        } />
      </div>
    )
  }
}

export default App
