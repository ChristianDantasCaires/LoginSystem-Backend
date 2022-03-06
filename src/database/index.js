const mongoose = require("mongoose");
const config = require("../config/database");

class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    }
}

module.exports = new Database();