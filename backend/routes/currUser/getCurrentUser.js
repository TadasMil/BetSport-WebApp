const express = require("express");
const userController = require("../../controllers/currUser/userController");

const router = express.Router();

router.get("/", userController.getCurrentUser);

module.exports = router;
