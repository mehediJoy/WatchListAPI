const express = require("express");
const app = express();
const config = require("./config/config");
require("./db/mongoose");

const authController = require("./auth/authcontroller");
const movieRoutes = require("./routes/movieroutes");
const seriesRoutes = require("./routes/seriesroutes");

app.use("/auth", authController);
app.use("/movies", movieRoutes);
app.use("/series", seriesRoutes);

app.listen(config.PORT, (req, res) => {
  console.log("Server started successfully at port " + config.PORT);
});
