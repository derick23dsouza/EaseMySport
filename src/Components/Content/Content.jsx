import React, {  } from 'react'
import './content.css'
import {SECTIONS} from '../../constants'

const Content = ({activeSection}) => {

    const Section = SECTIONS[activeSection].section
  return (
    <div className='contentContainer'>

        <div className='sectionHeader'>Sports Facility Questoinanaire</div>
        <div className='section'>Section {activeSection + 1} of 7</div>
        <div className="sectionBody">
            <Section />
        </div>

        <button className='submit'>Submit & Next</button>
      
    </div>
  )
}

export default Content
