import React from 'react'
import './inputText.css'

const InputText = ({placeholder, logo}) => {

    const input= {
        placeholder: placeholder || null,
        logo: logo|| null,
    }
  return (
    <div className='inputHolder'>

        <div className='logo-textBox'>
            <img src={`src/assets/Images/${logo}Logo.png`}/>
        </div>
        <input className='inputText' type='text' placeholder={placeholder}/>
      
    </div>
  )
}

export default InputText
