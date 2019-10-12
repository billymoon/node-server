const ping = require("node-api-ping");

module.exports = router => {
  router.use("/ping", ping.routes(), ping.allowedMethods());
};
