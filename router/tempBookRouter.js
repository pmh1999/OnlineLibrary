let express = require('express');
let router = express.Router();

if ((req.query.sort == null)) {
    req.query.sort = 'title';
}

if ((req.query.limit == null) || isNaN(req.query.limit)){
    req.query.limit = 9;
}

if ((req.query.search == null) || (req.query.search.trim() == '')) {
    req.query.search = '';
}

if ((req.query.page == null) || isNaN(req.query.page)){
    req.query.page = 1;
}

module.exports = router;