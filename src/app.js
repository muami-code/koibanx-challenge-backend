const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Initializations
const app = express();
require("./utils/initializer").init();
const dotenv = require("dotenv").config();

// Middleware
const corsOptions = {
  origin: '*', // origin: 'url'
  credentials: true,  //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
app.set("port", process.env.PORT || 4000);

// Routes
app.get("/", (req, res) => {
  res.json("hello world :)");
});

const storesRoutes = require("./routes/stores.routes");
app.use("/api", storesRoutes);

// Public files
// app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
