const userService = require("../../services/user/userService");

const getCurrentUser = async (req, res, next) => {
  try {
    await userService.getUserDetails(req.user).then((userDetails) => {
      res.status(200).json(userDetails);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.getCurrentUser = getCurrentUser;
