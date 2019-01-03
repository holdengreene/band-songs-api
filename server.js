"use strict";

require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const models = require("./models");

const bands = require("./routes/bands");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(helmet());

// Set up cors, leave open for dev
const corsOptions = {
  origin: process.env.ORIGIN
};

app.use(cors(corsOptions));

// Set up all thems middlewares
app.use(express.json());

// Set up all them routes
app.use("/bands", bands);

models.sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, HOST);
  })
  .then(() => {
    models.Band.create({
      bandName: "PP and the Kids"
    });
  })
  .catch(error => {
    throw new Error(error);
  });
