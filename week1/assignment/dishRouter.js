var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){
	
	var dishRouter = express.Router();
	dishRouter.use(bodyParser.json());

	dishRouter.route('/')
	.all(function(req,res,next){
		res.writeHead(200,{'Content-type':'text/plain'});
		next();
	})
	.get(function(req,res,next){
		res.end('Will send all the dishes to you');
	})
	.post(function(req,res,next){
		res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description );
	})
	.delete(function(req,res,next){
		res.end('Deleting all dishes ');
	});

	dishRouter.route('/:dishId')
	.all(function(req,res,next){
		res.writeHead(200,{'Content-type':'text/plain'});
		next();
	})
	.get(function(req,res,next){
		res.end('Details of the dish: ' + req.params.dishId);
	})
	.put(function(req,res,next){
		res.write('Updating the dish: ' + req.params.dishId + '\n');
		res.end('Will update the dishes ' + req.body.name + ' with details: ' +  req.body.description);
	})
	.delete(function(req,res,next){
		res.end('Deleting the dish: ' + req.params.dishId);
	});

	return dishRouter;
}



