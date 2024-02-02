var express = require('express');
var router = express.Router();
const books = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('/', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/show', function(req, res, next) {
  res.render('show', {books});
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
  books.push(req.body);
  res.redirect("/show")
});

router.get('/details/:index', function(req, res, next) {
books[req.params.index];
  res.render("details",{books});
}); 
router.get('/delete/:index', function(req, res, next) {
  books.splice(req.params.index, 1);
    res.redirect('/show');
  }); 
  router.get('/update/:index', function(req, res, next) {
    const dets = books[req.params.index];
      res.render("update",{dets: dets,index:req.params.index});
    }); 
    router.post('/update/:index', function(req, res, next) {
      books[req.params.index]=req.body;
        res.redirect ('/details/${req.params.index}');
      }); 
  


module.exports = router;
