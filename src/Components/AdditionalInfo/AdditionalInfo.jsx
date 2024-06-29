import React from 'react'
import './additionalInfo.css'
import InputTextArea from '../Input/InputTextArea'

const AdditionalInfo = () => {
    return (<>
        <div className="column additionalInfo">
            <div className="columnHeader">
                Additional Information
            </div>
            <InputTextArea placeholder={'Special programs/ events hosted'}/>
            <InputTextArea placeholder={'Partnerships or sponsorship'}/>
            <InputTextArea placeholder={'Awards or recognitions recieved'}/>
            <InputTextArea placeholder={'Feedback from athletes or parents'}/>

        </div>
        <div className="column additionalInfo">
            <div className="columnHeader">
                Future Plans
            </div>
            <InputTextArea placeholder={'Planned upgrades or expansions'}/>
            <InputTextArea placeholder={'Planned upgrades or new sports or activities to be introduced'}/>
            <InputTextArea placeholder={'Community engagement initiatives'}/>

        </div>
        </>
    )
}

export default AdditionalInfo
