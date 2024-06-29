import React from 'react'
import'./inputSelect.css'

const InputSelect = ({placeholder}) => {
    
  return (
    <div className='SelectHolder'>
    <select name="select" id="default">
      <option value="Select1">{placeholder}</option>
    </select>
  </div>
  )
}

export default InputSelect
