const express = require("express");

const {
    createSlot,
    getAllSlots,
    deleteSlot,
} = require("../controllers/slot.controller");

const { protect } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

router.post("/", protect, isAdmin, createSlot);
router.get("/", protect, isAdmin, getAllSlots);
router.delete("/:id", protect, isAdmin, deleteSlot);

module.exports = router;
