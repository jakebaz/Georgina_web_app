import React from 'react';
import { Link } from "react-scroll";
import '../App.css';

class Nav extends React.Component {
  render (){
    return(
      <div className="nav-links">
        <ul>
          <li><Link to="Home">Home</Link></li> 
          <li><Link to="Gallery">Gallery</Link></li>
          <li><Link to="About">About</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>  
      </div>
    );
  }
}

export default Nav;
