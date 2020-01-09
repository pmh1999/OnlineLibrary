'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "username": "admin@gmail.com",
      "password": "$2a$10$k2jFLww0B44C4WhEP0sC9OyOG0ZQietD91.v0yFI28eEwMP/.idAa",
      "fullname": "Admin",
      "phone": "774-996-9938",
      "avatarPath": "/img/avt3.png",
      "isAdmin": true
    }, {
      "username": "test@gmail.com",
      "password": "$2a$10$lrTkF9fzwXV.gtgboQg3BeIk7TSBfyRTDXTUT9ZdI2OEldXplQ7qe",
      "fullname": "Test Account",
      "phone": "789-159-0941",
      "avatarPath": "/img/avt1.png",
      "isAdmin": false
    },{
      "username": "abc@gmail.com",
      "password": "$2a$10$bzvWf88D5aNbWjJX1teXnOwVtqI6BWU/fH/C9EjcbUAOfDTwTjE4C",
      "fullname": "ABC Acc",
      "phone": "789-159-0941",
      "avatarPath": "/img/avt2.jpg",
      "isAdmin": false
    },{
      "username": "sburel1@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 2",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel2@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 3",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel3@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 4",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel4@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 5",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel5@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 6",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel6@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 7",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel7@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 8",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": false
    },{
      "username": "sburel8@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn 9",
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
