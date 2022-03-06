const User = require("../models/User");
const createHashPassword = require("../services/auth");

class UsersController {
    async indexAll(req, res) {
        try {
            const users = await User.find();
            return res.json(users);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async showOne(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            return res.json(user);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async create(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (user) {
                return res.status(422).json({ message: `User ${email} already exists.` });
            }

            const encryptedPassword = await createHashPassword(password);

            const newUser = await User.create({ email, password: encryptedPassword });

            return res.status(200).json(newUser);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { email, password } = req.body;

            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            const encryptedPassword = await createHashPassword(password);

            await user.updateOne({ email, password: encryptedPassword });
            return res.status(200).json();

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            await user.deleteOne();
            return res.status(200).json();

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new UsersController();