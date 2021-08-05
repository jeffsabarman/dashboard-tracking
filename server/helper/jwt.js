const jwt = require("jsonwebtoken");

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_TOKEN);
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_TOKEN);
}

module.exports = {
  createToken,
  verifyToken,
};
