const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user/userController");

router.put("/update", userController.updateUserDetails);
router.get("/details", userController.getUserDetails);
router.get("/highestwinners", userController.getHighestWinners);

module.exports = router;
