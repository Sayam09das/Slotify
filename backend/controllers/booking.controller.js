import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";

// USER: Create booking (slot locking logic)
export const createBooking = async (req, res) => {
    try {
        const { slotId } = req.body;
        const userId = req.user.id;

        const slot = await Slot.findById(slotId);

        if (!slot) {
            return res.status(404).json({ message: "Slot not found" });
        }

        if (slot.status !== "available") {
            return res.status(409).json({ message: "Slot already booked" });
        }

        // Lock the slot
        slot.status = "booked";
        slot.bookedBy = userId;
        await slot.save();

        const booking = await Booking.create({
            userId,
            slotId,
            date: slot.date,
            time: slot.time,
        });

        res.status(201).json({
            message: "Booking confirmed",
            booking,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create booking" });
    }
};

// USER: Get my bookings
export const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id })
            .populate("slotId")
            .sort({ createdAt: -1 });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch bookings" });
    }
};
