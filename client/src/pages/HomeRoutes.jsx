import React from 'react'

import Navbar from './Navbar'
import HeaderSection from '../components/GetStarted/HeaderSection'
import Works from '../components/GetStarted/Works'
import Features from '../components/GetStarted/Features'
import Management from '../components/GetStarted/Management'
import WhySlotify from '../components/GetStarted/WhySlotify'
import CTA from '../components/GetStarted/CTA'
import Footer from './Footer'
const HomeRoutes = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <Works />
      <Features />
      <Management />
      <WhySlotify />
      <CTA />
      <Footer />
    </div>
  )
}

export default HomeRoutes
