var app = require("./server.js");
const port = 4000;
const mongoose = require("mongoose");
const mongUrl = " mongodb://localhost/weather";
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(mongUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected data!!");
  })
  .catch((err) => {
    console.log("Error when connected to the DB", err);
  });
app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
