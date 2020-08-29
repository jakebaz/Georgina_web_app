import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';



export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <About />
      </div>
    )
  }
}

export default App
