var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){
	
	var leaderRouter = express.Router();
	leaderRouter.use(bodyParser.json());

	leaderRouter.route('/')
	.all(function(req,res,next){
		res.writeHead(200,{'Content-type':'text/plain'});
		next();
	})
	.get(function(req,res,next){
		res.end('Will send all the leaders to you');
	})
	.post(function(req,res,next){
		res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description );
	})
	.delete(function(req,res,next){
		res.end('Deleting all leaders ');
	});

	leaderRouter.route('/:leaderId')
	.all(function(req,res,next){
		res.writeHead(200,{'Content-type':'text/plain'});
		next();
	})
	.get(function(req,res,next){
		res.end('Details of the leader: ' + req.params.leaderId);
	})
	.put(function(req,res,next){
		res.write('Updating the leader: ' + req.params.leaderId + '\n');
		res.end('Will update the leaders ' + req.body.name + ' with details: ' +  req.body.description);
	})
	.delete(function(req,res,next){
		res.end('Deleting the leader: ' + req.params.leaderId);
	});

	return leaderRouter;
}



