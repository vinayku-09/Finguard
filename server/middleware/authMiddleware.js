// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // Expecting header: Authorization: Bearer <token>
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "No token provided, access denied" });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token using the same secret used to sign it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request so later routes can use it
    req.user = decoded;

    next(); // token is valid, continue to the actual route
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = protect;