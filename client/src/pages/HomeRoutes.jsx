import React from 'react'

import Navbar from './Navbar'
import HeaderSection from '../components/GetStarted/Home/HeaderSection'
import Works from '../components/GetStarted/Home/Works'
import Features from '../components/GetStarted/Home/Features'
import Management from '../components/GetStarted/Home/Management'
import WhySlotify from '../components/GetStarted/Home/WhySlotify'
import CTA from '../components/GetStarted/Home/CTA'
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
