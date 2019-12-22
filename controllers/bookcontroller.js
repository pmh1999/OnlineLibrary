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


controller.getAll= ()=>{
    return new Promise((resovle,reject)=>{
        let options ={
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

module.exports = controller;