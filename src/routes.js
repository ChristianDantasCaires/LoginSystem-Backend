const { Router } = require("express");
const UsersController = require("./controllers/UsersController");

const routes = new Router();

routes.get("/users", UsersController.indexAll);
routes.get("/users/:id", UsersController.showOne);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

module.exports = routes;