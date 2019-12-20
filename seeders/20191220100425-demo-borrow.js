'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "borrowDate": "30/12/2018",
      "dueDate": "27/12/2018",
      "returnDate": "03/12/2019",
      "BookInfoId": 18,
      "UserId": 3
    }, {
      "borrowDate": "19/05/2019",
      "dueDate": "28/06/2019",
      "returnDate": "01/11/2019",
      "BookInfoId": 15,
      "UserId": 2
    }, {
      "borrowDate": "29/05/2019",
      "dueDate": "31/08/2019",
      "returnDate": "28/08/2019",
      "BookInfoId": 11,
      "UserId": 4
    }, {
      "borrowDate": "26/11/2019",
      "dueDate": "24/02/2019",
      "returnDate": "06/11/2019",
      "BookInfoId": 4,
      "UserId": 1
    }, {
      "borrowDate": "19/08/2019",
      "dueDate": "10/08/2019",
      "returnDate": "22/03/2019",
      "BookInfoId": 2,
      "UserId": 5
    }, {
      "borrowDate": "19/04/2019",
      "dueDate": "26/06/2019",
      "returnDate": "10/07/2019",
      "BookInfoId": 11,
      "UserId": 3
    }, {
      "borrowDate": "23/06/2019",
      "dueDate": "03/11/2019",
      "returnDate": "21/11/2019",
      "BookInfoId": 10,
      "UserId": 6
    }, {
      "borrowDate": "17/06/2019",
      "dueDate": "21/06/2019",
      "returnDate": "17/05/2019",
      "BookInfoId": 7,
      "UserId": 9
    }, {
      "borrowDate": "25/10/2019",
      "dueDate": "30/07/2019",
      "returnDate": "06/10/2019",
      "BookInfoId": 12,
      "UserId": 5
    }, {
      "borrowDate": "17/09/2019",
      "dueDate": "28/12/2018",
      "returnDate": "17/07/2019",
      "BookInfoId": 1,
      "UserId": 5
    }, {
      "borrowDate": "21/01/2019",
      "dueDate": "24/06/2019",
      "returnDate": "10/12/2019",
      "BookInfoId": 11,
      "UserId": 9
    }, {
      "borrowDate": "06/06/2019",
      "dueDate": "04/03/2019",
      "returnDate": "14/10/2019",
      "BookInfoId": 8,
      "UserId": 7
    }, {
      "borrowDate": "16/01/2019",
      "dueDate": "14/05/2019",
      "returnDate": "21/03/2019",
      "BookInfoId": 20,
      "UserId": 1
    }, {
      "borrowDate": "07/02/2019",
      "dueDate": "04/07/2019",
      "returnDate": "15/03/2019",
      "BookInfoId": 20,
      "UserId": 4
    }, {
      "borrowDate": "12/05/2019",
      "dueDate": "20/10/2019",
      "returnDate": "16/09/2019",
      "BookInfoId": 17,
      "UserId": 9
    }, {
      "borrowDate": "11/09/2019",
      "dueDate": "28/07/2019",
      "returnDate": "24/11/2019",
      "BookInfoId": 17,
      "UserId": 8
    }, {
      "borrowDate": "29/11/2019",
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
      "borrowDate": "31/07/2019",
      "dueDate": "20/03/2019",
      "returnDate": "26/07/2019",
      "BookInfoId": 9,
      "UserId": 9
    }, {
      "borrowDate": "06/02/2019",
      "dueDate": "28/09/2019",
      "returnDate": "19/05/2019",
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
