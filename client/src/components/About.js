import React from 'react'

export class About extends React.Component {
    render() {
        return (
            <>
                <div className="header-space"></div>
                <div className="about">
                    <div className="about-title" id="About">
                        <h1>About me</h1>
                    </div>
                    <div className="about-content">
                        <div className="about-flex-container">
                            <p>Finding her love for printmaking during her studies at Truro College, Georgina Bazin has been inspired in much of her work by her Cornish surroundings, where she was born and brought up. Having completed a Foundation Diploma in Art & Design at the Tregye campus, she now studies History of Art at the University of Birmingham whilst carrying on her love for art and printmaking alongside. This portfolio aims to showcase some of her college studies as well as her new and upcoming work, primarily in the form of monoprinting.</p>
                        </div>
                        <div className="about-flex-container">
                            <img src='/images/about_1.webp' alt="Tregye Foundation Art & Design Annual Summer Show 2020"></img> 
                        </div>
                        <div className="about-flex-container">
                            <img src='/images/about_2.webp' alt="Georgina Bazin selfie"></img>
                        </div>
                        <div className="about-flex-container">
                            <p>Exploring the cornish landscape, Georgina’s work is fluid in its representation of the movement of her own surroundings, while simplicity controls the colour palette, forming a distinct characteristic of deep contrasts emotive qualities. Another popular theme throughout her work is the exploration of the human body, working from her life drawings and paintings, Georgina’s distinctive style carries itself through to these, portraying the movement and shape of human forms with the use of characteristic marks.</p>
                        </div>                    
                    </div>
                </div>
            </>
        )
    }
}

export default About
