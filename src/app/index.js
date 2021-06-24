const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const useRoutes = require('../router');

const cors = require('koa2-cors');

const app = new Koa();
// 解决跨域的中间件
app.use(cors());
app.useRoutes = useRoutes;
app.use(bodyParser());
app.useRoutes();

module.exports = app;
