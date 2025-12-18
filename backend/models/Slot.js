import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
    {
        date: {
            type: String, // YYYY-MM-DD
            required: true,
        },

        time: {
            type: String, // e.g. "10:30 AM"
            required: true,
        },

        status: {
            type: String,
            enum: ["available", "booked", "past"],
            default: "available",
        },

        bookedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
    },
    { timestamps: true }
);

// Prevent duplicate slots (same date + time)
slotSchema.index({ date: 1, time: 1 }, { unique: true });

export default mongoose.model("Slot", slotSchema);
