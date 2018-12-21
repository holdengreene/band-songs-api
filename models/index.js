const Sequelize = require("sequelize");

// Actually connect. Ya Know.
const sequelize = new Sequelize(process.env.DATABASE_URL, {
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
