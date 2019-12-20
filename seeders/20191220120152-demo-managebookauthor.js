'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "status": false,
      "AuthorId": 5,
      "BookInfoId": 16
    }, {
      "status": false,
      "AuthorId": 5,
      "BookInfoId": 5
    }, {
      "status": false,
      "AuthorId": 4,
      "BookInfoId": 19
    }, {
      "status": false,
      "AuthorId": 20,
      "BookInfoId": 11
    }, {
      "status": false,
      "AuthorId": 9,
      "BookInfoId": 2
    }, {
      "status": false,
      "AuthorId": 3,
      "BookInfoId": 11
    }, {
      "status": true,
      "AuthorId": 2,
      "BookInfoId": 9
    }, {
      "status": false,
      "AuthorId": 8,
      "BookInfoId": 15
    }, {
      "status": true,
      "AuthorId": 4,
      "BookInfoId": 10
    }, {
      "status": false,
      "AuthorId": 8,
      "BookInfoId": 5
    }, {
      "status": false,
      "AuthorId": 3,
      "BookInfoId": 16
    }, {
      "status": true,
      "AuthorId": 20,
      "BookInfoId": 9
    }, {
      "status": false,
      "AuthorId": 13,
      "BookInfoId": 18
    }, {
      "status": true,
      "AuthorId": 10,
      "BookInfoId": 2
    }, {
      "status": true,
      "AuthorId": 12,
      "BookInfoId": 8
    }];
    
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('ManageBookAuthors', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('ManageBookAuthors', null, {});
    
  }
};
