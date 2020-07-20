var { verify } = require("jsonwebtoken");

const verfiyToken = (req, response, next) => {
  var jwt = req.headers.cookie ? req.headers.cookie.split("=")[1] : undefined;

  if (jwt) {
    verify(jwt, process.env.SECRET, (err, res) => {
      if (err) {
        response.status(401).send("some thing wrong in the token");
      } else {
        next();
      }
    });
  } else {
    response.status(401).send("you are not loged in");
  }
};

module.exports = verfiyToken;
