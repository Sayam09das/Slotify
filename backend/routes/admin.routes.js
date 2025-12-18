import express from "express";
import {
    getDashboardStats,
    getAllBookings,
} from "../controllers/admin.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/admin.middleware.js";

const router = express.Router();

// ADMIN: Dashboard statistics
router.get("/dashboard", protect, isAdmin, getDashboardStats);

// ADMIN: Get all bookings
router.get("/bookings", protect, isAdmin, getAllBookings);

export default router;
