require('dotenv').config()

const express = require("express");
const server = express();
const cors = require('cors')
const knex = require("./knexConfig");

server.use(cors({
  "origin": process.env.CORS_ALLOWED_ORIGIN,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials": true, // only for cookies
}));

server.get("/", async (_, res) => {
  // await knex('users').insert({ full_name: "Abel" })
  console.log("it worked")
  res.send("IT WORKS!");
});

server.patch("/", (_, res) => {
  console.log("this works too")
  res.json({ rand: Math.random() });
});

server.listen(3001);