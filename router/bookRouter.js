let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
        .getAll()
        .then(data =>{
            res.locals.book =data;
            res.render('books')
            
        })
        .catch(error=>{next(error);})
});

router.get('/:id',(req,res,next)=>{
    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
        .getById(req.params.id)
        .then(data =>{
            res.locals.book =data;
            res.render('bookdetail')
        })
        .catch(error=>{next(error);})
});



module.exports = router;