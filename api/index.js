const express = require("express");
const server = express();

server.get("/", (_, res) => {
  console.log("it worked")
  res.send("IT WORKS!");
})

server.listen(3000);