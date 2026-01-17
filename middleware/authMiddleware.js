const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    // user is logged in
    next();
  } else {
    res.status(401).json({ message: "Unauthorized. Please login." });
  }
};

module.exports = isAuthenticated;
