const express = require("express");

const {
    getMessagesBySlot,
    sendMessage,
} = require("../controllers/message.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// Get chat messages for a booked slot
router.get("/:slotId", protect, getMessagesBySlot);

// Send message for a booked slot
router.post("/:slotId/send", protect, sendMessage);

module.exports = router;
