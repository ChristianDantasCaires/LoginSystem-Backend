const bcryptjs = require("bcryptjs");

const createHashPassword = (password) => {
    return bcryptjs.hash(password, 8);
}

module.exports = createHashPassword;