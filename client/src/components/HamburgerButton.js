import React, { Component } from 'react'

export class HamburgerButton extends Component {
    render() {
        return (
            <div className="hamburger">
                <h1>{this.props.click}</h1>
                <button className="toggle-button" onClick={this.props.click}>
                    <div className="button-line"></div>
                    <div className="button-line"></div>
                    <div className="button-line"></div>
                </button>
            </div>
        )
    }
}

export default HamburgerButton
