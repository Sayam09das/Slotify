const express = require("express");

const {
  createBooking,
  getMyBookings,
} = require("../controllers/booking.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// USER: Create booking
router.post("/", protect, createBooking);

// USER: Get logged-in user's bookings
router.get("/my", protect, getMyBookings);

module.exports = router;
