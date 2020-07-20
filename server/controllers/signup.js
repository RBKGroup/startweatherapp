var AccountsModel = require("../db");
var bcryptjs = require("bcryptjs");
const { sign } = require("jsonwebtoken");
// exports.unique = async (req, res) => {
//   var { email } = req.headers;
// };

exports.postUser = (req, response) => {
  var { username, email, password } = req.body;
  AccountsModel.find({ username })
    .then((res) => {
      if (res.length !== 0) {
        response.status(400).json("this user is  already registered");
      } else {
        bcryptjs
          .hash(password, 10)
          .then((hash) => {
            var newUser = new AccountsModel({
              username,
              email,
              password: hash,
            });
            newUser
              .save()
              .then((res) => {
                var { id } = res;
                sign(id, process.env.SECRET, (err, resultCookie) => {
                  if (err) {
                    response.status(401).json("Wrong in signin !");
                  } else {
                    response.cookie("jwt", resultCookie, {
                      maxAge: 6048000000,
                    });
                    response.status(200).json("Done !");
                  }
                });
              })
              .catch((err) => {
                console.log("Error>>>", err);
                response.status(500).json("Sorry for that :( error in server ");
              });
          })
          .catch((err) => {
            response.status(500).json("Sorry for that :( error in server ");
          });
      }
    })
    .catch((err) => {
      res.status(500).json("Sorry for that :( error in server ");
    });
};
