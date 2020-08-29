import React  from 'react'
import { Link } from "react-scroll";

export class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <nav className='hamburger-navigation'>
                    <ul>
                        <li><Link to="Home" onClick={this.props.menuClickHandler}>Home</Link></li>
                        <li><Link to="Gallery" onClick={this.props.menuClickHandler}>Gallery</Link></li>
                        <li><Link to="About" onClick={this.props.menuClickHandler}>About</Link></li>
                        <li><Link to="Contact" onClick={this.props.menuClickHandler}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu
