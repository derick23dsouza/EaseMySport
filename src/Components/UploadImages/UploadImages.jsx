import React from 'react'
import './uploadImages.css'

const UploadImages = () => {
    return (
        <div className='column upload'>
            <div className="columnHeader">
                Upload Images of Facility
            </div>
            <div className="description">
                Upload images of playing areas, coaching sessions, amenities, exterior view etc.
            </div>
            <div className="uploadSection">
                <div className='uploadDnD'>
                    <img src="src\assets\Images\uploadCloudlogo.png" alt="upload" />
                    <div className="label">
                        Click or drag files to this area to upload
                    </div>
                </div>
                <div className="accepted">
                    Formats accepted are .jpg, .png, .pdf
                </div>
                <div className='addMore'>
                    <button className='addmoreButton'>
                        <img src='src\assets\Images\addMoreLogo.png'/>
                        Add more
                    </button>

                </div>

            </div>
        </div>
    )
}

export default UploadImages
