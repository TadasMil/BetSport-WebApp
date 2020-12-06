const Game1 = require("../../DB/Schemas/Game1");

const getGameTopPlayers = () => {
  return new Promise((resolve, reject) => {
    resolve({ message: "WOW" });
  });
};

exports.getGameTopPlayers = getGameTopPlayers;
