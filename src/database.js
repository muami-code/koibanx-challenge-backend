const mongoose = require("mongoose");
const config = require("config");

(async () => {
  try {
    (async () => {
      const db = await mongoose
        .connect(
          "mongodb://" +
            config.get("mongodb.address") +
            "/" +
            config.get("mongodb.dbname"),
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then((db) => console.log("Database is connected"))
        .catch((e) => console.log(e));
    })();
  } catch (e) {
    console.log(e);
  }
})();
