exports.get = (request, response) => {
  console.log("dddd");
  response.clearCookie("jwt");
  response.status(200).send("loged out ...");
};
