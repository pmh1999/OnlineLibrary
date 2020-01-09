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

controller.getAll = () => {
    return new Promise((resolve, reject) => {
      User.findAll()
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
  };

  controller.getUserByUserName = name => {
    return User.findOne({
      where: { userName: name }
    });
  };

  
  controller.getUserById = id => {
    return User.findOne({
      where: { id:id }
    });
  };
  
module.exports = controller;