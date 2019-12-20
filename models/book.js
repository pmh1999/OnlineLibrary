'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isBorrowed: DataTypes.BOOLEAN
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.BookInfo);
  };
  return Book;
};