let controller = {};
let models = require('../models');
let User = models.User;
let bcrypt = require('bcryptjs');

controller.getUserByEmail = (username) => {
    return User.findOne({
        where: { username: username }
    });
};

controller.createUser = (user) => {
    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return User.create(user);
};

controller.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash); // true
};

module.exports = controller;