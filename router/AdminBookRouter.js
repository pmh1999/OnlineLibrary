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


router.get('/tablebook-minus/:id', (req, res, next) => {
    tmp = req.params.id;
    tmp2= 0;
    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
      .getById(tmp)
      .then(book => {
        if (book) {
            tmp2 = parseInt(--book.amount);
            book.update({
            amount:tmp2,
          });
          res.redirect("/admin/tablebook");
        }
      })
      .catch(error => next(error));
});

router.get('/tablebook-plus/:id', (req, res, next) => {
    tmp = req.params.id;
    tmp2= 0;
    let bookcontroller=require('../controllers/bookcontroller');
    bookcontroller
      .getById(tmp)
      .then(book => {
        if (book) {
            tmp2 = parseInt(++book.amount);
            book.update({
            amount:tmp2,
        });
            res.redirect("/admin/tablebook");
        }
      })
      .catch(error => next(error));
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
router.get('/tablerequest-accept/:id', (req, res, next) => {
    tmp = req.params.id;
    let requestcontroller=require('../controllers/requestcontroller');
    requestcontroller
      .getById(tmp)
      .then(request => {
        if (request) {
            request.update({
            isAccepted:true,
        });
            res.redirect("/admin/tablerequest");
        }
      })
      .catch(error => next(error));
});
router.get('/tablerequest-deny/:id', (req, res, next) => {
    tmp = req.params.id;
    let requestcontroller=require('../controllers/requestcontroller');
    requestcontroller.destroyById(tmp);
    res.redirect("/admin/tablerequest");
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

router.get('/tablecategory',(req,res,next)=>{
    if ((req.query.sort == null)) {
        req.query.sort = 'name';
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

    let categorycontroller=require('../controllers/categorycontroller');
    categorycontroller
        .getAll(req.query)
        .then(data =>{
            res.locals.category = data;
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.limit),
                totalRows: data.count
            };
            res.render('admin/tableCategory');            
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

router.get('/addBook',(req,res,next)=>{
    res.render('admin/addBook');            
});

router.post('/addBook',(req,res,next)=>{
    let upload = require('express-fileupload');
    let importExcel = require('convert-excel-to-json');
    
    let file = req.body.filename.filename;
    let filename = file.name;
    file.mv('./excel/' + filename, (err)=>  {
        if(err){
            res.redirect('admin/index');
        }else{
            let result = importExcel({
                sourceFile: './excel' + filename,
                header:{rows:1}
            })
        }

    });
});

module.exports = router;