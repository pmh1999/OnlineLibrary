'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isbn: DataTypes.STRING,
    title: DataTypes.STRING,
    publisher: DataTypes.STRING,
    publishYear: DataTypes.DECIMAL,
    language: DataTypes.STRING,
    haveCD: DataTypes.BOOLEAN,
    amount: DataTypes.DECIMAL,
    imagePath: DataTypes.TEXT,
    thumbnailPath: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};