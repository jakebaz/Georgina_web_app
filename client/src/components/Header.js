import React from 'react'
import '../App.css'
import Nav from './Nav'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div id="header-left">
                    <h1 id="heading">Georgina Bazin</h1>
                </div>
                <div id="header-right">
                    <Nav />
                </div>
            </div>
        )
    }
}

export default Header
