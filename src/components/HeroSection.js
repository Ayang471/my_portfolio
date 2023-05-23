import React from 'react'
import '../stylesheets/heroSectionStyles.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <div classNamr='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='border'></div>
                        <div className='intro-section'>
                            <h1>I'm Alice,
                                <br />
                                <span>
                                    a <i>UI Designer</i> and <i>Web Developer</i>
                                </span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Magna aliquam sagittis euismod cras a. Sed blandit lobortis est aliquet placerat id enim viverra. Accumsan tristique blandit eu nunc pellentesque.</p>
                            <a href="/" className='view-btn'>View Works</a>
                        </div>
                        
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection