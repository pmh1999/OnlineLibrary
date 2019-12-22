'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "username": "test@gmail.com",
      "password": "123",
      "fullname": "Aldridge Worts",
      "phone": "774-996-9938",
      "avatarPath": "http://dummyimage.com/110x244.jpg/dddddd/000000",
      "isAdmin": false
    }, {
      "username": "fzannuto1@hugedomains.com",
      "password": "WISkDmNoISL",
      "fullname": "Farra Zannuto",
      "phone": "515-324-3274",
      "avatarPath": "http://dummyimage.com/122x170.jpg/cc0000/ffffff",
      "isAdmin": false
    }, {
      "username": "ddee2@i2i.jp",
      "password": "ADg4Yeb0",
      "fullname": "Dee dee Kunzel",
      "phone": "468-776-3255",
      "avatarPath": "http://dummyimage.com/190x208.bmp/dddddd/000000",
      "isAdmin": false
    }, {
      "username": "nghent3@com.com",
      "password": "bBzzqcA",
      "fullname": "Norry Ghent",
      "phone": "804-480-9598",
      "avatarPath": "http://dummyimage.com/151x236.png/5fa2dd/ffffff",
      "isAdmin": true
    }, {
      "username": "dlohan4@printfriendly.com",
      "password": "3FxaDUSPSs",
      "fullname": "Derby Lohan",
      "phone": "702-783-7760",
      "avatarPath": "http://dummyimage.com/184x220.bmp/cc0000/ffffff",
      "isAdmin": true
    }, {
      "username": "lflewett5@simplemachines.org",
      "password": "dNfnUV1",
      "fullname": "Levin Flewett",
      "phone": "570-642-5330",
      "avatarPath": "http://dummyimage.com/143x127.png/5fa2dd/ffffff",
      "isAdmin": false
    }, {
      "username": "ctappor6@stanford.edu",
      "password": "XPqZoXrP2",
      "fullname": "Claudette Tappor",
      "phone": "785-921-5532",
      "avatarPath": "http://dummyimage.com/199x127.jpg/cc0000/ffffff",
      "isAdmin": true
    }, {
      "username": "praycroft7@trellian.com",
      "password": "ymSuzAJ",
      "fullname": "Phylys Raycroft",
      "phone": "670-456-8061",
      "avatarPath": "http://dummyimage.com/117x112.png/ff4444/ffffff",
      "isAdmin": true
    }, {
      "username": "crawkesby8@zdnet.com",
      "password": "ra5SMDzFHI7",
      "fullname": "Cullan Rawkesby",
      "phone": "684-953-6799",
      "avatarPath": "http://dummyimage.com/212x171.png/dddddd/000000",
      "isAdmin": false
    }, {
      "username": "sburel9@sciencedaily.com",
      "password": "VkY0aOVsR",
      "fullname": "Shawn Burel",
      "phone": "789-159-0941",
      "avatarPath": "http://dummyimage.com/136x204.jpg/dddddd/000000",
      "isAdmin": true
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