const express = require("express");
const loginController = require("../../controllers/login/loginController");

const router = express.Router();

router.post("/", loginController.LoginHandler);
router.get("/", loginController.GetUser);

module.exports = router;
