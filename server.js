"use strict";

const express = require("express");
const helmet = require("helmet");

const models = require("./models");

const bands = require("./routes/bands");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(helmet());

// Set up all thems middlewares
app.use(express.json());

// Set up all them routes
app.use("/bands", bands);

// Ain't need no indexing
app.get("/robots.txt", function(req, res) {
  res.type("text/plain");
  res.send("User-agent: *\nDisallow: /");
});

models.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, HOST);
  })
  .catch(error => {
    throw new Error(error);
  });
