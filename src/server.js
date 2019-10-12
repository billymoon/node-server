const http = require("http");
const process = require("process");
const { server } = require("./config");
const logger = require("./logger");
const app = require("./app");
const { port } = server;

if (!process.env.LANG) {
  process.env.LANG = "en-GB.UTF-8";
}

const serverStart = async (port, config, requestListener) => {
  const server = http.createServer(requestListener);

  server.listen(port, error => {
    if (error) {
      logger.error(`Failed to start server on port ${port}`, error);
      throw new Error(error);
      return;
    }

    logger.info(`Server started on port ${port}`);
    return server;
  });
};
// const serverStart = (port, config, requestListener) =>
//   new Promise((resolve, reject) => {
//     const server = http.createServer(requestListener);

//     server.listen(port, error => {
//       if (error) {
//         logger.error(`Failed to start server on port ${port}`, error);
//         return reject(error);
//       }

//       logger.info(`Server started on port ${port}`);
//       return resolve(server);
//     });
//   });

module.exports = serverStart(port, server, app.callback());
