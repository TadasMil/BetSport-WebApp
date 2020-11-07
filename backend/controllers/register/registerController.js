const registerService = require("../../services/register/registerService");
const SHA512 = require("crypto-js/sha512");

const handleIncomingUserData = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = {
      firstName,
      lastName,
      email,
      password: SHA512(password),
    };
    await registerService.insertUserEntity(newUser).then((response) => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.handleIncomingUserData = handleIncomingUserData;
