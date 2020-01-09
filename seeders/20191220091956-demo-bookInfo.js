'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "isbn": "800477902-6",
      "title": "Percy Jackson: Sea of Monsters",
      "category": "Science",
      "author": "Washington Eales",
      "publisher": "Wolff Group",
      "publishYear": 1993,
      "language": "Vietnamese",
      "haveCD": true,
      "amount": 4,
      "imagePath": "/img/1.jpg",
      "thumbnailPath": "/img/1.jpg",
      "description": "Cypress Pharmaceutical, Inc."
    }, {
      "isbn": "735498829-4",
      "title": "Name of the Rose, The (Name der Rose, Der)",
      "category": "Science",
      "author": "Blane Ardern",
      "publisher": "Muller, Olson and Ruecker",
      "publishYear": 2007,
      "language": "Vietnamese",
      "haveCD": false,
      "amount": 2,
      "imagePath": "/img/2.jpg",
      "thumbnailPath": "/img/2.jpg",
      "description": "Mondelez Global LLC"
    }, {
      "isbn": "608382949-6",
      "title": "Bizarre",
      "category": "Programming",
      "author": "Elsinore Chartre",
      "publisher": "Hayes Group",
      "publishYear": 1993,
      "language": "Czech",
      "haveCD": true,
      "amount": 5,
      "imagePath": "/img/3.jpg",
      "thumbnailPath": "/img/3.jpg",
      "description": "Endo Pharmaceuticals Inc."
    }, {
      "isbn": "250028625-8",
      "title": "Traffic (Trafic)",
      "category": "Programming",
      "author": "Washington Eales",
      "publisher": "Wisozk, Yost and Reichert",
      "publishYear": 1970,
      "language": "Tamil",
      "haveCD": false,
      "amount": 5,
      "imagePath": "/img/4.jpg",
      "thumbnailPath": "/img/4.jpg",
      "description": "Coson Co., Ltd."
    }, {
      "isbn": "774790254-9",
      "title": "Innocent Lies",
      "category": "Thesis",
      "author": "Sallee Bardwell",
      "publisher": "Bogisich, Emard and Koch",
      "publishYear": 1991,
      "language": "Vietnamese",
      "haveCD": true,
      "amount": 5,
      "imagePath": "/img/5.jpg",
      "thumbnailPath": "/img/5.jpg",
      "description": "Owen Biosciences, Inc."
    }, {
      "isbn": "666109040-5",
      "title": "A Merry Friggin' Christmas",
      "category": "Thesis",
      "author": "Blane Ardern",
      "publisher": "Leuschke-Schaden",
      "publishYear": 1996,
      "language": "Croatian",
      "haveCD": false,
      "amount": 2,
      "imagePath": "/img/6.jpg",
      "thumbnailPath": "/img/6.jpg",
      "description": "Heritage Pharmaceuticals Inc."
    }, {
      "isbn": "738943207-1",
      "title": "To the Limit (Am Limit)",
      "category": "Programming",
      "author": "Natalya Abbiss",
      "publisher": "Connelly-Dare",
      "publishYear": 2005,
      "language": "Guaraní",
      "haveCD": false,
      "amount": 3,
      "imagePath": "/img/7.jpg",
      "thumbnailPath": "/img/7.jpg",
      "description": "E. Fougera & Co. a division of Fougera Pharmaceuticals Inc."
    }, {
      "isbn": "152944924-3",
      "title": "Vicky Donor",
      "category": "Algorithm",
      "author": "Katina Bonass",
      "publisher": "Keebler Inc",
      "publishYear": 1997,
      "language": "Georgian",
      "haveCD": true,
      "amount": 3,
      "imagePath": "/img/8.jpg",
      "thumbnailPath": "/img/8.jpg",
      "description": "Apotheca Company"
    }, {
      "isbn": "123315419-2",
      "title": "Pushing Tin",
      "category": "Science",
      "author": "Danice Lacaze",
      "publisher": "Boyer-Casper",
      "publishYear": 2002,
      "language": "Vietnamese",
      "haveCD": true,
      "amount": 2,
      "imagePath": "/img/9.jpg",
      "thumbnailPath": "/img/9.jpg",
      "description": "Health Mart"
    }, {
      "isbn": "949976386-4",
      "title": "Vizontele",
      "category": "Algorithm",
      "author": "Caryl Mattsson",
      "publisher": "Wisozk, Terry and Kub",
      "publishYear": 2008,
      "language": "English",
      "haveCD": true,
      "amount": 3,
      "imagePath": "/img/10.jpg",
      "thumbnailPath": "/img/10.jpg",
      "description": "Nelco Laboratories, Inc."
    }, {
      "isbn": "227103015-3",
      "title": "Brenda Starr",
      "category": "Science",
      "author": "Poul Haysom",
      "publisher": "Sawayn, Hegmann and Harvey",
      "publishYear": 2007,
      "language": "English",
      "haveCD": true,
      "amount": 4,
      "imagePath": "/img/12.jpeg",
      "thumbnailPath": "/img/12.jpeg",
      "description": "Antigen Laboratories, Inc."
    }, {
      "isbn": "259091611-6",
      "title": "River's Edge",
      "category": "Science fiction",
      "author": "Saxe Mouser",
      "publisher": "Kertzmann LLC",
      "publishYear": 2001,
      "language": "Tok Pisin",
      "haveCD": true,
      "amount": 3,
      "imagePath": "/img/13.jpg",
      "thumbnailPath": "/img/13.jpg",
      "description": "NARS Cosmetics"
    }, {
      "isbn": "395111759-1",
      "title": "Lo",
      "category": "Lesson plan",
      "author": "Heda Bills",
      "publisher": "Vandervort Group",
      "publishYear": 1996,
      "language": "Vietnamese",
      "haveCD": true,
      "amount": 3,
      "imagePath": "/img/14.jpg",
      "thumbnailPath": "/img/14.jpg",
      "description": "Kareway Product, Inc."
    }, {
      "isbn": "613878569-X",
      "title": "Pirate, The",
      "category": "Algorithm",
      "author": "Dasya Borland",
      "publisher": "Konopelski-Hauck",
      "publishYear": 2006,
      "language": "Dhivehi",
      "haveCD": true,
      "amount": 4,
      "imagePath": "/img/14.jpg",
      "thumbnailPath": "/img/14.jpg",
      "description": "Nash Finch"
    }, {
      "isbn": "598026315-2",
      "title": "Nothing But Trouble",
      "category": "Algorithm",
      "author": "Maury Kinman",
      "publisher": "Lindgren Group",
      "publishYear": 2005,
      "language": "Vietnamese",
      "haveCD": false,
      "amount": 4,
      "imagePath": "/img/15.jpg",
      "thumbnailPath": "/img/15.jpg",
      "description": "Antigen Laboratories, Inc."
    }, {
      "isbn": "018065998-7",
      "title": "File on Thelma Jordan, The",
      "category": "Science",
      "author": "Gabi Tuckerman",
      "publisher": "Dickens-Leuschke",
      "publishYear": 2011,
      "language": "English",
      "haveCD": false,
      "amount": 5,
      "imagePath": "/img/16.jpg",
      "thumbnailPath": "/img/16.jpg",
      "description": "Harris Pharmaceutical, Inc."
    }, {
      "isbn": "481902701-8",
      "title": "Skin, Skin (Käpy selän alla)",
      "category": "Science",
      "author": "Carney Van Leeuwen",
      "publisher": "Kirlin, Nicolas and Hettinger",
      "publishYear": 2008,
      "language": "English",
      "haveCD": false,
      "amount": 1,
      "imagePath": "/img/17.jpg",
      "thumbnailPath": "/img/17.jpg",
      "description": "Hospira, Inc."
    }, {
      "isbn": "791872948-X",
      "title": "貞子3D",
      "category": "Algorithm",
      "author": "Cosimo Hathwood",
      "publisher": "Upton-Abbott",
      "publishYear": 1993,
      "language": "English",
      "haveCD": false,
      "amount": 1,
      "imagePath": "/img/18.jpg",
      "thumbnailPath": "/img/18.jpg",
      "description": "Ventura Corporation Ltd."
    }, {
      "isbn": "731900293-0",
      "title": "Holiday",
      "category": "Science",
      "author": "Garvey Nazer",
      "publisher": "O'Hara and Sons",
      "publishYear": 1998,
      "language": "English",
      "haveCD": false,
      "amount": 4,
      "imagePath": "/img/19.jpg",
      "thumbnailPath": "/img/19.jpg",
      "description": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC"
    }, {
      "isbn": "162861201-0",
      "title": "Friday the 13th Part IV: The Final Chapter",
      "category": "Science",
      "author": "Gunner Starsmeare",
      "publisher": "Pagac LLC",
      "publishYear": 2011,
      "language": "Armenian",
      "haveCD": false,
      "amount": 3,
      "imagePath": "/img/20.jpg",
      "thumbnailPath": "/img/20.jpg",
      "description": "Physicians Total Care, Inc."
    }];

    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    
    return queryInterface.bulkInsert('BookInfos', data, {});
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('BookInfos', null, {});
    
  }
};
