let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let bcrypt = require("bcryptjs");

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/login', (req, res, next) =>{
    let email = req.body.username;
    let password = req.body.password;
    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                userController
                    .comparePassword(password, user.password)
                    .then(isMatch => {
                        if (isMatch) { // nếu đăng nhập thành công
                            req.session.user = user;
                            res.render('/')
                        }
                        res.render('login', {
                            message: 'Incorrect password!',
                            type: 'alert-danger'
                        })
                    });
            } else {
            res.render('login', {
                message: 'Email does not exist!',
                type: 'alert-danger'
            });
        }
        })
});

router.get('/signup', (req, res) =>{
    res.render('signup');
});

router.post('/signup', (req, res, next) =>{
    let fullname = req.body.fullname;
    let username = req.body.username;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    // Kiem tra confirm password va password giong nhau
    if (fullname == "" || password == "" || username == "" || confirmPassword == ""){
        return res.render('signup', {
            message: 'Do not leave any blank !',
            type: 'alert-danger'
        })
    }

    // Kiem tra confirm password va password giong nhau
    if (password != confirmPassword){
        return res.render('signup', {
            message: 'Confirm password does not match!',
            type: 'alert-danger'
        })
    }
    // Kiem tra username chua ton tai
    userController
        .getUserByEmail(username)
        .then(user =>{
            if (user){
                return res.render('signup', {
                    message: `Email ${username} exists! Please choose another email address.`,
                    type: 'alert-danger'
                });
            }
            // Tao tai khoan
            user = {
                fullname,
                username: username,
                password
            };

            return userController
                .createUser(user)
                .then(user => {
                    if (keepLoggedIn){
                        req.session.user = user;
                        res.render('/');
                    } else{
                        res.render('login', {
                            message: 'You have registered, now please log in!',
                            type: 'alert-primary'
                        })
                    }
                });
        })
        .catch(error => next(error));;
});

module.exports = router;