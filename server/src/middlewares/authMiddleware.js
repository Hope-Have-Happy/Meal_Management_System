const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  // Check if the user is logged in (e.g., based on JWT)
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // Store the authenticated user in the request object
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

/* mock-up code */
const authenticateUser = (req, res, next) => {
  // Check if the user is authenticated (e.g., based on JWT)
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // Store the authenticated user in the request object
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

/* mock-up code */
const authorizeAdmin = (req, res, next) => {
  // Check if the user has admin privileges
  if (req.user && req.user.role === "admin") {
    next(); // User is authorized
  } else {
    return res.status(403).json({ error: "Forbidden" });
  }
};

module.exports = { authenticateUser, authorizeAdmin, isLoggedIn };
