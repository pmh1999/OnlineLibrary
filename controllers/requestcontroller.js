var models = require("../models");
var controller = {};
let Request= models.Request

controller.getAll= ()=>{
    return new Promise((resovle,reject)=>{
        Request
            .findAll()
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};
controller.destroyById= (id)=>{
    Request.destroy({
        where: {
           id: id //this will be your id that you want to delete
        }
     }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
       if(rowDeleted === 1){
          console.log('Deleted successfully');
        }
     }, function(err){
         console.log(err); 
     });
};
controller.getById= (id)=>{
    return new Promise((resovle,reject)=>{
        let options ={
            where:{
                id:id
            }
        }
        Request
            .findOne(options)
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getNonAccepted = () => {
    return new Promise((resovle,reject)=>{
        Request
            .findAll({
                where: { isAccepted : false }
            })
            .then(data =>resovle(data))
            .catch(error => reject(new Error(error)));
    });
};
controller.getAccepted = () => {
    return Request.findAll({
        where: { isAccepted : true }
    });
};

controller.createRequest=(request) => {
    return Request.create(request);
}
module.exports = controller;