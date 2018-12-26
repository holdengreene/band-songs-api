console.log("band endpoint");

module.exports = (sequelize, DataTypes) => {
  const Band = sequelize.define("band", {
    bandName: DataTypes.STRING
  });

  Band.associate = models => {
    Band.hasMany(models.Song);
  };

  return Band;
};
