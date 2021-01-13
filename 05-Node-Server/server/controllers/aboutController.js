let express = require("express");
const { builtinModules } = require("module");
let router = express.Router();

router.get("/about", function (req, res) {
  res.send("Welcome to the about page");
});

module.exports = router;
