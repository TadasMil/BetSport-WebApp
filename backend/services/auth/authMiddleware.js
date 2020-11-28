const jwt = require("jsonwebtoken");

const isUserValid = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.send(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.send(403);
    req.user = user;
  });

  next();
};

exports.isUserValid = isUserValid;
