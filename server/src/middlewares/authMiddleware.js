const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
  // Retrieve the accessToken from the cookie
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ error: "Unauthorized. Pleas Login First." });
  }

  // Verify the accessToken
  jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    // Token is valid, add the decoded user information to the request object
    req.userInfo = decoded;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  // checking user is admin or not
  if (req.userInfo && req.userInfo.user.user_role === "Admin") {
    // User is an admin, allow access to the route
    next();
  } else {
    // User is not an admin, deny access with a 403 Forbidden status
    res.status(403).json({
      error: "Permission denied. You must be an admin to access this resource.",
    });
  }
};
