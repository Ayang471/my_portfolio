import React from 'react'
import '../stylesheets/heroSectionStyles.css'
import { Link } from 'react-router-dom'
import { Bounce, Slide } from "react-awesome-reveal";

function HeroSection() {

    return (
        <div className="hero-section" >
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='border'></div>
                        <div className='intro-section'>
                           <Bounce>
                                <h1>
                                    <span>I</span>
                                    <span>'</span>
                                    <span>m</span>
                                    <br />
                                    <span>A</span>
                                    <span>l</span>
                                    <span>i</span>
                                    <span>c</span>
                                    <span>e</span>
                                    <br />
                                </h1>
                           </Bounce>

                            <div className='intro'>
                                <Slide 
                                    direction='left'
                                    >
                                    <h2>Feels free to take a look at some of my works.</h2>
                                </Slide>
                            </div>
                             
                                 <div className='view-btn'>
                                 <Slide
                               delay='100'
                                    >
                                  <Link to="/projects">View Projects</Link>
                               </Slide>
                                  </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection