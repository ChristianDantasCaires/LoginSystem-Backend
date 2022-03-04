const express = require("express");
const cors = require("cors");

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.server();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    server() {
        this.app.listen(5000, () => {
            console.log("Server running...");
        })
    }
}

module.exports = new App().app;