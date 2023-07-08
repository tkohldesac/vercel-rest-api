const client = require('knex')({
  client: 'pg',
  connection: process.env.POSTGRES_URL + "?sslmode=require",
  searchPath: ['knex', 'public'],
});

module.exports = client;