const express = require("express");
const server = express();

server.get("/", (_, res) => {
  console.log("it worked")
  res.send("IT WORKS!");
})

server.patch("/", (_, res) => {
  console.log("this works too")
  res.json({ rand: Math.random() });
})

server.listen(3000);