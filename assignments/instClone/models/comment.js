'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    comment_body: DataTypes.STRING,
    image_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};