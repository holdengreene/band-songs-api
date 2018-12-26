module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define("song", {
    title: DataTypes.STRING,
    chords: DataTypes.ARRAY(DataTypes.TEXT),
    uploadUrls: DataTypes.ARRAY(DataTypes.TEXT),
    description: DataTypes.STRING(2000)
  });

  Song.associate = models => {
    Song.belongsTo(models.Band, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Song;
};
