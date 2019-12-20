'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManageBookCategory = sequelize.define('ManageBookCategory', {
    status: DataTypes.BOOLEAN
  }, {});
  ManageBookCategory.associate = function(models) {
    // associations can be defined here
  };
  return ManageBookCategory;
};