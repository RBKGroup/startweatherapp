var userRouter = require("express").Router();
var login = require("./login");
var signup = require("./signup");
var main = require("./main");
var logout = require("./logout");
var auth = require("./authMiddelware");
userRouter.get("/logout", logout.get);
userRouter.post("/login", login.post);
// userRouter.use((req, response, next) => {
//   req.cookies = {
//     jwt:
//       "eyJhbGciOiJIUzI1NiJ9.NWYxMDNlZTg0ZTE5YmYxZWJjNjQ3ZjAx.Ufa4TlC1Beg5oXsEsaCY6y9ooKAueHjChlksiwRowp8",
//   };
//   next();
// });
userRouter.post("/signup", signup.postUser);
userRouter.use(auth);
userRouter.get("/Main", main.get);

module.exports = userRouter;
