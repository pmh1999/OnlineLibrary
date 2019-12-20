'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let data =[{
      "appointmentDate": "13/06/2019",
      "isAccepted": true,
      "type": "‪‪test‪",
      "BookInfoId": 15,
      "UserId": 2
    }, {
      "appointmentDate": "18/02/2019",
      "isAccepted": false,
      "type": "test⁠test‫",
      "BookInfoId": 8,
      "UserId": 2
    }, {
      "appointmentDate": "07/11/2019",
      "isAccepted": true,
      "type": "() { 0; }; touch /tmp/blns.shellshock1.fail;",
      "BookInfoId": 20,
      "UserId": 6
    }, {
      "appointmentDate": "24/08/2019",
      "isAccepted": false,
      "type": "1/0",
      "BookInfoId": 10,
      "UserId": 10
    }, {
      "appointmentDate": "22/04/2019",
      "isAccepted": true,
      "type": "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ",
      "BookInfoId": 14,
      "UserId": 8
    }, {
      "appointmentDate": "11/04/2019",
      "isAccepted": true,
      "type": "(｡◕ ∀ ◕｡)",
      "BookInfoId": 2,
      "UserId": 9
    }, {
      "appointmentDate": "03/02/2019",
      "isAccepted": false,
      "type": "👩🏽",
      "BookInfoId": 6,
      "UserId": 1
    }, {
      "appointmentDate": "28/11/2019",
      "isAccepted": true,
      "type": "1E02",
      "BookInfoId": 11,
      "UserId": 10
    }, {
      "appointmentDate": "08/01/2019",
      "isAccepted": false,
      "type": "‪‪test‪",
      "BookInfoId": 14,
      "UserId": 3
    }, {
      "appointmentDate": "07/01/2019",
      "isAccepted": true,
      "type": "0.00",
      "BookInfoId": 10,
      "UserId": 1
    }, {
      "appointmentDate": "07/03/2019",
      "isAccepted": false,
      "type": "œ∑´®†¥¨ˆøπ“‘",
      "BookInfoId": 4,
      "UserId": 8
    }, {
      "appointmentDate": "04/07/2019",
      "isAccepted": false,
      "type": "../../../../../../../../../../../etc/hosts",
      "BookInfoId": 3,
      "UserId": 10
    }, {
      "appointmentDate": "18/09/2019",
      "isAccepted": false,
      "type": "パーティーへ行かないか",
      "BookInfoId": 2,
      "UserId": 6
    }, {
      "appointmentDate": "19/11/2019",
      "isAccepted": true,
      "type": "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
      "BookInfoId": 19,
      "UserId": 7
    }, {
      "appointmentDate": "09/07/2019",
      "isAccepted": false,
      "type": "👾 🙇 💁 🙅 🙆 🙋 🙎 🙍 ",
      "BookInfoId": 6,
      "UserId": 10
    }, {
      "appointmentDate": "22/04/2019",
      "isAccepted": true,
      "type": "-1.00",
      "BookInfoId": 18,
      "UserId": 9
    }, {
      "appointmentDate": "27/10/2019",
      "isAccepted": false,
      "type": "🐵 🙈 🙉 🙊",
      "BookInfoId": 9,
      "UserId": 3
    }, {
      "appointmentDate": "13/12/2019",
      "isAccepted": true,
      "type": "<script>alert('hi')</script>",
      "BookInfoId": 4,
      "UserId": 5
    }, {
      "appointmentDate": "22/05/2019",
      "isAccepted": true,
      "type": "⁰⁴⁵₀₁₂",
      "BookInfoId": 5,
      "UserId": 5
    }, {
      "appointmentDate": "03/01/2019",
      "isAccepted": false,
      "type": "בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ",
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
