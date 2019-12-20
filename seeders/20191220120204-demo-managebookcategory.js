'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "status": false,
      "BookInfoId": 8,
      "CategoryId": 2
    }, {
      "status": false,
      "BookInfoId": 6,
      "CategoryId": 2
    }, {
      "status": true,
      "BookInfoId": 9,
      "CategoryId": 3
    }, {
      "status": true,
      "BookInfoId": 9,
      "CategoryId": 1
    }, {
      "status": false,
      "BookInfoId": 3,
      "CategoryId": 2
    }, {
      "status": true,
      "BookInfoId": 3,
      "CategoryId": 6
    }, {
      "status": true,
      "BookInfoId": 19,
      "CategoryId": 3
    }, {
      "status": true,
      "BookInfoId": 6,
      "CategoryId": 5
    }, {
      "status": true,
      "BookInfoId": 12,
      "CategoryId": 5
    }, {
      "status": true,
      "BookInfoId": 20,
      "CategoryId": 1
    }, {
      "status": true,
      "BookInfoId": 18,
      "CategoryId": 4
    }, {
      "status": true,
      "BookInfoId": 10,
      "CategoryId": 5
    }, {
      "status": false,
      "BookInfoId": 11,
      "CategoryId": 3
    }, {
      "status": false,
      "BookInfoId": 9,
      "CategoryId": 4
    }, {
      "status": true,
      "BookInfoId": 13,
      "CategoryId": 6
    }];
    
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('ManageBookCategories', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('ManageBookCategories', null, {});
    
  }
};
