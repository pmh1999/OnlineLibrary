'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data =[{
      "name": "Washington Eales"
    }, {
      "name": "Blane Ardern"
    }, {
      "name": "Avery Dadley"
    }, {
      "name": "Lynnet Chrstine"
    }, {
      "name": "Angie Greenrod"
    }, {
      "name": "Nelia Shepstone"
    }, {
      "name": "Dwain Dorwood"
    }, {
      "name": "Rosemary Corter"
    }, {
      "name": "Chevy Quilligan"
    }, {
      "name": "Caitlin Lismer"
    }, {
      "name": "Arliene Vynall"
    }, {
      "name": "Iormina Petrolli"
    }, {
      "name": "Steffi Brookbank"
    }, {
      "name": "Jasper Semper"
    }, {
      "name": "Toiboid Lisle"
    }, {
      "name": "Nevil Kendell"
    }, {
      "name": "Burl Raulin"
    }, {
      "name": "Dare Ivakhno"
    }, {
      "name": "Wendall Ingray"
    }, {
      "name": "Fan Barlas"
    }];

    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    
    return queryInterface.bulkInsert('Authors', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
