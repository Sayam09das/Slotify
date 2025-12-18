import React from 'react'
import SlotsHeader from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotsHeader'
import SlotFilters from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotFilters'
import SlotManagement from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotManagement'
import SlotDetails from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotDetails'
import SlotDetailsview from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotDetailsview'
import AdminNavbar from '../../components/Dashboard/AdminDasboard/AdminNavbar'


const SlotRoutes = () => {
  return (
    <div>
      <AdminNavbar />
      <SlotsHeader />
      <SlotFilters />
      <SlotManagement />
      <SlotDetails />
      <SlotDetailsview />
    </div>
  )
}

export default SlotRoutes
