var express = require('express');
	http = require('http');
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function (req,res,next) {
	console.log(req.header);

	res.writeHead(200,{'Conntent-type':'text/html'});
	res.end('<html><body><h1>HELLO world</h1></body></html>');

});

var server = http.createServer(app);

server.listen(port,hostname, function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});