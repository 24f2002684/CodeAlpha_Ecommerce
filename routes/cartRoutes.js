const express = require("express");
const isAuthenticated = require("../middleware/authMiddleware");
const Product = require("../models/Product");

const router = express.Router();

// ADD TO CART
router.post("/add/:productId", isAuthenticated, async (req, res) => {
  const { productId } = req.params;

  // Find product
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Initialize cart if not exists
  if (!req.session.cart) {
    req.session.cart = [];
  }

  // Check if product already in cart
  const existingItem = req.session.cart.find(
    (item) => item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    req.session.cart.push({
      productId,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  res.json({ message: "Product added to cart", cart: req.session.cart });
});

// VIEW CART
router.get("/", isAuthenticated, (req, res) => {
  res.json(req.session.cart || []);
});

// REMOVE ITEM FROM CART
router.delete("/remove/:productId", isAuthenticated, (req, res) => {
  const { productId } = req.params;

  if (!req.session.cart) {
    return res.json({ message: "Cart is empty" });
  }

  req.session.cart = req.session.cart.filter(
    (item) => item.productId !== productId
  );

  res.json({ message: "Item removed", cart: req.session.cart });
});

module.exports = router;