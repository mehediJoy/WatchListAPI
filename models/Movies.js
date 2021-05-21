const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    default: "",
  },
});

const Movies = mongoose.model("Movies", moviesSchema);
module.exports = { Movies };
