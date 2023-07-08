# server config
- vercel.json

# db config
- go to the project's dashboard on vercel.com
- click storage
- create a psql db
- `npm i pg knex dotenv`
- add `.env` to `.gitignore`
- click the `.env.local` option under the quickstart menu and copy its contents into a `.env` file in the root of your local project
- create a seed file resembling the `schema.sql` file in those project (no dropping databases or managing connections only table and row creations/deletions)
- seed the db using the connection string from the `psql` snippet of the quickstart menu (`psql "CONNECTION_STRING" < schema.sql`) (supposedly)
- Copy/Paste the seed contents after connecting to the Vercel DB. 
- configure you're knex config just as this project has in the `./knex.Config.js` file.
- use the knex client as you normally would!

NOTE: both your production and development environments will be connected to the same db unless you make the `knexConfig.js` use some conditional logic and/or fiddle with environment variables a bit.