const Sequelize = require("sequelize");

// Actually connect. Ya Know.
const sequelize = new Sequelize(process.env.DATABASE_URL);

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

// Just now for dev
models.sequelize.sync().then(() => console.log("done been synced"));

module.exports = models;
