require("dotenv").config({ path: __dirname + "/.env" });

var PORT = process.env.PORT;
var MONGODB = process.env.MONGODB;
var JWT_SECRET = process.env.JWT_SECRET;

module.exports = { PORT, MONGODB, JWT_SECRET };
