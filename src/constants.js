import React from 'react'
import BasicInformationPage from './Components/BasicInformationPage/BasicInformationPage'
import SportsCoaching from './Components/SportsCoachingPage/SportsCoaching'
import UploadImages from './Components/UploadImages/UploadImages'

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
  },
  {
    text:'Amenities',
    logo:'Amenities',
  },
  {
    text:'Infrastructure',
    logo:'Infrastructure',
  },
  {
    text:'Additional Information & Future Plans',
    logo:'AdditionalInfo',
  }
]