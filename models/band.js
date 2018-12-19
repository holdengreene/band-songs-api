module.exports = (sequalize, DataTypes) => {
  const Band = sequalize.define("band", {
    bandName: DataTypes.STRING
  });

  Band.associate = models => {
    Band.hasMany(models.Song);
  };

  return Band;
};
