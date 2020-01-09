'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "appointmentDate": "11/06/2019",
      "isAccepted": true,
      "type": "Borrow",
      "BookInfoId": 15,
      "UserId": 2
    }, {
      "appointmentDate": "08/02/2019",
      "isAccepted": false,
      "type": "Borrow",
      "BookInfoId": 8,
      "UserId": 2
    }, {
      "appointmentDate": "07/11/2019",
      "isAccepted": true,
      "type": "Extend",
      "BookInfoId": 20,
      "UserId": 6
    }, {
      "appointmentDate": "04/08/2019",
      "isAccepted": false,
      "type": "Extend",
      "BookInfoId": 10,
      "UserId": 10
    }, {
      "appointmentDate": "02/04/2019",
      "isAccepted": true,
      "type": "Borrow",
      "BookInfoId": 14,
      "UserId": 8
    }, {
      "appointmentDate": "11/04/2019",
      "isAccepted": true,
      "type": "Borrow",
      "BookInfoId": 2,
      "UserId": 9
    }, {
      "appointmentDate": "03/02/2019",
      "isAccepted": false,
      "type": "Extend",
      "BookInfoId": 6,
      "UserId": 1
    }, {
      "appointmentDate": "08/11/2019",
      "isAccepted": true,
      "type": "Extend",
      "BookInfoId": 11,
      "UserId": 10
    }, {
      "appointmentDate": "08/01/2019",
      "isAccepted": false,
      "type": "Return",
      "BookInfoId": 14,
      "UserId": 3
    }, {
      "appointmentDate": "07/01/2019",
      "isAccepted": true,
      "type": "Borrow",
      "BookInfoId": 10,
      "UserId": 1
    }, {
      "appointmentDate": "07/03/2019",
      "isAccepted": false,
      "type": "Extend",
      "BookInfoId": 4,
      "UserId": 8
    }, {
      "appointmentDate": "04/07/2019",
      "isAccepted": false,
      "type": "Extend",
      "BookInfoId": 3,
      "UserId": 10
    }, {
      "appointmentDate": "08/09/2019",
      "isAccepted": false,
      "type": "Return",
      "BookInfoId": 2,
      "UserId": 6
    }, {
      "appointmentDate": "09/11/2019",
      "isAccepted": true,
      "type": "Extend",
      "BookInfoId": 19,
      "UserId": 7
    }, {
      "appointmentDate": "09/07/2019",
      "isAccepted": false,
      "type": "Extend",
      "BookInfoId": 6,
      "UserId": 10
    }, {
      "appointmentDate": "02/04/2019",
      "isAccepted": true,
      "type": "Return",
      "BookInfoId": 18,
      "UserId": 9
    }, {
      "appointmentDate": "07/10/2019",
      "isAccepted": false,
      "type": "Extend",
      "BookInfoId": 9,
      "UserId": 3
    }, {
      "appointmentDate": "03/12/2019",
      "isAccepted": true,
      "type": "Return",
      "BookInfoId": 4,
      "UserId": 5
    }, {
      "appointmentDate": "02/05/2019",
      "isAccepted": true,
      "type": "Borrow",
      "BookInfoId": 5,
      "UserId": 5
    }, {
      "appointmentDate": "03/01/2019",
      "isAccepted": false,
      "type": "Borrow",
      "BookInfoId": 6,
      "UserId": 6
    }];
    
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Requests', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Requests', null, {});
    
  }
};
