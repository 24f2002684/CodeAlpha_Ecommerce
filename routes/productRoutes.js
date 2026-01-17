const express = require("express");
const Product = require("../models/Product");
const isAuthenticated = require("../middleware/authMiddleware");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST add product (for testing/admin)
router.post("/", isAuthenticated, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added" });
});

module.exports = router;
