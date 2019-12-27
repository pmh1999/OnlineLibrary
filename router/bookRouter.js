let express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
    if ((req.query.sort == null)) {
        req.query.sort = 'title';
    }
    
    if ((req.query.limit == null) || isNaN(req.query.limit)){
        req.query.limit = 9;
    }
    
    if ((req.query.search == null) || (req.query.search.trim() == '')) {
        req.query.search = '';
    }

    if ((req.query.type == null) || (req.query.type.trim() == '')) {
        req.query.type = '';
    }
    
    if ((req.query.page == null) || isNaN(req.query.page)){
        req.query.page = 1;
    }

    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
        .getAll(req.query)

        .then(data =>{
            res.locals.book =data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('books');
            
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