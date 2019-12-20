'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "isBorrowed": true,
      "BookInfoId": 2
    }, {
      "isBorrowed": true,
      "BookInfoId": 18
    }, {
      "isBorrowed": false,
      "BookInfoId": 13
    }, {
      "isBorrowed": false,
      "BookInfoId": 9
    }, {
      "isBorrowed": true,
      "BookInfoId": 17
    }, {
      "isBorrowed": false,
      "BookInfoId": 20
    }, {
      "isBorrowed": true,
      "BookInfoId": 14
    }, {
      "isBorrowed": true,
      "BookInfoId": 15
    }, {
      "isBorrowed": true,
      "BookInfoId": 10
    }, {
      "isBorrowed": false,
      "BookInfoId": 7
    }, {
      "isBorrowed": true,
      "BookInfoId": 18
    }, {
      "isBorrowed": true,
      "BookInfoId": 6
    }, {
      "isBorrowed": false,
      "BookInfoId": 16
    }, {
      "isBorrowed": true,
      "BookInfoId": 12
    }, {
      "isBorrowed": true,
      "BookInfoId": 6
    }, {
      "isBorrowed": true,
      "BookInfoId": 19
    }, {
      "isBorrowed": true,
      "BookInfoId": 15
    }, {
      "isBorrowed": true,
      "BookInfoId": 12
    }, {
      "isBorrowed": false,
      "BookInfoId": 4
    }, {
      "isBorrowed": false,
      "BookInfoId": 4
    }, {
      "isBorrowed": true,
      "BookInfoId": 19
    }, {
      "isBorrowed": true,
      "BookInfoId": 20
    }, {
      "isBorrowed": true,
      "BookInfoId": 3
    }, {
      "isBorrowed": true,
      "BookInfoId": 15
    }, {
      "isBorrowed": false,
      "BookInfoId": 20
    }, {
      "isBorrowed": false,
      "BookInfoId": 14
    }, {
      "isBorrowed": false,
      "BookInfoId": 1
    }, {
      "isBorrowed": true,
      "BookInfoId": 3
    }, {
      "isBorrowed": true,
      "BookInfoId": 18
    }, {
      "isBorrowed": false,
      "BookInfoId": 12
    }, {
      "isBorrowed": false,
      "BookInfoId": 12
    }, {
      "isBorrowed": true,
      "BookInfoId": 8
    }, {
      "isBorrowed": false,
      "BookInfoId": 5
    }, {
      "isBorrowed": true,
      "BookInfoId": 19
    }, {
      "isBorrowed": true,
      "BookInfoId": 3
    }, {
      "isBorrowed": false,
      "BookInfoId": 8
    }, {
      "isBorrowed": true,
      "BookInfoId": 15
    }, {
      "isBorrowed": false,
      "BookInfoId": 13
    }, {
      "isBorrowed": false,
      "BookInfoId": 10
    }, {
      "isBorrowed": false,
      "BookInfoId": 12
    }, {
      "isBorrowed": false,
      "BookInfoId": 9
    }, {
      "isBorrowed": false,
      "BookInfoId": 15
    }, {
      "isBorrowed": false,
      "BookInfoId": 2
    }, {
      "isBorrowed": true,
      "BookInfoId": 10
    }, {
      "isBorrowed": true,
      "BookInfoId": 12
    }, {
      "isBorrowed": false,
      "BookInfoId": 1
    }, {
      "isBorrowed": true,
      "BookInfoId": 19
    }, {
      "isBorrowed": false,
      "BookInfoId": 8
    }, {
      "isBorrowed": true,
      "BookInfoId": 11
    }, {
      "isBorrowed": false,
      "BookInfoId": 9
    }];
    
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Books', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Books', null, {});
    
  }
};
