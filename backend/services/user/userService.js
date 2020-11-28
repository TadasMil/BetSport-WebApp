const User = require("../../DB/Schemas/User");

const getUserDetails = (user) => {
  return new Promise(async (resolve, reject) => {
    const currentUser = { ...user[0] };
    delete currentUser["password"];

    user && resolve({ currentUser });

    reject({ message: "Something went wrong" });
  });
};

exports.getUserDetails = getUserDetails;
