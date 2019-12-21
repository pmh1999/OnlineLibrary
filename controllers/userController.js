let controller = {};
let models = require('../models');
let User = models.User;
let bcrypjs = require('bcryptjs');

controller.getUserByEmail = (email) => {
    return User.findOne({
        where: { username: email }
    });
};

controller.createUser = (user) => {

};

module.exports = controller;