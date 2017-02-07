var express = require('express');
var app=express();
var router = express.Router();

router.get('/', function(req, res){
	res.send('GET route on things.');
});
router.post('/', function(req, res){
	res.send('POST route on things.');
});
app.use("*",router);
app.listen(9999);