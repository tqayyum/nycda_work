'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    src: DataTypes.STRING,
    tag_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};