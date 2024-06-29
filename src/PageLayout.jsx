import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import SidebarQ from './Components/Sidebar/SidebarQ'
import QuestionBar from './Components/Sidebar/QuestionBar'
import Content from './Components/Content/Content'


const PageLayout = () => {
  const [activeSection, setActiveSection] = useState(0);
  return (<>
      <Navbar/>
      <div className='body-container'>
      <SidebarQ/>
      <QuestionBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
      </div>
    </>
  )
}

export default PageLayout
