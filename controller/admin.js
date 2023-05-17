function validateAuth(req, res, next) {
  const token = req.query.token;
  if (token === process.env.ADMIN_ACCESS_TOKEN) next();
  else return res.status(403).send("<h1>Access denied!</h1>");
}

module.exports = validateAuth;
