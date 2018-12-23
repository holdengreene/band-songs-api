const models = require("../models/index");
const express = require("express");
const router = express.Router();

/**
 * Get the basic info for a band
 */
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

/**
 * Create a band
 */
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

/**
 * Delete a band
 */
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

/**
 * Get the songs for a band
 */
router.get("/:band_id/songs", async (req, res) => {
  let songs;

  try {
    songs = await models.Song.findAll({
      where: {
        bandId: req.params.band_id
      },
      limit: req.query.limit,
      offset: req.query.offset,
      order: [["title", "ASC"]]
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    songs
  });
});

/**
 * Get a one single song
 */
router.get("/:band_id/songs/:song_id", async (req, res) => {
  let song;

  try {
    song = await models.Song.find({
      where: {
        bandId: req.params.band_id,
        id: req.params.song_id
      }
    });
  } catch (e) {
    return res.json(e);
  }

  res.json({
    song
  });
});

/**
 * Create songs under a band
 */
router.post("/:band_id/songs/create", async (req, res) => {
  let songCreated;

  try {
    const { title, chords, uploadUrls, description } = req.body;
    songCreated = await models.Song.create({
      title,
      chords,
      uploadUrls,
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

/**
 * Update a song for a band
 */
router.patch("/:band_id/songs/:song_id/update", async (req, res) => {
  let songUpdated;

  try {
    const { title, chords, uploadUrls, description } = req.body;
    songUpdated = await models.Song.update(
      {
        title,
        chords,
        uploadUrls,
        description
      },
      {
        where: {
          id: req.params.song_id
        }
      }
    );
  } catch (e) {
    return res.json(e);
  }

  res.json({
    songUpdated
  });
});

/**
 * Delete songs associated with a band
 */
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
