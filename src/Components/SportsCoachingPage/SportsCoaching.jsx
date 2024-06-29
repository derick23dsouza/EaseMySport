import React from 'react'
import './sportsCoaching.css'
import InputText from '../Input/InputText'
import InputSelect from '../Input/InputSelect'

const SportsCoaching = () => {
    const selectedSport = ['Cricket', 'Badminton', 'Hockey', 'Fencing'];
    const levels= ['Beginner', 'Intermediate', 'Pro'];
    return (<>
        <div className="column">
            <div className="columnHeader">
                Sports Available
            </div>
            <InputSelect placeholder={'Select Sport'} />
            <div className="showSport">
                {selectedSport.map((sport, index) => (
                    <div key={index} className="selected">{sport}
                        <button className='unselect'><img src='src\assets\Images\unselect.png' /></button>
                    </div>
                ))}



            </div>
        </div>
        <div className="column coaching">
            <div className="columnHeader">
                Coaching Experience
            </div>
            <InputSelect placeholder={'Select Sport'} />
            <InputSelect placeholder={'Select Sport'} />
            <InputSelect placeholder={'Select Sport'} />
            <InputSelect placeholder={'Select Sport'} />
            <div className="showSport">
                {levels.map((level, index) => (
                    <div key={index} className="selected">{level}
                        <button className='unselect'><img src='src\assets\Images\unselect.png' /></button>
                    </div>
                ))}



            </div>
        </div>
    </>

    )
}

export default SportsCoaching
