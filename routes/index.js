var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
	res.send('The current time is ' + new Date().toString());
});

//get userslist
router.get('/userlist', function(req, res, next) {
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(error, docs){
		res.render('userlist', {
			"userlist" : docs,
			title: 'Express'
		})
	});
});

module.exports = router;
