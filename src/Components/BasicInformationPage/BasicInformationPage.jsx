import React from 'react'
import './BasicInformationPage.css'
import InputText from '../Input/InputText'

const BasicInformationPage = () => {
  const address= null;
  const state= null;
  const pinCode= null;
  const mapLink= null;

  const basicInformationPageValue= {
    address ,
    state,
    pinCode,
    mapLink
  }

  console.log(basicInformationPageValue);
  return (
    <>
      <div className="column">
        <div className="columnHeader">
          Academy Details
        </div>
        <InputText placeholder='Name of the facility' logo='FacilityName' />
        <InputText placeholder='Email' logo='FacilityName' />
        <div className='Phone-EstYear'>
          <div className='PhoneHolder'>
            <div className='logo-textBox'>
              <img src='src\assets\Images\PhoneLogo.png' />
            </div>
            <input className='Phone' type='text' placeholder='Phone' />

          </div>
          <div className='EstYearHolder'>
            <select name="Est. year" id="estYear">
              <option value="Est. year">Est. year</option>
            </select>
          </div>
        </div>
        <InputText placeholder='Website link' logo='WebsiteLink' />
      </div>
      <div className="column">
        <div className="columnHeader">
          Address
        </div>
        <InputText placeholder='Address' logo='Address'  value= {address}/>
        <InputText placeholder='State' logo='Address' value={state} />
        <InputText placeholder='Pin-code' logo='Address' value={pinCode} />
        <InputText placeholder='Google map link' logo='Address' value ={mapLink} />
      </div>
    </>
  )
}

export default BasicInformationPage
