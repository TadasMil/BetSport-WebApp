const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/register/registerController");

router.post("/", registerController.handleIncomingUserData);

module.exports = router;
