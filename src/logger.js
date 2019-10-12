const winston = require("winston");

winston.configure({
  transports: [
    new winston.transports.Console({ timestamp: true }),
    new winston.transports.File({ timestamp: true, filename: "./logs.txt" })
  ]
});

const info = (str, metadata) => winston.info(str, metadata);
const warn = (str, metadata) => winston.warn(str, metadata);
const error = (str, metadata) => winston.error(str, metadata);

module.exports = {
  info,
  warn,
  error
};
