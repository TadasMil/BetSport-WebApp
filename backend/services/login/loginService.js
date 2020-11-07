const User = require("../../DB/Schemas/User");
const SHA512 = require("crypto-js/sha512");

const checkForUserDetails = (user) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = user;
    const currentUserPsw = SHA512(password);
    const foundUser = await User.find({ email });
    const existingUser = { ...foundUser };

    if (approveUserExistence) {
      currentUserPsw == existingUser[0].password &&
        resolve({ success: true, message: "Successfully logged in" });
    }

    reject({
      success: false,
      message: "Email or password is incorrect",
    });
  });
};

const approveUserExistence = () => {
  return Array.isArray(foundUser) && foundUser.length ? true : false;
};

exports.checkForUserDetails = checkForUserDetails;
