const express = require("express");

const { createUser, login } = require("../models/users");
const { generateToken } = require("./auth");

const userRoutes = express.Router();

userRoutes.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.json({ username: user.username });
});

userRoutes.post("/tokens", async (req, res) => {
  const { username, password } = req.body;
  const user = await login(username, password);
  if (user) {
    const token = await generateToken(user);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

module.exports = userRoutes;
