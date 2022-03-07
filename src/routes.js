const { Router } = require("express");
const auth = require("./middlewares/auth");
const SessionsController = require("./controllers/SessionsController");
const UsersController = require("./controllers/UsersController");
const RepositoriesController = require("./controllers/RepositoriesController");

const routes = new Router();

routes.post("/sessions", SessionsController.create);

routes.use(auth);

routes.get("/users", UsersController.indexAll);
routes.get("/users/:id", UsersController.showOne);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

routes.get("/users/:user_id/repositories", RepositoriesController.indexAll);
routes.post("/users/:user_id/repositories", RepositoriesController.create);
routes.delete("/users/:user_id/repositories", RepositoriesController.destroy);


module.exports = routes;