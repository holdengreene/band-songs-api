const models = require("../models/index");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  models.Band.create({
    bandName: req.body.bandName
  }).then(response => {
    res.json({
      response
    });
  });
});

module.exports = router;
