import React  from 'react'
import { Link } from "react-scroll";

export class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <nav className='hamburger-navigation'>
                    <ul>
                        <li><Link to="Home">Home</Link></li>
                        <li><Link to="Gallery">Gallery</Link></li>
                        <li><Link to="About">About</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu
