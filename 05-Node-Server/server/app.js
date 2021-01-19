require("dotenv").config();
let express = require("express"); //We import the Express framework and store it
let app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let about = require("./controllers/aboutcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();
app.use(require("./middleware/headers"));
app.use(express.json());

app.use("/user", user);
app.use("/journal", journal);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
