const User = require("../../DB/Schemas/User");

const insertUserEntity = async (user) => {
  return await new Promise((resolve, reject) => {
    const { email } = user;
    user.score = 0;
    user.gamesPlayed = 0;

    User.countDocuments({ email }).then((response) => {
      if (response != 0) {
        reject({ message: "Vartotojas su elektroniniu paštu jau egzistuoja" });
      } else {
        const userModel = new User(user);
        userModel.save();
        resolve({ message: "Vartotojas sėkmingai sukurtas" });
      }
    });
  });
};

exports.insertUserEntity = insertUserEntity;
