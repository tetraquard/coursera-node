var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (req,res) {

	console.log('Request for ' + req.url + ' by method ' + req.method);

	if(req.method == 'GET'){
		var fileUrl;
		if(req.url == '/') fileUrl = '/index.html';
		else fileUrl = req.url;

		var filePath = path.resolve('./public' + fileUrl);

		var fileExt = path.extname(filePath);

		if(fileExt == '.html'){
			fs.exists(filePath, function (exists) {

				if(!exists){
					res.writeHead(404, {'Content-type': 'text/html'});
					res.end('<h1>ERROR 404 : ' +  fileUrl + ' NOT FOUND.</h1>');
					return;
				}
				res.writeHead(200, {'Content-type':'text/html'});
				fs.createReadStream(filePath).pipe(res);
			})
		}else{ 
			res.writeHead(404, {'Content-type': 'text/html'});
			res.end('<h1>ERROR 404 : ' +  fileUrl + ' NOT A HTML FILE</h1>');
		}
	}

	else{
		res.writeHead(500, {'Content-type': 'text/html'});
			res.end('<h1>ERROR 500 : BAD REQUEST </h1>');
	}

})

server.listen(port,hostname,function(){
	console.log(`Server running at http://${hostname}:${port}/`);

})