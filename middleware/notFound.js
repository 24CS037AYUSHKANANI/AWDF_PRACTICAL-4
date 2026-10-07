function notFound(req, res) {
  res.status(404).json({
    success: false,
    studentId: "24CS037",
    error: "The requested route does not exist",
    method: req.method,
    path: req.originalUrl
  });
}
module.exports = notFound;
