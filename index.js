const express = require("express");
const server = express();
const knex = require("./knexConfig");

server.get("/", async (_, res) => {
  // await knex('users').insert({ full_name: "Abel" })
  console.log("it worked")
  res.send("IT WORKS!");
})

server.patch("/", (_, res) => {
  console.log("this works too")
  res.json({ rand: Math.random() });
})

server.listen(3001);