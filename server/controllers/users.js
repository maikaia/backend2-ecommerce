const express = require("express");

const userRoutes = express.Router();

userRoutes.post("/", async (req, res) => {
  const { username, password } = req.body;
  res.json({ username });
});

module.exports = userRoutes;
