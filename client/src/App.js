import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HamburgerButton from './components/HamburgerButton';
import Menu from './components/Menu';
import Backdrop from './components/Backdrop';
import Category from './components/Category';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import ToTop from './components/ToTop'
import Footer from './components/Footer';

export class App extends Component {
state = {
  menuOpen: false,
  categoryOpen: false
};

menuToggleClick = () => {//menu on/off toggle
  this.setState((previousState) => {
    return {menuOpen: !previousState.menuOpen};
  });
};

openCategoryWindow = () => {//open a category - parameter should be unique for each category
  this.setState((previousState) => {
    return {categoryOpen: !previousState.categoryOpen};
  })
}

render (){
  //set variables for menu and category toggle
  let menu;
  let backdrop;
  let category;

  if (this.state.menuOpen){//menu on/off toggle
    menu = <Menu menuClickHandler={this.menuToggleClick} />;
    backdrop = <Backdrop />;
  }
  if (this.state.categoryOpen){
    category = <Category categoryClickHandler={this.openCategoryWindow} />
    backdrop = <Backdrop />
  }

    return (
      <div style={{height: '100%'}} className="app">
        <Header />
        <HamburgerButton click={this.menuToggleClick}/>
        {menu}
        {category}
        {backdrop}
        <Main toggleCategory={this.openCategoryWindow} />
        <About />
        <Contact />
        <ToTop />
        <Footer />
      </div>
    )
  }
}

export default App
