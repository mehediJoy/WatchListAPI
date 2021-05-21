const config = require("../config/config");

const mongoose = require("mongoose");
mongoose.connect(config.MONGODB + "watchlist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
  console.log("Connection with MongoDB is Successful!");
});
