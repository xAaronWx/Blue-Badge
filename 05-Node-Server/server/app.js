// Local host server --- localhost:3000/test

let express = require("express"); //We import the Express framework and store it
let app = express();
let journal = require("./controllers/journalController");
let about = require("./controllers/aboutController");

// app.use("/test", function (req, res) {
//   res.send("This is a message from the test endpoint on the server");
// });

app.use("/journal", journal);
app.use("/journal", about);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
