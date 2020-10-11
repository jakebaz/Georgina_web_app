import React, { Component } from 'react'

export class Category extends Component {
    render() {
        return (
            <div className="categoryWindow">
                <div className="exit-symbol" onClick={this.props.categoryClickHandler}>
                    <div className="exit-line" id="exit-line-1"></div> 
                    <div className="exit-line" id="exit-line-2"></div>
                </div>
                <h2>Clay Country</h2>
            </div>
        )
    }
}

export default Category
