const express = require("express");
const { Router } = express;
const router = new Router();
const User = require("../models").user;

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
