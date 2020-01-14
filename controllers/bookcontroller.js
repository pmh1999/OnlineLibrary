var models = require("../models");
var controller = {};
let BookInfo= models.BookInfo;

controller.getById= (id)=>{
    return new Promise((resovle,reject)=>{
        let options ={
            where:{
                id:id
            }
        }
        BookInfo
            .findOne(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};
controller.getByCate= (category)=>{
    return new Promise((resovle,reject)=>{
        let options ={
            where:{
                category:category
            }
        }
        BookInfo
            .findAll(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};


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
                case 'id':
                    options.order = [['id','ASC']];
                    break;    
                default:
                    options.order = [['title', 'ASC']];
                    break;
            }
        }

        

        BookInfo
            .findAndCountAll(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.createRequest=(request) => {
    return BookInfo.create(request);
}
controller.getNew= (id)=>{
    return new Promise((resovle,reject)=>{
        let options ={
            limit: 5
        }
        BookInfo
            .findAll(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;