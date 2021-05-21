const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const config = require("../config/config");

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    },
    (err, user) => {
      if (err)
        return res
          .status(500)
          .send("There was a problem registering user to database!");

      var token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
        expiresIn: 40000,
      });
      res.status(200).send({
        auth: true,
        token: token,
      });
    }
  );

  
});

module.exports = router;
