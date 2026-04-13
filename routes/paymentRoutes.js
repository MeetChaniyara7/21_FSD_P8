const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { processPayment } = require("../controllers/paymentController");

// Protected payment route
router.post("/", authMiddleware, processPayment);

module.exports = router;
