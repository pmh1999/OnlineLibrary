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