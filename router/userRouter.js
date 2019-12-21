let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/signup', (req, res) =>{
    res.render('signup');
});

router.post('/signup', (req, res, next) =>{
    let fullname = req.body.fullname;
    let email = req.body.username;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    // Kiem tra confirm password va password giong nhau
    if (password != confirmPassword){
        return res.render('signup', {
            message: 'Confirm password does not match!',
            type: 'alert-danger'
        })
    }
    // Kiem tra username chua ton tai
    userController
        .getUserByEmail(email)
        .then(user =>{
            if (user){
                return res.render('signup', {
                    message: `Email ${email} exists! Please choose another email address.`,
                    type: 'alert-danger'
                });
            }
            // Tao tai khoan
            user = {
                fullname,
                username: email,
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