const bcryptjs = require("bcryptjs");

const createHashPassword = (password) => bcryptjs.hash(password, 8);

const checkPassword = (user, password) => bcryptjs.compare(password, user.password);

module.exports = { createHashPassword, checkPassword };