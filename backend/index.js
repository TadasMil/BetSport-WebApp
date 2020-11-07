const express = require("express");
const app = express();
const loginRoute = require("./routes/login/login.js");
const registerRoute = require("./routes/register/register");
const connectDB = require("./DB/connection");
var bodyParser = require("body-parser");
require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/login", loginRoute);
app.use("/register", registerRoute);

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
