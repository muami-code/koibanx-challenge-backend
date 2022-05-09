const User = require("../models/user");

const basicAuth = (req, res, next) => {
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf("basic") === -1
  ) {
    return res.status(400).json({ message: "Missing authorization header" });
  }
  const baseCredentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(baseCredentials, "base").toString("ascii");
  const [username, password] = credentials.split(":");

  authenticate({ username, password })
    .then(function (user) {
      user.removeUserPassword();
      req.user = user;
      next();
    })
    .catch(function () {
      return res
        .status(401)
        .json({ message: "Invalid authentication credentials" });
    });
};
function authenticate({ username, password }) {
  return new Promise(function (resolve, reject) {
    User.findOne({ username: username }).then((user) => {
      if (user && user.veryfyPassword(password)) {
        resolve(user);
      } else {
        reject();
      }
    });
  });
}

module.exports = basicAuth;
