module.exports = (sequalize, DataTypes) => {
  const Band = sequalize.define("band", {
    band_name: DataTypes.STRING
  });

  Band.associate = models => {
    Band.hasMany(models.Song);
  };

  return Band;
};
