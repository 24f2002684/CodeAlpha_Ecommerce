const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.session.userId);

  if (user && user.email === "admin@gmail.com") {
    next();
  } else {
    res.status(403).json({ message: "Admin access only" });
  }
};

module.exports = isAdmin;
