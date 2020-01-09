let express = require('express');
let router = express.Router();

router.get("/", (req, res, next) => {
    res.render("admin/index");
  });

router.get('/tablebook',(req,res,next)=>{
    if ((req.query.sort == null)) {
        req.query.sort = 'id';
    }
    
    if ((req.query.limit == null) || isNaN(req.query.limit)){
        req.query.limit = 20;
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
            res.render('admin/tableBook');            
        })
        .catch(error=>{next(error);})
});

router.get('/tablerequest',(req,res,next)=>{
    if ((req.query.sort == null)) {
        req.query.sort = 'id';
    }
    
    if ((req.query.limit == null) || isNaN(req.query.limit)){
        req.query.limit = 20;
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
            res.render('admin/tableAthour');
            
        })
        .catch(error=>{next(error);})
});

router.get('/tableuser',(req,res,next)=>{
    if ((req.query.sort == null)) {
        req.query.sort = 'id';
    }
    
    if ((req.query.limit == null) || isNaN(req.query.limit)){
        req.query.limit = 20;
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
            res.render('admin/tableBook');            
        })
        .catch(error=>{next(error);})
});

router.get('/tableauthor',(req,res,next)=>{
    if ((req.query.sort == null)) {
        req.query.sort = 'id';
    }
    
    if ((req.query.limit == null) || isNaN(req.query.limit)){
        req.query.limit = 20;
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
            res.render('admin/tableBook');            
        })
        .catch(error=>{next(error);})
});

module.exports = router;