'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "username": "admin@gmail.com",
      "password": "$2a$10$k2jFLww0B44C4WhEP0sC9OyOG0ZQietD91.v0yFI28eEwMP/.idAa",
      "fullname": "Admin",
      "phone": "774-996-9938",
      "avatarPath": "http://dummyimage.com/110x244.jpg/dddddd/000000",
      "isAdmin": true
    }, {
      "username": "sburel9@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn Burel",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    }];

    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    
    return queryInterface.bulkInsert('Users', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Users', null, {});
    
  }
};
