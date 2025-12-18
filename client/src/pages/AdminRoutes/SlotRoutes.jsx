import React from 'react'
import SlotsHeader from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotsHeader'
import SlotFilters from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotFilters'
import SlotTable from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotTable'
import SlotDetailsPanel from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotDetailsPanel'
import SlotChat from '../../components/Dashboard/AdminDasboard/SlotsSection/SlotChat'


const SlotRoutes = () => {
  return (
    <div>
        <SlotsHeader />
        <SlotFilters />
        {/* <SlotTable /> */}
        <SlotDetailsPanel />
        <SlotChat />
    </div>
  )
}

export default SlotRoutes
