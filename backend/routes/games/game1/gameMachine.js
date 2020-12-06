const express = require("express");
const gameMachineController = require("../../../controllers/games/gameMachine/gameMachineController");

const router = express.Router();

router.get("/", gameMachineController.getHighestGameWins);

module.exports = router;
