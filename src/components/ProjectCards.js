import React from 'react'
import '../stylesheets/projectCards.css'
import { ProjectList, DesignWorks } from './ListofProjects'
import { Show } from '@chakra-ui/react'

function ProjectCards() {

    return (
        <div className='project-cards'>
            <div className='container'>
                {ProjectList.map((list, index) => (
                    <div className="row" key={index}>
                        <div className='col'>
                            <img src={list.img} alt="weather-app" />

                            <Show breakpoint='(min-width: 600px)' >
                                <div className='border'></div>
                            </Show>

                        </div>

                        <div className='col'>
                            <div className="card-body">
                                <h5 className="card-title">{list.title}</h5>
                                <p className="card-text">{list.des}</p>
                                <a href={list.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href={list.github} target="_blank" rel="noopener noreferrer">GitHub</a>

                            </div>

                        </div>

                    </div>
                ))}

                <div className='design-works'>
                    {DesignWorks.map((list, index) => (
                        <div className="row" key={index}>
                          
                                <div className='col'>
                                    <img src={list.img} alt="weather-app" />
                             

                            <Show breakpoint='(min-width: 600px)' >
                                <div className='border'></div>
                            </Show>
                            </div>

                            <div className='col'>
                                <div className="card-body">
                                    <h5 className="card-title">{list.title}</h5>
                                    <p className="card-text">{list.des}</p>
                                    <a href={list.demo} target="_blank" rel="noopener noreferrer">Demo</a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    )
}

export default ProjectCards