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

    let requestcontroller=require('../controllers/requestcontroller');
    requestcontroller
        .getNonAccepted()
        .then(data =>{
            res.locals.request =data;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('admin/tableRequest');
            
        })
        .catch(error=>{next(error);})
});

router.get('/tableborrow',(req,res,next)=>{
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

    let requestcontroller=require('../controllers/requestcontroller');
    requestcontroller
        .getAccepted()
        .then(data =>{
            res.locals.request =data;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('admin/tableBorrow');
            
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

    let usercontroller=require('../controllers/userController');
    usercontroller
        .getAll()
        .then(data =>{
            res.locals.user =data;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('admin/tableUser');            
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

    let authorcontroller=require('../controllers/authorcontroller');
    authorcontroller
        .getAll(req.query)
        .then(data =>{
            res.locals.author =data.rows;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('admin/tableAuthor');            
        })
        .catch(error=>{next(error);})
});


router.get('/chart',(req,res,next)=>{

    let authorcontroller=require('../controllers/borrowController');
    authorcontroller
        .getAll()
        .then(data =>{
            res.locals.borrow =data;
            res.render('admin/charts');            
        })
        .catch(error=>{next(error);})
});
module.exports = router;