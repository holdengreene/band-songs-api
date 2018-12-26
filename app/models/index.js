const Sequelize = require("sequelize");

// Actually connect. Ya Know.
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  operatorsAliases: false
});

console.log("models");

/**
 * Import all the models and export them
 */
const models = {
  Band: sequelize.define("band", {
    bandName: Sequelize.STRING
  }),
  Song: sequelize.define("song", {
    title: Sequelize.STRING,
    chords: Sequelize.ARRAY(Sequelize.TEXT),
    uploadUrls: Sequelize.ARRAY(Sequelize.TEXT),
    description: Sequelize.STRING(2000)
  })
};

console.log(models.Song);

// models.Band.associate = () => {
models.Band.hasMany(models.Song);
// };

// models.Song.associate = () => {
models.Song.belongsTo(models.Band, {
  onDelete: "CASCADE",
  foreignKey: {
    allowNull: false
  }
});
// };

console.log(models.Song);

// Object.keys(models).forEach(key => {
//   if ("associate" in models[key]) {
//     models[key].associate(models);
//   }
// });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
