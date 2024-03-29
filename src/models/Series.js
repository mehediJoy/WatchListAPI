const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
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

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;
