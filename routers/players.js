const { Router } = require("express");
const Player = require("../models").player;

const router = new Router();

// Get all players
router.get("/", async (req, res) => {
  const limit = req.query.limit || 2;
  const offset = req.query.offset || 0;
  console.log(req);
  console.log(res);
  const players = await Player.findAndCountAll({ limit, offset });
  res.status(200).send({ message: "ok", players });
});

// GET player by id.
router.get("/:id", async (req, res) => {
  const { id } = req.params; // TODO: how is this setup with players and how should we set it up with our situation?

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Player id is not a number" });
  }

  const player = await Player.findByPk(id, {});

  if (player === null) {
    return res.status(404).send({ message: "Player not found" });
  }

  res.status(200).send({ message: "ok", player });
});

module.exports = router;
