import React from 'react'
import './inputCheckbox.css'

const InputCheckbox = ({placeholder}) => {
  return (
    <div className='inputcheckHolder'>
    <input type="checkbox" id='check' name='check'/> 
    <label htmlFor="check">{placeholder}</label>     
    </div>
  )
}

export default InputCheckbox
