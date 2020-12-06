const gameService = require("../../../services/game/gameService");

const getHighestGameWins = async (req, res, next) => {
  try {
    console.log(req.user);
    await gameService.getGameTopPlayers(req.user).then((response) => {
      return res.status(200).json({ response });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

exports.getHighestGameWins = getHighestGameWins;
