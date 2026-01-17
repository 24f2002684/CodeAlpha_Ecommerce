const express = require("express");
const isAuthenticated = require("../middleware/authMiddleware");

const router = express.Router();

// Place order (PROTECTED)
router.post("/", isAuthenticated, (req, res) => {
  res.json({ message: "Order placed successfully (protected)" });
});

// Get orders (PROTECTED)
router.get("/", isAuthenticated, (req, res) => {
  res.json({ message: "Fetched user orders (protected)" });
});

module.exports = router;
