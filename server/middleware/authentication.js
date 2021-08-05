const { verifyToken } = require("../helper/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  console.log("masuk auth aaa");
  if (req.headers.access_token) {
    try {
      const payload = verifyToken(req.headers.access_token);
      try {
        const user = await User.findByPk(payload.id);
        if (user) {
          req.loggedInUser = { id: user.id, email: user.email };
          console.log("loloss");
          next();
        } else {
          res.status(401).json({ message: "Invalid or wrong JWT" });
        }
      } catch (err) {
        res.status(500).json({ message: "Internal server error" });
      }
    } catch (err) {
      res.status(401).json({ message: "Invalid or wrong JWT" });
    }
  } else {
    res.status(401).json({ message: "Please login first!" });
  }
}

module.exports = authentication;
