import React from 'react'
import './amenities.css'
import InputCheckbox from '../Input/InputCheckbox'

const Amenities = () => {
    const amenities= ['Washroom', 'CCTV', 'Changing room', 'Equipments', 'Parking',
        'Nearest Metro', 'Canteen', 'Drinking water' , 'Air conditioning'
    ]

  return (
    <div className="column amenities ">
            <div className="columnHeader">
                Amenities
            </div>
            <div className="description">
                Upload images of playing areas, coaching sessions, amenities, exterior view etc.
            </div>
            <div className="listHolder">
                {amenities.map((amenity, index)=>(
                    <InputCheckbox key={index} placeholder={amenity}/>
                ))}
            </div>
            
        </div>
  )
}

export default Amenities
