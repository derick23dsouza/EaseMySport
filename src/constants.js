import React from 'react'
import BasicInformationPage from './Components/BasicInformationPage/BasicInformationPage'
import SportsCoaching from './Components/SportsCoachingPage/SportsCoaching'
import UploadImages from './Components/UploadImages/UploadImages'
import Footfall from './Components/FootfallPage/Footfall'
import Amenities from './Components/Amenities/Amenities'
import Infrastructure from './Components/Infrastructure/Infrastructure'
import AdditionalInfo from './Components/AdditionalInfo/AdditionalInfo'

export const SECTIONS = [
  {
    text:'Basic Information',
    logo:'BasicInformation',
    section: BasicInformationPage
  },
  {
    text:'Sports & Coaching',
    logo:'SportsCoaching',
    section: SportsCoaching
  },
  {
    text:'Upload Images',
    logo:'UploadImages',
    section: UploadImages
  },
  {
    text:'Footfall, Target Audience & Athletes',
    logo:'Footfall',
    section: Footfall
  },
  {
    text:'Amenities',
    logo:'Amenities',
    section: Amenities
  },
  {
    text:'Infrastructure',
    logo:'Infrastructure',
    section:Infrastructure
  },
  {
    text:'Additional Information & Future Plans',
    logo:'AdditionalInfo',
    section: AdditionalInfo
  }
]