import React, {  } from 'react'
import './content.css'
import {SECTIONS} from '../../constants'

const Content = ({activeSection}) => {

    const sectionNumber= activeSection+1;

    const Section = SECTIONS[activeSection].section
  return (
    <div className='contentContainer'>

        <div className='sectionHeader'>Sports Facility Questoinanaire</div>
        <div className='section'>Section {sectionNumber} of 7</div>
        <div className="sectionBody">
            <Section />
        </div>

        <button className='submit'>{sectionNumber===7? "Finish":"Submit & Next"}</button>
      
    </div>
  )
}

export default Content
