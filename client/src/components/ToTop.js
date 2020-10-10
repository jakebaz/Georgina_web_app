import React, { Component } from 'react'
import Link from 'react-scroll';


export class ToTop extends Component {

    render() {
        return (
            <div className="to-top-arrow">
                <div className="pointer-left"></div>
                <div className="pointer-right"></div>
                <div className="pointer-vertical"></div>
                <span id="to-top-text">Back to Top</span>
            </div>
        )
    }
}

export default ToTop
