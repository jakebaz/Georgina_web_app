import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';

class Nav extends React.Component {
  render (){
    return(
      <div className="nav-links">
        <ul>
          <li><Link 
            activeClass="activeLink"
            to="Gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >Gallery</Link></li>
          <li><Link 
            activeClass="activeLink"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >About</Link></li>
          <li><Link
            activeClass="activeLink"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Contact</Link></li>
        </ul>  
      </div>
    );
  }
}

export default Nav;
