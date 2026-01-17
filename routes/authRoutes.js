const express = require("express");
const router = express.Router();

// Register route (placeholder for now)
router.post("/register", (req, res) => {
  res.json({ message: "Register route working" });
});

// Login route (placeholder for now)
router.post("/login", (req, res) => {
  res.json({ message: "Login route working" });
});

// Logout route
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out" });
  });
});

module.exports = router;
