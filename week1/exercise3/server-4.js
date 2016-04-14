var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

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

app.use('/dishes',dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function () {
	console.log(`Server running at http://${hostname}:${port}/`);
});