"use strict";

require("dotenv").config();
const express = require("express");

const models = require("./models/index");
const routes = require("./routes/index");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.use("/", routes);

// Just now for dev. Init Dummy data
models.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
  })
  .then(() => {
    models.Band.create({
      bandName: "Dirty Danny & the Naughty Pilgrims"
    }).then(() => {
      models.Song.create({
        title: "Protest Poetry",
        bandId: 1,
        chords: ["Em", "Ebm", "G#7b5"],
        uploadUrl: "https://gooogle.csadc",
        description: "It's like whatever"
      }).then(() => {
        models.Song.create({
          title: "Making My Bed",
          bandId: 1,
          chords: ["D", "G", "F", "E7"],
          uploadUrl: "https://gooogle.csadc",
          description:
            "It's the only way I can feel these days. Repeat chorus 2x."
        });
      });
    });
  });
