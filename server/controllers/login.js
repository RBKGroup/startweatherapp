const AccountsModel = require("../db");
const bycrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
  exports.post = (req, response) => {
    var { clientUserName, clientPassword } = req.body;
    if (clientUserName && clientPassword) {
      AccountsModel.find({ username: clientUserName })
        .then((result) => {
          var { password } = result[0];
          bycrypt
            .compare(clientPassword, password)
            .then((res) => {
              if (!res) {
                response.status(200).json("Wrong username / password");
              } else {
                var { id } = result[0];
                sign(id, process.env.SECRET, (err, resultCookie) => {
                  if (err) {
                    response.status(401).json("Wrong in signin !");
                  } else {
                    console.log("Done");
                    response.cookie("jwt", resultCookie, {
                      maxAge: 6048000000,
                    });
                    response.status(200).json("welcome");
                  }
                });
              }
            })
            .catch((err) => {
              response.status(500).json("Server Error !");
            });
        })
        .catch((err) => {
          if (err) {
            response.status(500);
          }
        });
    } else {
      response.status(500).json("email and password requierd");
    }
  };
