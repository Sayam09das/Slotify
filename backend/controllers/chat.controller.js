import Message from "../models/Message.js";
import Slot from "../models/Slot.js";

// Get messages for a slot (only if booked)
export const getMessagesBySlot = async (req, res) => {
    try {
        const { slotId } = req.params;

        const slot = await Slot.findById(slotId);
        if (!slot || slot.status !== "booked") {
            return res
                .status(403)
                .json({ message: "Chat available only for booked slots" });
        }

        const messages = await Message.find({ slotId }).sort({ createdAt: 1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch messages" });
    }
};

// Send message (admin or user)
export const sendMessage = async (req, res) => {
    try {
        const { slotId } = req.params;
        const { message } = req.body;

        const slot = await Slot.findById(slotId);
        if (!slot || slot.status !== "booked") {
            return res
                .status(403)
                .json({ message: "Chat available only for booked slots" });
        }

        const newMessage = await Message.create({
            slotId,
            senderId: req.user.id,
            senderRole: req.user.role,
            message,
        });

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: "Failed to send message" });
    }
};
