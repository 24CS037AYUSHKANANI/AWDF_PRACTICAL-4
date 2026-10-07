function requestLogger(req, res, next) {
  console.log(
    `[24CS037] ${new Date().toISOString()} | ${req.method} ${req.originalUrl}`
  );
  next();
}
module.exports = requestLogger;
