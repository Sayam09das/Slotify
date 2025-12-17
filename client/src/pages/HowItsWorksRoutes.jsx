import React from 'react'
import MainHeader from '../components/GetStarted/HOWITWORKS/MainHeader'
import WorkflowSection from '../components/GetStarted/HOWITWORKS/WorkflowSection'
import AdminvsUser from '../components/GetStarted/HOWITWORKS/AdminvsUser'
import OutcomeandBenefits from '../components/GetStarted/HOWITWORKS/OutcomeandBenefits'
import WorkCTA from '../components/GetStarted/HOWITWORKS/WorkCTA'
const HowItsWorksRoutes = () => {
  return (
    <div>
      <MainHeader />
      <WorkflowSection />
      <AdminvsUser />
      <OutcomeandBenefits />
      <WorkCTA />
    </div>
  )
}

export default HowItsWorksRoutes
