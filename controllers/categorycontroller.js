var models = require("../models");
var controller = {};
let Category= models.Category;


controller.getAll= (query)=>{
    return new Promise((resovle,reject)=>{
        let = options ={
            where: {}
        };

 

        if (query.limit > 0){
            options.limit = query.limit;
            options.offset = query.limit * (query.page - 1);
        }
        var Sequelize = require('sequelize');
        if (query.search != ''){
            options.where = {
                [Sequelize.Op.or]:[
                    {
                        title : {
                            [Sequelize.Op.iLike] : `%${query.search}%`
                        }
                    }
                ]
            } 
        }

        if(query.type !=''){
            options.where = {
                [Sequelize.Op.or]:[
                    {
                        category : {
                            [Sequelize.Op.iLike] : `%${query.type}%`
                        }
                    }
                ]
            } 
        }

        if (query.sort){
            switch (query.sort){
                case 'title':
                    options.order = [['title', 'ASC']];
                    break;
                case 'amount':
                    options.order = [['amount', 'ASC']];
                    break;
                case 'name':
                    options.order = [['name','ASC']];
                    break;    
                default:
                    options.order = [['title', 'ASC']];
                    break;
            }
        }

        

        Category
            .findAndCountAll(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};


module.exports = controller;