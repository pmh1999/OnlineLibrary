let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let bcrypt = require("bcryptjs");

router.get('/login', (req, res) =>{
    res.render('login');
});

router.post('/login', (req, res, next) =>{
    let username = req.body.username;
    let password = req.body.password;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined)
    userController
        .getUserByEmail(username)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.password)) {
                    req.session.cookie.maxAge = keepLoggedIn ? 30 * 24 * 60 * 60 * 100 : null;
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    res.render('login', {
                        message: 'Incorrect password!',
                        type: 'alert-danger'
                    });
                }
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
                        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 100;
                        req.session.user = user;
                        res.redirect('/');
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

router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return renext(error);
        }
        return res.redirect('login');
    })
});
module.exports = router;