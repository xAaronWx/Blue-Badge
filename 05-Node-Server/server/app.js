// Local host server --- localhost:3000/test

let express = require("express"); //We import the Express framework and store it
let app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let about = require("./controllers/aboutcontroller");
let user = require("./controllers/usercontroller");

// app.use("/test", function (req, res) {
//   res.send("This is a message from the test endpoint on the server");
// });
sequelize.sync();
app.use(express.json());
app.use("/journal", journal);
app.use("/about", about);
app.use("/user", user);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
