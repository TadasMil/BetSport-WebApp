const express = require("express");
const app = express();
const loginRoute = require("./routes/login/login.js");
const registerRoute = require("./routes/register/register");
const gameMachine = require("./routes/games/game1/gameMachine");
const authMiddleware = require("./services/auth/authMiddleware");
const userRoute = require("./routes/user/userRoutes");
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectDB = require("./DB/connection");
connectDB();

app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.use(authMiddleware.isUserValid);
app.use("/game", gameMachine);
app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
