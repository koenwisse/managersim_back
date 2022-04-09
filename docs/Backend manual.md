KARLA general Readme.md

Sequelize
config => configure for example where is our database

models => Models of our data (Users, Product, Orders, Categories)

migrations: instructions to actually build tables from the models.

seeders: How to input test data to our tables.

Useful commands
Generate Models & Migrations
npx sequelize-cli model:generate --name user --attributes name:string,email:string,phone:integer,password:string

Generate Seed files
npx sequelize-cli seed:generate --name some-users

---

A. SET UP PROJECT AND DATABASE
B. RELATIONS.md (Karla)

A. SET UP PROJECT AND DATABASE

1. Set up project
2. Install sequelize --> npm install sequelize sequelize-cli 3. Install library communication sequelize <-> postgres npm install pg
3. initialize sequelize project --> npx sequelize-cli init
4. Git initial commit git add .
   git commit -m 'Initial commit, sequelize init'
5. Create repo in your git account
6. Push existing repo to your github
   git@github.com:koenwisse/Database-project-2.git
   git branch -M main
   git push -u origin main
   check in your github if its there
   for every next push do
   for every next commit do: add, commit + message and ggpush

   npm init -y
   git init
   touch .gitignore
   add node modules to .gitignore --> node_modules/

7. set up server in index.js file on root
   const express = require("express");

const PORT = process.env.PORT || 4000;

// create the app (server)
const app = express();

// start the server
app.listen(PORT, () => console.log(`I am listening on port, ${PORT}`));

Test the server with browser and httpie.
example: http GET :4000/spaces
You should see Cannot GET / in the browser and a message like Listening on :4000 in your terminal.

9. a Generate Models & Migrations
   Add models, migs and attributes  
   user:
   npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string
   team:
   npx sequelize-cli model:generate --name team --attributes name:string,country:string,titles:integer
   player:
   npx sequelize-cli model:generate --name player --attributes name:string,age:integer
   user  
   team  
   players  
   b Connect to database -->
   create postgreSQL instance in ElephantSQL https://customer.elephantsql.com/instance/create

   ***

   Modify the corresponding object and set your own PostgreSQl credentials: {dialect}://{username}:{password}@{host_url}:{PORT}/{db_name}
   Go to postico and if you put that url in host in Postico "node" it fills all details (password, etc.)
   c. add relations
   user
   team
   player

   ***

GGPUSH

10. Connect sequelize to postgres: npx sequelize-cli db:migrate you should get "Loaded config file.." etc in terminal
11. Set postgreSQL credentials to development object in config.json
    "development": {
    "url": "postgres://sialuzfd:hVxgAW_Yvvk4O32dvzqjqIM7b1rjVEo3@balarama.db.elephantsql.com:5432/sialuzfd", 11. change in models/index.js "sequelize = new....." to "sequelize = new Sequelize(config.url, config)"
    // \*\*\_DATABASE IS NOW SET UP\*\*\*
12. Run "npx sequelize-cli db:migrate" and look in postico that tables are there
13. Generate Seed files (for every model 1 seed file)
    npx sequelize-cli seed:generate --name dummy-users 14. Add test data, initial set of data is provided to a database, so for user.js use for example:

module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert(
"users",
[
{
name: "Leo Messi",
email: "leo@messi.com",
phone: 1234567,
password: "test",
createdAt: new Date(),
updatedAt: new Date(),
},
{
name: "Dan Abramov",
email: "dan@redux.com",
phone: 1234567,
password: "test",
createdAt: new Date(),
updatedAt: new Date(),
},
],
{}
);
},

15. Run the seeds
    npx sequelize-cli db:seed:all

// To un-do the seed we can use $ npx sequelize-cli db:seed:undo:all
// We can also point to a specific seed file to run instead of "all" using the --seed flag

$ npx sequelize-cli db:seed --seed 20191211110453-some-users
$ npx sequelize-cli db:seed:undo --seed 20191211110453-some-users.js (.js at the end of the file required to be able to run)

you can also do: npx sequelize-cli db:migrate:undo:all
that undos seed and migrations all at once

16. Let's set up a simple endpoint to get our data out of the server. We must install express as a dependency and set up one route. Run npm i express and create an index.js file in the root of your project
17. Now try it out! Run node index.js or "nxp nodemon ." and you can use httpie or your browser to test this endpoint
18. Examples for the various queries:

- Operations as HTTP methods:
  http GET :4000/spaces: get data
  http POST :4000/spaces: insert data, ex: post picture, sign up, post
  http PATCH :4000/spaces: update existing data, ex: changing profile picture, fix comment
  http DELETE :4000/spaces: delete data, ex: delete a picture, delete a comment

- Clean URLs:
  get users baseUrl/users
  get one user baseUrl/users/:id
  user emails baseUrl/users/emails
  lists for a user baseUrl/users/:id/lists
  get products baseUrl/products
  get one products baseUrl/products/:id
  lists for a products baseUrl/products/:id/lists

- Appropriate use of HTTP status codes:
  200 - 299: Successful responses
  300 - 399: Redirection messages
  400 - 499: Client error responses
  500 - 599: Server error responses

- CRUD (create, read, update and delete):
  CREATE: post
  READ: get
  UPDATE: put/patch
  DELETE: delete
  Testing out endpoints
  Command line with httpie
  Client with Postman

19. Undo all your migrations and add the Foreign key to the seeds
    $ npx sequelize-cli db:migrate:undo:all

20. Add relations

Why add relations ?
Avoid repetition
Separations of concerns
Security
Get only relevant data
Types of relation
One to One:

citizen hasOne BSN
BSN belongsTo citizen
citzen <-> BSN person <-> ID user <-> token per Session

One to Many:

person hasMany toothbrushes
toothbrushed belongsTo person
person <-> underwear person <-> email person <-> computers person <-> glasses biological mother <-> kids author <-> books

Many to Many:

student hasMany classes
classes hasMany students
students <-> classes person <-> siblings customer <-> products worker <-> project

Steps to add relation
Step 0: Undo all your migrations and add the Foreign key to the seeds

npx sequelize-cli db:migrate:undo:all

Step 1: Generate a new file to add the relation

npx sequelize-cli migration:generate --name set-up-relations

Step 2: Modify that file to describe the relation

"use strict";

module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.addColumn("todoLists", "userId", {
type: Sequelize.INTEGER,
references: {
model: "users",
key: "id",
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
});
},
down: async (queryInterface, Sequelize) => {
await queryInterface.removeColumn("todoLists", "userId");
},
};
Step 3: Migrate and check Postico/DBeaver

npx sequelize-cli db:migrate

Step 4: Write the relations in the models

Step 5: Write queries to test

** KEEP ON QUERYING AFTER EVERY STEP **

