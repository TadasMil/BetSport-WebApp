const express = require("express");
const app = express();
const loginRoute = require("./routes/login/login.js");
const registerRoute = require("./routes/register/register");
const userRoute = require("./routes/currUser/getCurrentUser");
const authMiddleware = require("./services/auth/authMiddleware");
var cors = require("cors");
const connectDB = require("./DB/connection");
var bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.use(authMiddleware.isUserValid);

app.use("/getCurrentUser", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
