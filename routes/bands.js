const models = require("../models/index");
const express = require("express");
const router = express.Router();

router.get("/:band_id", async (req, res) => {
  let band;

  try {
    band = await models.Band.findByPk(req.params.band_id);
  } catch (e) {
    return res.json(e);
  }

  res.json({
    band
  });
});

router.post("/create", async (req, res) => {
  let bandCreated;

  try {
    bandCreated = await models.Band.create({
      bandName: req.body.bandName
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    bandCreated
  });
});

router.delete("/:band_id/destroy", async (req, res) => {
  let bandDestroyed;

  try {
    bandDestroyed = await models.Band.destroy({
      where: {
        id: req.params.band_id
      }
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    // Returns true or false based on success of deletion
    success: bandDestroyed
  });
});

router.get("/:band_id/songs", async (req, res) => {
  let songs;

  try {
    songs = await models.Song.findAll({
      where: {
        bandId: req.params.band_id
      }
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    songs
  });
});

router.post("/:band_id/songs/create", async (req, res) => {
  let songCreated;

  try {
    const { title, chords, uploadUrl, description } = req.body;
    songCreated = await models.Song.create({
      title,
      chords,
      uploadUrl,
      description,
      bandId: req.params.band_id
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    songCreated
  });
});

router.delete("/:band_id/songs/:song_id/destroy", async (req, res) => {
  let songDestroyed;

  try {
    songDestroyed = await models.Song.destroy({
      where: {
        id: req.params.song_id
      }
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    // Returns true or false based on success of deletion
    success: songDestroyed
  });
});

module.exports = router;
