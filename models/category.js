'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    imagePath: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.BookInfo, { through: models.ManageBookCategory });
  };
  return Category;
};