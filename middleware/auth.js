const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const bearer = token.split(" ");
    const bearerToken = bearer[1];
    const vaerified = jwt.verify(bearerToken, "secretKey");
    req.data = vaerified;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
