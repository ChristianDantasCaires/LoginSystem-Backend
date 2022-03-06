class HelloController {
    async index(req, res) {
        res.send("111");
    }
}

module.exports = new HelloController();

