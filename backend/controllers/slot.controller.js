const Slot = require("../models/Slot");

// ADMIN: Create a new slot
const createSlot = async (req, res) => {
    try {
        const { date, time } = req.body;

        if (!date || !time) {
            return res.status(400).json({ message: "Date and time are required" });
        }

        const slot = await Slot.create({ date, time });

        res.status(201).json({
            message: "Slot created successfully",
            slot,
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "Slot already exists" });
        }

        res.status(500).json({ message: "Failed to create slot" });
    }
};

// ADMIN: Get all slots (optionally by date)
const getAllSlots = async (req, res) => {
    try {
        const { date } = req.query;

        const filter = date ? { date } : {};

        const slots = await Slot.find(filter).sort({ date: 1, time: 1 });

        res.status(200).json(slots);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch slots" });
    }
};

// ADMIN: Delete a slot (only if not booked)
const deleteSlot = async (req, res) => {
    try {
        const slot = await Slot.findById(req.params.id);

        if (!slot) {
            return res.status(404).json({ message: "Slot not found" });
        }

        if (slot.status === "booked") {
            return res
                .status(400)
                .json({ message: "Cannot delete a booked slot" });
        }

        await slot.deleteOne();

        res.status(200).json({ message: "Slot deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete slot" });
    }
};

module.exports = {
    createSlot,
    getAllSlots,
    deleteSlot,
};
