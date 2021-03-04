import React, { Component } from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
export class App extends Component {
  render() {
    let heros = ['Batman','Superman', 'Joker']
    return (
      <div className="App">
        {
          heros.map((hero, index) => 
            <ErrorBoundary key={index}>
              <Hero heroName={hero}/>
            </ErrorBoundary>
          )
        }
        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
          <Hero heroName="Superman"/>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}
      </div>
    )
  }
}

export default App
