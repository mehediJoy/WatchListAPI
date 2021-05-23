const express = require("express");
const app = express();
const config = require("./config/config");
require("./db/mongoose");

const authController = require("./auth/authcontroller");
app.use("/auth", authController);

const movieRoutes = require("./routes/movieroutes");
app.use("/movies", movieRoutes);

app.listen(config.PORT, (req, res) => {
  console.log("Server started successfully at port " + config.PORT);
});
