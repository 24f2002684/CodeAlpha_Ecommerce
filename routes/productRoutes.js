const express = require("express");
const Product = require("../models/Product");
const isAuthenticated = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

const router = express.Router();

// GET all products (PUBLIC)
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product (ADMIN only)
router.post("/", isAuthenticated, isAdmin, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added" });
});

// DELETE product (ADMIN only)
router.delete("/:id", isAuthenticated, isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
