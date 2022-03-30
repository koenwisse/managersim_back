const { Router } = require("express");
const Space = require("../models").space;

const router = new Router();

router.get("/", (request, response) =>
  response.send("Welcome to the homepage!")
);

module.exports = router;
