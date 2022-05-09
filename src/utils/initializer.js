const User = require("../models/user");
const logger = require("../utils/logger");

exports.init = async () => {
  const user = await User.countDocuments({
    username: "test@koibanx.com",
  });

  if (user) {
    console.log(user);
  }

  const newUser = new User();
  newUser.username = "test@koibanx.com";
  newUser.password = "admin";
  await User.create(newUser);

  logger.info("Test User created");
};
