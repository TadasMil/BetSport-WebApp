let users = [];

const LoginHandler = (req, res, next) => {
  const userName = req.body.name;
  const surName = req.body.surname;

  const user = {
    name: userName,
    surname: surName,
  };

  users.push(user);
  res.json(user);
};

const GetUser = (req, res, next) => {
  res.json(users);
};

exports.LoginHandler = LoginHandler;
exports.GetUser = GetUser;
