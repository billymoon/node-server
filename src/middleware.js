const compose = require("koa-compose");
const compress = require("koa-compress");
const helmet = require("koa-helmet");

const logger = require("./logger");

const notFoundRequestLogger = async (ctx, next) => {
  await next();
  if (ctx.response.status === 404) {
    const metadata = {
      status: ctx.response.status,
      correlationId: ctx.request.correlationId,
      url: ctx.request.originalUrl,
      method: ctx.request.method
    };

    logger.error("Request Failure", metadata);
  }
};

module.exports = compose([compress(), notFoundRequestLogger, helmet()]);
