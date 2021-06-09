const jwt = require("jsonwebtoken");

const config = require("../config/config");

function verifyToken(req, res, next) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).send({ auth: false, massage: "No token provided." });
  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ auth: false, massage: "Failed to verify token." });
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
