let express = require('express');
let router = express.Router();

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/signup', (req, res) =>{
    res.render('signup');
});

router.post('/signup', (req, res, next) =>{
    let user = {
        fullname = req.body.fullname,
        username = req.body.username,
        password = req.body.password
    }
    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    // Kiem tra confirm password va password giong nhau
    // Kiem tra username chua ton tai
    // Tao tai khoan
});

module.exports = router;