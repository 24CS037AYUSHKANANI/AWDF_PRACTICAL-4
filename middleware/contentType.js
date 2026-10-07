function jsonOnly(req, res, next) {
  if (!req.is("application/json")) {
    return res.status(400).json({
      success: false,
      studentId: "24CS037",
      error: "POST and PUT requests require Content-Type: application/json"
    });
  }
  next();
}
module.exports = jsonOnly;
