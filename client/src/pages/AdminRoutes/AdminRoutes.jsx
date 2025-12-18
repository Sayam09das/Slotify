import React from 'react'
import AdminNavbar from '../../components/Dashboard/AdminDasboard/AdminNavbar'
import SummaryStats from '../../components/Dashboard/AdminDasboard/MainSection/SummaryStats'
import DailySchedule from '../../components/Dashboard/AdminDasboard/MainSection/DailySchedule'
import CreateSlot from '../../components/Dashboard/AdminDasboard/MainSection/CreateSlot'
import RecentBookings from '../../components/Dashboard/AdminDasboard/MainSection/RecentBookings'
import AdminHeader from '../../components/Dashboard/AdminDasboard/MainSection/AdminHeader'
const AdminRoutes = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
      <SummaryStats />
      <DailySchedule />
      <CreateSlot />
      <RecentBookings />
    </div>
  )
}

export default AdminRoutes
