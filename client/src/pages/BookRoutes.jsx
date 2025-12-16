import React from 'react'
import Navbar from './Navbar'
import MainHeader from '../components/GetStarted/BookSlot/MainHeader'
import Footer from './Footer'
import SlotSelection from '../components/GetStarted/BookSlot/SlotSelection'
import BookingConfirmation from '../components/GetStarted/BookSlot/BookingConfirmation'
import Success from '../components/GetStarted/BookSlot/Success'
import SlotUnavailable from '../components/GetStarted/BookSlot/SlotUnavailable'
const BookRoutes = () => {
    return (
        <div>
            <Navbar />
            <MainHeader />
            <SlotSelection />
            <BookingConfirmation />
            <Success />
            <SlotUnavailable />
            <Footer />
        </div>
    )
}

export default BookRoutes
