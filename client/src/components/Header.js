import React from 'react'
import '../App.css'
import Nav from './Nav'
import HamburgerButton from './HamburgerButton'

class Header extends React.Component {
    render() {
        return (
            <div className="header" id="Home">
                <div id="header-left">
                    <h1 id="heading">Georgina Bazin</h1>
                </div>
                <div id="header-right">
                    <Nav />
                    <HamburgerButton click={this.props.menuClickHandler}/>
                </div>
            </div>
        )
    }
}

export default Header
