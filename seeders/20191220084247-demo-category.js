'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{name: "Science", imagePath: "/public/img/10.jpg"},
    {name: "Lesson Plan", imagePath: "/public/img/7.jpg"},
    {name: "Thesis", imagePath: "/public/img/6.jpg"},
    {name: "Programing Language", imagePath: "/public/img/4.jpg"},
    {name: "Science fiction", imagePath: "/public/img/1.jpg"},
    {name: "Algorithm", imagePath: "/public/img/2.jpg"}];
    
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Categories', data, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Categories', null, {});
    
  }
};
