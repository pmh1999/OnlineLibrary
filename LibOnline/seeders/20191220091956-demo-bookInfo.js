'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "isbn": "785809316-9",
      "title": "Beautiful Darling",
      "publisher": "Frami-Kovacek",
      "publishYear": 1966,
      "language": "Sotho",
      "haveCD": true,
      "amount": "3",
      "imagePath": "http://dummyimage.com/217x227.bmp/ff4444/ffffff",
      "thumbnailPath": "http://dummyimage.com/119x181.png/cc0000/ffffff"
    }, {
      "isbn": "650974016-8",
      "title": "Sacrificio: Who Betrayed Che Guevara",
      "publisher": "Weber-Bayer",
      "publishYear": 2012,
      "language": "Korean",
      "haveCD": true,
      "amount": "1",
      "imagePath": "http://dummyimage.com/230x109.png/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/223x179.png/5fa2dd/ffffff"
    }, {
      "isbn": "271764758-9",
      "title": "House Party: Tonight's the Night",
      "publisher": "Huel-Cole",
      "publishYear": 1988,
      "language": "Fijian",
      "haveCD": true,
      "amount": "5",
      "imagePath": "http://dummyimage.com/223x154.png/5fa2dd/ffffff",
      "thumbnailPath": "http://dummyimage.com/168x200.jpg/ff4444/ffffff"
    }, {
      "isbn": "182400712-4",
      "title": "Wes Craven's New Nightmare (Nightmare on Elm Street Part 7: Freddy's Finale, A)",
      "publisher": "King-Treutel",
      "publishYear": 2011,
      "language": "Zulu",
      "haveCD": false,
      "amount": "5",
      "imagePath": "http://dummyimage.com/248x234.jpg/dddddd/000000",
      "thumbnailPath": "http://dummyimage.com/250x147.jpg/dddddd/000000"
    }, {
      "isbn": "718797764-6",
      "title": "Chainsaw Maid",
      "publisher": "Ullrich, Bogisich and Ryan",
      "publishYear": 2008,
      "language": "Pashto",
      "haveCD": true,
      "amount": "7",
      "imagePath": "http://dummyimage.com/195x217.png/5fa2dd/ffffff",
      "thumbnailPath": "http://dummyimage.com/102x204.jpg/5fa2dd/ffffff"
    }, {
      "isbn": "143234832-9",
      "title": "Strangers in Good Company",
      "publisher": "Abernathy-Halvorson",
      "publishYear": 2009,
      "language": "Dzongkha",
      "haveCD": false,
      "amount": "1",
      "imagePath": "http://dummyimage.com/241x227.bmp/5fa2dd/ffffff",
      "thumbnailPath": "http://dummyimage.com/170x135.jpg/dddddd/000000"
    }, {
      "isbn": "497548471-4",
      "title": "Little Criminals",
      "publisher": "Williamson Group",
      "publishYear": 1998,
      "language": "Mongolian",
      "haveCD": true,
      "amount": "1",
      "imagePath": "http://dummyimage.com/146x110.bmp/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/123x161.png/ff4444/ffffff"
    }, {
      "isbn": "193695645-4",
      "title": "Barnens ö",
      "publisher": "Aufderhar and Sons",
      "publishYear": 1992,
      "language": "Luxembourgish",
      "haveCD": true,
      "amount": "6",
      "imagePath": "http://dummyimage.com/100x133.jpg/5fa2dd/ffffff",
      "thumbnailPath": "http://dummyimage.com/102x104.jpg/dddddd/000000"
    }, {
      "isbn": "816965886-1",
      "title": "Naked Ambition: An R Rated Look at an X Rated Industry ",
      "publisher": "Feil, Schamberger and Gutkowski",
      "publishYear": 2008,
      "language": "Kurdish",
      "haveCD": false,
      "amount": "2",
      "imagePath": "http://dummyimage.com/213x225.png/dddddd/000000",
      "thumbnailPath": "http://dummyimage.com/231x112.bmp/cc0000/ffffff"
    }, {
      "isbn": "589459664-5",
      "title": "Benji the Hunted",
      "publisher": "Buckridge Group",
      "publishYear": 1983,
      "language": "Indonesian",
      "haveCD": true,
      "amount": "2",
      "imagePath": "http://dummyimage.com/127x108.jpg/dddddd/000000",
      "thumbnailPath": "http://dummyimage.com/168x209.png/ff4444/ffffff"
    }, {
      "isbn": "742028024-X",
      "title": "Jailbait",
      "publisher": "Skiles-Streich",
      "publishYear": 1993,
      "language": "Armenian",
      "haveCD": false,
      "amount": "3",
      "imagePath": "http://dummyimage.com/187x247.png/5fa2dd/ffffff",
      "thumbnailPath": "http://dummyimage.com/183x112.jpg/ff4444/ffffff"
    }, {
      "isbn": "810538750-6",
      "title": "Nicholas and Alexandra",
      "publisher": "Treutel Group",
      "publishYear": 1996,
      "language": "Lao",
      "haveCD": false,
      "amount": "5",
      "imagePath": "http://dummyimage.com/104x125.jpg/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/144x233.bmp/dddddd/000000"
    }, {
      "isbn": "663679506-9",
      "title": "Painted Fire (Chihwaseon)",
      "publisher": "Hartmann Group",
      "publishYear": 2001,
      "language": "Fijian",
      "haveCD": false,
      "amount": "3",
      "imagePath": "http://dummyimage.com/134x178.png/5fa2dd/ffffff",
      "thumbnailPath": "http://dummyimage.com/101x138.bmp/5fa2dd/ffffff"
    }, {
      "isbn": "879735047-8",
      "title": "Our Family Wedding",
      "publisher": "Kessler and Sons",
      "publishYear": 2005,
      "language": "West Frisian",
      "haveCD": true,
      "amount": "4",
      "imagePath": "http://dummyimage.com/176x104.png/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/131x156.jpg/cc0000/ffffff"
    }, {
      "isbn": "280579278-5",
      "title": "Lone Wolf McQuade",
      "publisher": "Pouros LLC",
      "publishYear": 2008,
      "language": "Hebrew",
      "haveCD": true,
      "amount": "1",
      "imagePath": "http://dummyimage.com/196x250.bmp/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/117x218.bmp/dddddd/000000"
    }, {
      "isbn": "663791721-4",
      "title": "Henry V",
      "publisher": "Wisoky-Glover",
      "publishYear": 2009,
      "language": "Georgian",
      "haveCD": true,
      "amount": "3",
      "imagePath": "http://dummyimage.com/166x103.bmp/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/204x142.png/ff4444/ffffff"
    }, {
      "isbn": "303073277-0",
      "title": "Cat-Women of the Moon (a.k.a. Rocket to the Moon)",
      "publisher": "Luettgen-Hilll",
      "publishYear": 1995,
      "language": "Sotho",
      "haveCD": true,
      "amount": "2",
      "imagePath": "http://dummyimage.com/247x221.bmp/dddddd/000000",
      "thumbnailPath": "http://dummyimage.com/156x201.jpg/5fa2dd/ffffff"
    }, {
      "isbn": "929673624-2",
      "title": "Married Woman, A (Une femme mariée)",
      "publisher": "Mills-Runte",
      "publishYear": 2001,
      "language": "Portuguese",
      "haveCD": true,
      "amount": "2",
      "imagePath": "http://dummyimage.com/200x116.png/ff4444/ffffff",
      "thumbnailPath": "http://dummyimage.com/102x149.bmp/dddddd/000000"
    }, {
      "isbn": "218949931-3",
      "title": "Vampires Suck",
      "publisher": "Wiza-Jones",
      "publishYear": 2006,
      "language": "Haitian Creole",
      "haveCD": true,
      "amount": "1",
      "imagePath": "http://dummyimage.com/147x182.jpg/cc0000/ffffff",
      "thumbnailPath": "http://dummyimage.com/138x146.png/dddddd/000000"
    }, {
      "isbn": "766967329-X",
      "title": "Tarnished Angels, The",
      "publisher": "Crona-Kirlin",
      "publishYear": 1992,
      "language": "Malayalam",
      "haveCD": true,
      "amount": "1",
      "imagePath": "http://dummyimage.com/245x217.png/ff4444/ffffff",
      "thumbnailPath": "http://dummyimage.com/144x239.jpg/ff4444/ffffff"
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
