const { User } = require("../models");
const { comparePassword } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");

class Controller {
  static async register(req, res) {
    // console.log(req.body, "<< body");
    try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
      });
      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (err) {
      if (err.errors) {
        const errMessages = err.errors.map((item) => item.message);
        res.status(400).json({ message: errMessages });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

  static async login(req, res) {
    // console.log(req.body, "<< req body login  ");
    try {
      const loginUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (loginUser) {
        if (comparePassword(req.body.password, loginUser.password)) {
          const access_token = createToken({
            id: loginUser.id,
            email: loginUser.email,
          });
          res.status(200).json({ access_token });
        } else {
          res.status(401).json({ message: "Invalid email or password" });
        }
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
