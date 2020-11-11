const User = require("../../DB/Schemas/User");

const insertUserEntity = async (user) => {
  return await new Promise((resolve, reject) => {
    const { email } = user;
    User.countDocuments({ email }).then((response) => {
      if (response != 0) {
        reject({ message: "Email already exists" });
      } else {
        const userModel = new User(user);
        userModel.save();
        resolve({ message: "User successfully created" });
      }
    });
  });
};

exports.insertUserEntity = insertUserEntity;
