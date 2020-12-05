const express = require("express");
const { Router } = express;
const router = new Router();
const Image = require("../models").image;

router.get("/images", async (req, res, next) => {
  const allImages = await Image.findAll();
  res.json(allImages);
});

module.exports = router;
