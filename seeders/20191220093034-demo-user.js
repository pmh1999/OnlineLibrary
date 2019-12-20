'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "email": "aworts0@qq.com",
      "password": "s4pUacfptwkL",
      "name": "Aldridge Worts",
      "phone": "774-996-9938",
      "avatarPath": "http://dummyimage.com/110x244.jpg/dddddd/000000",
      "isAdmin": false
    }, {
      "email": "fzannuto1@hugedomains.com",
      "password": "WISkDmNoISL",
      "name": "Farra Zannuto",
      "phone": "515-324-3274",
      "avatarPath": "http://dummyimage.com/122x170.jpg/cc0000/ffffff",
      "isAdmin": false
    }, {
      "email": "ddee2@i2i.jp",
      "password": "ADg4Yeb0",
      "name": "Dee dee Kunzel",
      "phone": "468-776-3255",
      "avatarPath": "http://dummyimage.com/190x208.bmp/dddddd/000000",
      "isAdmin": false
    }, {
      "email": "nghent3@com.com",
      "password": "bBzzqcA",
      "name": "Norry Ghent",
      "phone": "804-480-9598",
      "avatarPath": "http://dummyimage.com/151x236.png/5fa2dd/ffffff",
      "isAdmin": true
    }, {
      "email": "dlohan4@printfriendly.com",
      "password": "3FxaDUSPSs",
      "name": "Derby Lohan",
      "phone": "702-783-7760",
      "avatarPath": "http://dummyimage.com/184x220.bmp/cc0000/ffffff",
      "isAdmin": true
    }, {
      "email": "lflewett5@simplemachines.org",
      "password": "dNfnUV1",
      "name": "Levin Flewett",
      "phone": "570-642-5330",
      "avatarPath": "http://dummyimage.com/143x127.png/5fa2dd/ffffff",
      "isAdmin": false
    }, {
      "email": "ctappor6@stanford.edu",
      "password": "XPqZoXrP2",
      "name": "Claudette Tappor",
      "phone": "785-921-5532",
      "avatarPath": "http://dummyimage.com/199x127.jpg/cc0000/ffffff",
      "isAdmin": true
    }, {
      "email": "praycroft7@trellian.com",
      "password": "ymSuzAJ",
      "name": "Phylys Raycroft",
      "phone": "670-456-8061",
      "avatarPath": "http://dummyimage.com/117x112.png/ff4444/ffffff",
      "isAdmin": true
    }, {
      "email": "crawkesby8@zdnet.com",
      "password": "ra5SMDzFHI7",
      "name": "Cullan Rawkesby",
      "phone": "684-953-6799",
      "avatarPath": "http://dummyimage.com/212x171.png/dddddd/000000",
      "isAdmin": false
    }, {
      "email": "sburel9@sciencedaily.com",
      "password": "VkY0aOVsR",
      "name": "Shawn Burel",
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
