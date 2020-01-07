let express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
        .getAll(req.query)
        .then(data =>{
            res.locals.book = data;
            res.render('tableBook');
        })
        .catch(error=>{next(error);})
});



module.exports = router;