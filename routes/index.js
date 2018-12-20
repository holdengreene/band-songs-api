const models = require("../models/index");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  models.Band.findAll({
    include: [models.Song]
  }).then(bands => {
    res.json({
      bands
    });
  });
});

module.exports = router;
