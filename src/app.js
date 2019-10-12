const Koa = require("koa");
const koaRouter = require("koa-router");
const cors = require("@koa/cors");
const middleware = require("./middleware");
const app = new Koa();
const corsMiddleware = cors({ "Access-Control-Allow-Origin": "*" });
const routes = require("./routes");

const router = koaRouter();

app.use(corsMiddleware);
app.use(middleware);

routes(router);

app.use(router.routes(), router.allowedMethods());

module.exports = app;
