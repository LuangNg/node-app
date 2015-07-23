var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Signin Form' });
});

router.post('/', function(req, res, next) {
  res.render('login', { title: 'Login View' });
});

module.exports = router;
