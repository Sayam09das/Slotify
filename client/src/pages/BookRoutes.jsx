import React from 'react'
import MainHeader from '../components/GetStarted/BookSlot/MainHeader'
import SlotSelection from '../components/GetStarted/BookSlot/SlotSelection'
import BookingConfirmation from '../components/GetStarted/BookSlot/BookingConfirmation'
import Success from '../components/GetStarted/BookSlot/Success'
import SlotUnavailable from '../components/GetStarted/BookSlot/SlotUnavailable'
const BookRoutes = () => {
    return (
        <div>
            <MainHeader />
            <SlotSelection />
            <BookingConfirmation />
            <Success />
            <SlotUnavailable />
        </div>
    )
}

export default BookRoutes
