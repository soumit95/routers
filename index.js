var express = require('express')
var app=express();
var subapp=express();
var router=express.Router();
console.log(subapp.path());
router.get('/',function(req,res,next){
	console.log('get router');
	console.log(req.baseUrl);
	console.log(req.method);
	res.send("hello");
	consolog(req.body);
	next();
});
app.use(router);
app.listen(3000);
