import React from 'react'
import '../stylesheets/SkillsSectionStyles.css'
import Skills from '../components/Skills'

function SkillsSection() {

  return (
    <div className='skills-section'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='skills-intro'>
              <div className='border'> </div>
              <h1 >
                Skills
              </h1>
            </div>
          </div>
          </div>
      </div>
        <section>
          <Skills />
        </section>
    </div>
  )
}

export default SkillsSection