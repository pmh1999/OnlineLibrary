'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookInfo = sequelize.define('BookInfo', {
    isbn: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    publishYear: DataTypes.DECIMAL,
    language: DataTypes.STRING,
    haveCD: DataTypes.BOOLEAN,
    amount: DataTypes.DECIMAL,
    imagePath: DataTypes.TEXT,
    thumbnailPath: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  BookInfo.associate = function(models) {
    // associations can be defined here
    BookInfo.hasMany(models.Book);

    BookInfo.belongsToMany(models.Category, { through: models.ManageBookCategory });
    BookInfo.belongsToMany(models.Author, { through: models.ManageBookAuthor });

    BookInfo.hasMany(models.Borrow);
    BookInfo.hasMany(models.Request);
  };
  return BookInfo;
};