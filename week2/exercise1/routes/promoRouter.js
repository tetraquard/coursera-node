var express = require('express');
var bodyParser = require('body-parser');


var promoRouter = express.Router(); 
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req,res,next){
	res.writeHead(200,{'Content-type':'text/plain'});
	next();
})
.get(function(req,res,next){
	res.end('Will send all the promotions to you');
})
.post(function(req,res,next){
	res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description );
})
.delete(function(req,res,next){
	res.end('Deleting all promotions ');
});

promoRouter.route('/:dishId')
.all(function(req,res,next){
	res.writeHead(200,{'Content-type':'text/plain'});
	next();
})
.get(function(req,res,next){
	res.end('Details of the promotion: ' + req.params.dishId);
})
.put(function(req,res,next){
	res.write('Updating the promotion: ' + req.params.dishId + '\n');
	res.end('Will update the promotions ' + req.body.name + ' with details: ' +  req.body.description);
})
.delete(function(req,res,next){
	res.end('Deleting the promotion: ' + req.params.dishId);
});

module.exports = promoRouter;



