// let express = require("express");
// let router = express.Router();
// let sequelize = require("../db");
// let User = sequelize.import("../models/user.js");

// router.get("/user", function (req, res) {
//   res.send("This is totally a practice route");
// });

const router = require("express").Router();
const User = require("../db").import("../models/user.js");

router.post("/create", function (req, res) {
  User.create({
    email: req.body.user.email,
    password: req.body.user.password,
  }).then(res.send("This is your user name and password"));
});

module.exports = router;
