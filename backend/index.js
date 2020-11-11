const express = require("express");
const app = express();
const loginRoute = require("./routes/login/login.js");
const registerRoute = require("./routes/register/register");
const connectDB = require("./DB/connection");
var bodyParser = require("body-parser");
require("dotenv").config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use("/login", loginRoute);
app.use("/register", registerRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
