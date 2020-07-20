var express = require("express");
var cors = require("cors");
const axios = require("axios");
var bodyParser = require("body-parser");
const db = require("./db/index");
var path = require("path");
var app = express();
app.use(cors());
var controller = require("./controllers");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/main", controller);
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
module.exports = app;
