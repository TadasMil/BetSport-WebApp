const jwt = require("jsonwebtoken");

const isUserValid = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("no token");
    return res.status(401).json("Reikia prisijungti");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res
        .status(403)
        .send("Sesijos laikas baigėsi. Prašome prisijungti.");
    }

    if (!error) {
      req.user = user;
      next();
    }
  });
};

exports.isUserValid = isUserValid;
