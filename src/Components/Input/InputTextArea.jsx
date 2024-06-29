import React from 'react'
import './inputTextArea.css'

const InputTextArea = ({placeholder}) => {
  return (
    <div className='textAreaHolder'>

        <textarea name="textArea" id="textArea" placeholder={placeholder}></textarea>
      
    </div>
  )
}

export default InputTextArea
