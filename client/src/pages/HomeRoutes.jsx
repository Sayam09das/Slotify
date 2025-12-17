import React from 'react'

import HeaderSection from '../components/GetStarted/Home/HeaderSection'
import Works from '../components/GetStarted/Home/Works'
import Features from '../components/GetStarted/Home/Features'
import Management from '../components/GetStarted/Home/Management'
import WhySlotify from '../components/GetStarted/Home/WhySlotify'
import CTA from '../components/GetStarted/Home/CTA'

const HomeRoutes = () => {
  return (
    <div>
      <HeaderSection />
      <Works />
      <Features />
      <Management />
      <WhySlotify />
      <CTA />
    </div>
  )
}

export default HomeRoutes
