import React from 'react'
import './QuestionBar.css'
import QuestionBarItem from './QuestionBarItem'
import {SECTIONS} from '../../constants'

const QuestionBar = ({activeSection, setActiveSection }) => {
  return (
    <div className='questionBarContainer'>
      <div className='headerQ'> 
        <div>Questions</div> 
       <div><img src="./src\assets\Images\QuestionBarLogo.png" alt="" /></div> 
      </div>
      <div>
        {SECTIONS.map((item, index)=>(
        <QuestionBarItem key= {index} text={item.text} logo={item.logo} onClick={() => {setActiveSection(index)}} />
        ))}
        
      </div>
      
    </div>
  )
}

export default QuestionBar
