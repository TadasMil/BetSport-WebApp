const User = require("../../DB/Schemas/User");

const getCurrentUserDetails = (user) => {
  return new Promise((resolve, reject) => {
    User.findById(user[0]._id).then((model) => {
      delete model._doc.password;
      delete model._doc.__v;
      resolve({ user: model });
    });
  });
};

const updateUserProgressDetails = (body, user) => {
  return new Promise(async (resolve, reject) => {
    await User.findById(user[0]._id).then((model) => {
      if (!model) {
        reject({ message: "Nerastas vartotojas" });
      }

      if (body.moneyWon) {
        model.score += body.moneyWon;
      } else {
        model.score -= body.moneyLost;
      }
      model.gamesPlayed += 1;
      model.gamesWon += body.gamesWon;
      model.moneyLost += body.moneyLost;
      model.moneyWon += body.moneyWon;

      model.save();
      resolve({ model });
    });
  });
};

const highestGameWinners = () => {
  return new Promise((resolve, reject) => {
    resolve({ mssg: "Tadas" });
  });
};

exports.updateUserProgressDetails = updateUserProgressDetails;
exports.getCurrentUserDetails = getCurrentUserDetails;
exports.highestGameWinners = highestGameWinners;
