var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Leaders = require('../models/leaders');
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get(function(req,res,next){
	Leaders.find({}, function(err, leaders){
		if (err) throw err;
		res.json(leaders);
	})
})
.post(function(req,res,next){
	Leaders.create(req.body, function(err, leaders){
		if (err) throw err;
		console.log("Leaders Created...");
		var id = leaders._id;
		res.writeHead(200, {
			'Content-type': 'text/plain'});
			res.end('Added the promo with id: ' +  id);
	});
})
.delete(function(req,res,next){
		Leaders.remove({},function(err, resp){
			if (err) throw err;
			res.json(resp);
		})
});

leaderRouter.route('/:leaderId')
.get(function(req,res,next){
	Leaders.findById(req.params.leaderId, function(err, leaders){
		if (err) throw err;
		res.json(leaders);
	})
})
.put(function(req,res,next){
	Leaders.findByIdAndUpdate(req.params.leadersId,{
		$set:req.body
	},{
		new:true
	}, function (err, leaders) {
		res.json(leaders);
	});
})
.delete(function(req,res,next){
	Leaders.remove(req.params.leadersId, function(err, resp){
		if (err) throw err;
		res.json(resp)
	});
});

module.exports = leaderRouter;
