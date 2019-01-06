const Sequelize = require("sequelize");

// Actually connect. Ya Know.
const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
  // defined by docker
  host: "database",
  dialect: "postgres",
  ssl: true,
  operatorsAliases: false
});

/**
 * Import all the models and export them
 */
const models = {
  Band: sequelize.import("./band"),
  Song: sequelize.import("./song")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
