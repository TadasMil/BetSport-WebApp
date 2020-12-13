const userService = require("../../services/user/userService");

const updateUserDetails = async (req, res, next) => {
  try {
    await userService
      .updateUserProgressDetails(req.body, req.user)
      .then((response) => {
        return res.status(200).json({ response });
      });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const getUserDetails = async (req, res, next) => {
  try {
    await userService.getCurrentUserDetails(req.user).then((response) => {
      return res.status(200).json({ response });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const getHighestWinners = async (req, res, next) => {
  try {
    await userService.highestGameWinners().then((res) => {
      return res.status(200).json({ res });
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.updateUserDetails = updateUserDetails;
exports.getUserDetails = getUserDetails;
exports.getHighestWinners = getHighestWinners;
