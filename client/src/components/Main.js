import React from 'react';
import '../App.css';

export class Main extends React.Component {
    render() {
        return (
            <div className="main-container" id="Gallery">
                <div id="gallery-title">
                    <h1>Gallery</h1>
                </div>
                <div className="category-images">
                    <div className="category-containers">
                        <div className="inner-container">
                            <img src='/images/cat_1.webp' alt='category clay country'></img>
                            <div className="img-overlay">
                                <span>Clay Country</span>
                            </div>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/splash.webp' alt='category imprints'></img>
                        <div className="img-overlay">
                            <span>Imprints</span>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/cat_3.webp' alt='category seascape'></img>
                        <div className="img-overlay">
                            <span>Seascape</span>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/cat_4.webp' alt='category painted body'></img>
                        <div className="img-overlay">
                            <span>Painted Body</span>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/cat_5.webp' alt='category self portrait'></img>
                        <div className="img-overlay">
                            <span>Self Portrait</span>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/cat_6.webp' alt='category human movement'></img>
                        <div className="img-overlay">
                            <span>Human Movement</span>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/cat_7.webp' alt='category human contact'></img>
                        <div className="img-overlay">
                            <span>Human Contact</span>
                        </div>
                    </div>
                    <div className="category-containers">
                        <img src='/images/cat_8.webp' alt='category human monoprint'></img>
                        <div className="img-overlay">
                            <span>Human Monoprint</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
