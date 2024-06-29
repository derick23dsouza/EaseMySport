import React from 'react'
import './infrastructure.css'
import InputText from '../Input/InputText'
import InputSelect from '../Input/InputSelect'
import InputTextArea from '../Input/InputTextArea'

const Infrastructure = () => {
    return (<>
        <div className="column infra">
            <div className="columnHeader">
                Infrastructure
            </div>
            <InputText placeholder={'Total Area'} unit={'sq ft'}/>
            <InputTextArea placeholder={'Specify type & number of court/ field/ pitch(Ex-court:5, field:2, pitch:4)'}/>
            <InputTextArea placeholder={'Specify number of indoor/outdoor court/field/pitch (Ex - indoor: 5, outdoor: 3'}/>
            <InputText placeholder={'Seating capacity'}/>

        </div>
        <div className="column">
            <InputText placeholder={'Maximum training capacity at a time'}/>
            <InputSelect placeholder={'Lighting Natural/Artificial/Both'}/>
            <InputTextArea placeholder={'Specify safety measures (Ex - First Aid, Emergency Exits)'}/>
            <InputTextArea placeholder={'Specify Accessibility Features for differently-abled individuals (Ex - Wheelchair )'}/>
            <InputSelect placeholder={'Maintenance schedule Daily/Weekly/Monthly'}/>
            

        </div>
    </>
    )
}

export default Infrastructure
