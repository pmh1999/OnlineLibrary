'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define('Borrow', {
    borrowDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  }, {});
  Borrow.associate = function(models) {
    // associations can be defined here
  };
  return Borrow;
};