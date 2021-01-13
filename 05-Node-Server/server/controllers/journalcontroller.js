let express = require("express");
const { builtinModules } = require("module");
let router = express.Router();

router.get("/practice", function (req, res) {
  res.send("This is totally a practice route");
});

module.exports = router;
