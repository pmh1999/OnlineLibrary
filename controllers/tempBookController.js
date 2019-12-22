var models = require("../models");
var controller = {};
let BookInfo= models.BookInfo;
let BookCategory = models.BookCategory;

controller.getAllCateIdByBookId= (id) =>{
    return new Promise((resovle,reject)=>{
        let options ={
            where:{
                id:id
            }
        }
        BookCategory
            .findAll(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};

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


controller.getAll= (query)=>{
    return new Promise((resovle,reject)=>{
        let options ={
        };

        if (query.limit > 0){
            options.limit = query.limit;
            options.offset = query.limit * (query.page - 1);
        }

        if (query.sort){
            switch (query.sort){
                case 'title':
                    options.order = [['title', 'ASC']];
                    break;
                case 'amount':
                    options.order = [['amount', 'ASC']];
                    break;
                default:
                    options.order = [['title', 'ASC']];
                    break;
            }
        }

        BookInfo
            .findAll(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};

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

//
if (query.limit > 0){

}

module.exports = controller;