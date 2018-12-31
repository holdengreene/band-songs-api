"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const models = require("./models");

const bands = require("./routes/bands");

// Constants
const PORT = 8080;
// const HOST = "0.0.0.0";

// App
const app = express();

// Set up cors, leave open for dev
const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// Set up all thems middlewares
app.use(express.json());

// Set up all them routes
app.use("/bands", bands);

// console.log("Index models", models);
// console.log(models.sequelize.sync());

// Just now for dev. Init Dummy data
models.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(process.env.PORT || PORT);
  })
  .catch(error => {
    throw new Error(error);
  });
