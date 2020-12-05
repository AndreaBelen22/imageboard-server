const express = require("express");
const { Router } = express;
const router = new Router();
const Image = require("../models").image;

router.get("/", async (req, res, next) => {
  try {
    const allImages = await Image.findAll();
    res.json(allImages);
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const user = await Image.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
