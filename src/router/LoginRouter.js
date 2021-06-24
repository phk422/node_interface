const Router = require("koa-router");

const loginRouter = new Router();

const { login } = require('../controller/LoginController');

loginRouter.post("/login", login);

module.exports = loginRouter;
