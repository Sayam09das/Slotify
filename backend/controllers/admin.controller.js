import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";

// ADMIN: Dashboard stats
export const getDashboardStats = async (req, res) => {
    try {
        const totalSlots = await Slot.countDocuments();
        const bookedSlots = await Slot.countDocuments({ status: "booked" });
        const availableSlots = await Slot.countDocuments({ status: "available" });

        res.status(200).json({
            totalSlots,
            bookedSlots,
            availableSlots,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch dashboard stats" });
    }
};

// ADMIN: Get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate("userId", "name email")
            .populate("slotId")
            .sort({ createdAt: -1 });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch bookings" });
    }
};
