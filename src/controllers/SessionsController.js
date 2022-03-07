const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { checkPassword } = require("../services/auth");
const authConfig = require("../config/auth");

class SessionsController {
    async create(req, res) {
        const { email, password } = req.body;

        const user = User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "User / Password invalid." });
        }

        if (!checkPassword(user, password)) {
            return res.status(401).json({ error: "User / Password invalid." });
        }

        const { id } = user;

        return res.json({
            user: { id, email },
            token: jwt.sign(
                { id },
                authConfig.secret,
                {
                    expiresIn: authConfig.expiresIn
                }
            )
        })

    }
}

module.exports = new SessionsController();