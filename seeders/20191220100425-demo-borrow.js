'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "borrowDate": "01/12/2018",
      "dueDate": "07/12/2018",
      "returnDate": "03/12/2019",
      "BookInfoId": 18,
      "UserId": 3
    }, {
      "borrowDate": "12/05/2019",
      "dueDate": "08/06/2019",
      "returnDate": "01/11/2019",
      "BookInfoId": 15,
      "UserId": 2
    }, {
      "borrowDate": "02/05/2019",
      "dueDate": "01/08/2019",
      "returnDate": "08/08/2019",
      "BookInfoId": 11,
      "UserId": 4
    }, {
      "borrowDate": "06/11/2019",
      "dueDate": "04/02/2019",
      "returnDate": "06/11/2019",
      "BookInfoId": 4,
      "UserId": 1
    }, {
      "borrowDate": "09/08/2019",
      "dueDate": "10/08/2019",
      "returnDate": "02/03/2019",
      "BookInfoId": 2,
      "UserId": 5
    }, {
      "borrowDate": "09/04/2019",
      "dueDate": "06/06/2019",
      "returnDate": "10/07/2019",
      "BookInfoId": 11,
      "UserId": 3
    }, {
      "borrowDate": "03/06/2019",
      "dueDate": "03/11/2019",
      "returnDate": "01/11/2019",
      "BookInfoId": 10,
      "UserId": 6
    }, {
      "borrowDate": "07/06/2019",
      "dueDate": "01/06/2019",
      "returnDate": "07/05/2019",
      "BookInfoId": 7,
      "UserId": 9
    }, {
      "borrowDate": "05/10/2019",
      "dueDate": "03/07/2019",
      "returnDate": "06/10/2019",
      "BookInfoId": 12,
      "UserId": 5
    }, {
      "borrowDate": "07/09/2019",
      "dueDate": "08/12/2018",
      "returnDate": "07/07/2019",
      "BookInfoId": 1,
      "UserId": 5
    }, {
      "borrowDate": "01/01/2019",
      "dueDate": "04/06/2019",
      "returnDate": "10/12/2019",
      "BookInfoId": 11,
      "UserId": 9
    }, {
      "borrowDate": "06/06/2019",
      "dueDate": "04/03/2019",
      "returnDate": "04/10/2019",
      "BookInfoId": 8,
      "UserId": 7
    }, {
      "borrowDate": "06/01/2019",
      "dueDate": "04/05/2019",
      "returnDate": "01/03/2019",
      "BookInfoId": 20,
      "UserId": 1
    }, {
      "borrowDate": "07/02/2019",
      "dueDate": "04/07/2019",
      "returnDate": "05/03/2019",
      "BookInfoId": 20,
      "UserId": 4
    }, {
      "borrowDate": "12/05/2019",
      "dueDate": "10/10/2019",
      "returnDate": "06/09/2019",
      "BookInfoId": 17,
      "UserId": 9
    }, {
      "borrowDate": "11/09/2019",
      "dueDate": "08/07/2019",
      "returnDate": "04/11/2019",
      "BookInfoId": 17,
      "UserId": 8
    }, {
      "borrowDate": "09/11/2019",
      "dueDate": "04/10/2019",
      "returnDate": "04/05/2019",
      "BookInfoId": 1,
      "UserId": 9
    }, {
      "borrowDate": "12/09/2019",
      "dueDate": "11/02/2019",
      "returnDate": "07/06/2019",
      "BookInfoId": 7,
      "UserId": 6
    }, {
      "borrowDate": "01/07/2019",
      "dueDate": "10/03/2019",
      "returnDate": "06/07/2019",
      "BookInfoId": 9,
      "UserId": 9
    }, {
      "borrowDate": "06/02/2019",
      "dueDate": "08/09/2019",
      "returnDate": "09/05/2019",
      "BookInfoId": 19,
      "UserId": 10
    }];
    
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Borrows', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Borrows', null, {});
    
  }
};
