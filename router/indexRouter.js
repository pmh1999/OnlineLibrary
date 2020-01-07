let express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
        .getNew(0)
        .then(data =>{
            res.locals.book = data;
            return bookcontroller.getNew(1);
            
        })
        .then(result=>{
            res.locals.book2=result;
            res.render('index');
        })
        .catch(error=>{next(error);})
});



module.exports = router;