const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
// const slotRoutes = require("./routes/slot.routes.js");
// const bookingRoutes = require("./routes/booking.routes.js");
// const adminRoutes = require("./routes/admin.routes.js");
// const chatRoutes = require("./routes/chat.routes.js");

require('dotenv').config();

// Database connection
const database = require('./database/db');


// Middleware
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

// Connect to MongoDB
database();


// app.use("/api/slots", slotRoutes);
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/chat", chatRoutes);


module.exports = app;
