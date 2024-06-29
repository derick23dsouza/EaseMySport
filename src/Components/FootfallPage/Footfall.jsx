import React from 'react'
import './footfall.css'
import InputText from '../Input/InputText'
import InputSelect from '../Input/InputSelect'

const Footfall = () => {
    const levels= ['Beginner', 'Intermediate', 'Pro'];
    const hours= ['7AM-8AM', '11AM-12PM', '5PM-6PM', '8PM-9PM'];
    const participation= ['Local', 'State', 'National', 'International'];

    return (<>
        <div className="column footfall">
            <div className="columnHeader footfallHeader">
                Footfall
            </div>
            <InputText placeholder='Average daily footfall' />
            <InputSelect placeholder={'Peak hours'} />
            <div className="showSport">
                {hours.map((level, index) => (
                    <div key={index} className="selected">{level}
                        <button className='unselect'><img src='src\assets\Images\unselect.png' /></button>
                    </div>
                ))}



            </div>

        </div>
        <div className="column footfall">
            <div className="columnHeader footfallHeader">
                Target Audience
            </div>
            <InputSelect placeholder={'Best suited for'} />
            <div className="showSport">
                {levels.map((level, index) => (
                    <div key={index} className="selected">{level}
                        <button className='unselect'><img src='src\assets\Images\unselect.png' /></button>
                    </div>
                ))}



            </div>

        </div>
        <div className="column footfall">
            <div className="columnHeader footfallHeader">
                Athletes
            </div>
            <InputText placeholder='Total number of athletes enrolled' />
            <InputSelect placeholder={'Level of participation'} />
            <div className="showSport">
                {participation.map((level, index) => (
                    <div key={index} className="selected">{level}
                        <button className='unselect'><img src='src\assets\Images\unselect.png' /></button>
                    </div>
                ))}



            </div>

        </div>
    </>
    )
}

export default Footfall
