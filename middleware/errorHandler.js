function errorHandler(err, req, res, next) {
  console.error("[24CS037] Internal error:", err.message);
  res.status(500).json({
    success: false,
    studentId: "24CS037",
    error: "Something went wrong"
  });
}
module.exports = errorHandler;
