const bcrypt = require("bcrypt");

// Hash the user's password
const hashPassword = async (password) => {
  const saltRounds = 10; // You can adjust the number of salt rounds as needed
  return bcrypt.hash(password, saltRounds);
};

module.exports = {
  hashPassword,
};
