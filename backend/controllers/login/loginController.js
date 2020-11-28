const loginService = require("../../services/login/loginService");

const handleUserLogin = async (req, res, next) => {
  try {
    const user = { ...req.body };
    await loginService.checkForUserDetails(user).then((response) => {
      res.status(200).json(response);
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

exports.handleUserLogin = handleUserLogin;
