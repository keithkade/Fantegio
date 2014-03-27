var server = require('http').createServer(handler);
var url = require('url');
var io = require('socket.io').listen(server);
var fs = require('fs');

server.listen(10003);

function handler(request,response) {
	console.log('kicked');
	var path = url.parse(request.url).pathname;

	switch (path) {
		case '/':
			fs.readFile(__dirname + '/welcome.html', function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading welcome.html');
					}
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(data);
					response.end();
				});
			break;
		case '/setup.html':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading setup.html');
					}
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(data);
					response.end();
				});
			break;
		case '/rules.html':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading rules.html');
					}
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(data);
					response.end();
				});
			break;
		case '/boardSetup.html':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading boardSetup.html');
					}
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(data);
					response.end();
				});
			break;
		case '/mainGame.html':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading mainGame.html');
					}
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(data);
					response.end();
				});
			break;
	}
}

console.log("Server running on 10003");

io.sockets.on('connection', function(client) {
		client.emit('welcome', 'Welcome to this');
		/*
		client.on('BeginButton', function(message) {
				fs.readFile(__dirname + 'setup.html', function(error, data) {
						response.writeHead(200, {"Content-Type": "text/html"});
						response.write(data);
						response.end();
					});
				console.log('ooh yeah');
			});
		*/
	});
