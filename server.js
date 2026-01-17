const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/views/cart.html");
});

app.use(
  session({
    secret: "codealpha-secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));


// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
