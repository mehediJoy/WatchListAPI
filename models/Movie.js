const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
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

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
