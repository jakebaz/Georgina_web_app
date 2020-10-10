import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HamburgerButton from './components/HamburgerButton';
import Menu from './components/Menu';
import Backdrop from './components/Backdrop'
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import ToTop from './components/ToTop'
import Footer from './components/Footer';

export class App extends Component {
state = {
  menuOpen: false
};

menuToggleClick = () => {
  this.setState((previousState) => {
    return {menuOpen: !previousState.menuOpen};
  });
};
render (){
  let menu;
  let backdrop;

  if (this.state.menuOpen){
    menu = <Menu menuClickHandler={this.menuToggleClick} />;
    backdrop = <Backdrop />;
  }

    return (
      <div style={{height: '100%'}} className="app">
        <Header />
        <HamburgerButton click={this.menuToggleClick}/>
        {menu}
        {backdrop}
        <Main />
        <About />
        <Contact />
        <ToTop />
        <Footer />
      </div>
    )
  }
}

export default App
