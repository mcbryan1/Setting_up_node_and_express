const express = require("express");

const handleAllRequests = (requestObject, responseObject) => {
  console.log("Fuck Me!!!... I just received a request");
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");

  responseObject.write("<h1>404. Not Found</h1>");

  responseObject.end();
};
const handleHomeRequest = (req, res) => {
  console.log("Someone requested for home page");
  res.send("<h1>This is My Home Page</h1>");
};
const handleLoginRequest = (req, res) => {
  console.log("Someone requested for login page");
  res.send("<h1>This is My Login Page</h1>");
};
const handleSigninRequest = (req, res) => {
  console.log("Someone requested for signin page");
  res.send("<h1>This is My Sign in Page</h1>");
};
const handleProfileRequest = (req, res) => {
  console.log("Someone requested for profile page");
  res.send("<h1>This is My profile Page</h1>");
};
const server = express();
server.use("/profile", handleProfileRequest);
server.use("/signin", handleSigninRequest);
server.use("/login", handleLoginRequest);
server.use("/", handleHomeRequest);

server.use(handleAllRequests);

server.listen(3000, "127.0.0.1", () =>
  console.log("Server Is Ready For Any Fucking Request")
);
