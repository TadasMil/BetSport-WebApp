const User = require("../../DB/Schemas/User");
const SHA512 = require("crypto-js/sha512");
const jwt = require("jsonwebtoken");

const checkForUserDetails = (user) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = user;
    const currentUserPsw = SHA512(password);
    const foundUser = await User.find({ email });
    const existingUser = { ...foundUser };

    if (approveUserExistence(foundUser)) {
      const accessToken = jwt.sign(
        existingUser,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10d" }
      );
      if (currentUserPsw == foundUser[0].password) {
        delete existingUser[0]._doc.password;
        delete existingUser[0]._doc.__v;

        existingUser[0]._doc.accessToken = accessToken;
        resolve({
          success: true,
          message: "Sekmingai prisijungta",
          user: existingUser[0],
        });
      }
    }

    reject({
      success: false,
      message: "Neteisingi vartotojo duomenys",
    });
  });
};

const approveUserExistence = (foundUser) => {
  return Array.isArray(foundUser) && foundUser.length ? true : false;
};

exports.checkForUserDetails = checkForUserDetails;
