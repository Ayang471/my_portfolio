import React from 'react'
import '../stylesheets/SkillsSectionStyles.css'
import Skills from '../components/Skills'

function SkillsSection() {
  return (
    <div className='skills-section'>
      <div className='container'>
        <div className='row'>
            <div className='skills-intro'>
              <div className='border'> </div>
              <h1>
                Technical
                <br />
                Skills
              </h1>
            </div>
          </div>
     
        <section>
          <Skills />
        </section>
      </div>
    </div>
  )
}

export default SkillsSection