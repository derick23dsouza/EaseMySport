import React from 'react'
import './inputText.css'

const InputText = ({placeholder, logo, unit}) => {

    const input= {
        placeholder: placeholder || null,
        logo: logo|| null,
        unit: unit|| null,
    }
  return (
    <div className='inputHolder'>

        {logo? <div className='logo-textBox'>
            <img src={`src/assets/Images/${logo}Logo.png`}/>
        </div> : null}
        <input className='inputText' type='text' placeholder={placeholder}/>
      {unit?<div className="unit">{unit}</div>: null}
    </div>
  )
}

export default InputText
