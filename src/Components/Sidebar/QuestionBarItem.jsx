import React from 'react'
import'./QuestionBarItem.css'

const QuestionBarItem = ({text, logo, onClick}) => {
  return (
    <div className='questionBarItem' onClick={onClick}>
      
      
        <img src={`src/assets/Images/${logo}.png`}/>
      
      <div>{text}</div>
    </div>
  )
}

export default QuestionBarItem
