const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        slotId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Slot",
            required: true,
        },

        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        senderRole: {
            type: String,
            enum: ["admin", "user"],
            required: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
