import React, { Component } from 'react';
import './App.css';
import About from './components/About';



export class App extends Component {
  render() {
    return (
      <div className="app">
        <About />
      </div>
    )
  }
}

export default App
