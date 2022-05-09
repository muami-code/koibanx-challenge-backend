require("./database.js");
const app = require("./app");
const config = require("config");
const logger = require("./utils/logger");

// Start the server
app.listen(config.get("port"));
logger.info("API initialized on port " + config.get("port"));
