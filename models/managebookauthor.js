'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManageBookAuthor = sequelize.define('ManageBookAuthor', {
    status: DataTypes.BOOLEAN
  }, {});
  ManageBookAuthor.associate = function(models) {
    // associations can be defined here
  };
  return ManageBookAuthor;
};