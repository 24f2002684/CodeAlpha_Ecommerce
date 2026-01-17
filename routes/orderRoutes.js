const express = require("express");
const router = express.Router();

// Place order
router.post("/", (req, res) => {
  res.json({ message: "Order placed (placeholder)" });
});

// Get user orders
router.get("/", (req, res) => {
  res.json({ message: "Orders fetched (placeholder)" });
});

module.exports = router;
