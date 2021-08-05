const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

function hashPassword(rawPassword) {
  return bcrypt.hashSync(rawPassword, salt);
}

function comparePassword(rawPassword, hashedPassword) {
  return bcrypt.compareSync(rawPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
