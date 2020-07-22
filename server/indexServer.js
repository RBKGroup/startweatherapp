const express = require("express");
let app = express();

const cors = require("cors");

var bodyParser = require("body-parser");
//const bcrypt = require("bcrypt");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));
const reg = require("../database/regester");
let AccountsModel = reg.AccountsModel;

const news = require("../database/data");
let newsModel = news.newsModel;

app.post('/register', (req, res) => {

  const { username, email,  password} = req.body;
  let regDocumentation = new AccountsModel({ username, email,  password });

  regDocumentation.save().then(() =>
      res.status(201).send("created"))
      .catch((err) => res.status(500).send(err + "err"))
});

app.get('/login/:username/:password', (req, res) => {

  const {  username , password} = req.params;

  var Username = req.body.username;
  var Password = req.body.password;

  AccountsModel.find({ username, password })
      .then((result) => {
          if (result.length > 0) {
              res.send(true);
          }else{
              res.send(false);
          }
          console.log(result);
      })
      .catch((err) => {
          res.send(err);
      });
});


app.get('/data' ,function (req,res){
    newsModel.find({})
    .then((result)=>{
        res.send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

var port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});