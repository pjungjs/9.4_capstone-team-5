// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const badgesRoutes = require("./controllers/badgesControllers");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONTROLLERS
app.use("/achievements", badgesRoutes); // /achievements is the prefix for all routes in badgesRoutes file  ')
// ROUTES
app.get("/", (_, res) => {
  res.status(200).send("Welcome to EcoWay app");
});

app.get("*", (_, res) => {
  res.status(404).send("Page Not Found!");
});

// EXPORT
module.exports = app;
