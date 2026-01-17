const express = require("express");
const isAuthenticated = require("../middleware/authMiddleware");
const Order = require("../models/Order");

const router = express.Router();

// CHECKOUT — CART ➜ ORDER
router.post("/checkout", isAuthenticated, async (req, res) => {
  const cart = req.session.cart;

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = new Order({
    userId: req.session.userId,
    items: cart,
    totalAmount,
  });

  await order.save();

  // Clear cart after order
  req.session.cart = [];

  res.json({
    message: "Order placed successfully",
    order,
  });
});

// GET USER ORDERS
router.get("/", isAuthenticated, async (req, res) => {
  const orders = await Order.find({ userId: req.session.userId });
  res.json(orders);
});

module.exports = router;
