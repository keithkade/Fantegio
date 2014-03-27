var server = require('http').createServer(handler);
var url = require('url');
var io = require('socket.io').listen(server);
var fs = require('fs');

server.listen(11003);

//convert json to array
function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

function getLocations(peices){
	var locations = new Array();
	for(var i = 0; i < peices.length; i++)
	{
		locations.push(peices[i].gridX);
		locations.push(peices[i].gridY);
	}
	return locations;
}

/*function(boardPeices, playerId){
var location = new Array();

}*/

function Piece(){
this.strength = 11;
this.type = "engineer";
this.team = 1;
this.gridX = 0;
this.gridY = 0;
}
var peices = new Array();

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
		case '/boardSetup.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading mainGame.html');
					}
					response.writeHead(200, {"Content-Type": "application/x-javascript"});
					response.write(data);
					response.end();
				});
			break;
		case '/mainGame.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading mainGame.html');
					}
					response.writeHead(200, {"Content-Type": "application/x-javascript"});
					response.write(data);
					response.end();
				});
			break;
		case '/timer.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error loading mainGame.html');
					}
					response.writeHead(200, {"Content-Type": "application/x-javascript"});
					response.write(data);
					response.end();
				});
			break;
	}
}

console.log("Server running on 10003");

var clients_recieved = 0;
var setupboard = function(results) {
		console.log(results);
        // This function extracts the user name from the login message, stores
        // it to the client object, sends a login_ok message to the client, and
        // sends notifications to other clients.

		var result = json2array(results);
		var playerNumber = result[1];
		
		if(playerNumber == 1){
		
		var commander_1 = new Piece();
		commander_1.strength = 6;
		commander_1.type = "commander";
		commander_1.team = playerNumber;
		commander_1.gridX = result[2][0];
		commander_1.gridY = result[2][1];
		peices.push(commander_1);
		
		var captain_1 = new Piece();
		captain_1.strength = 5;
		captain_1.type = "captain";
		captain_1.team = playerNumber;
		captain_1.gridX = result[2][2];
		captain_1.gridY = result[2][3];
		peices.push(captain_1);
		
		var soldier1_1 = new Piece();
		soldier1_1.strength = 4;
		soldier1_1.type = "soldier";
		soldier1_1.team = playerNumber;
		soldier1_1.gridX = result[2][4];
		soldier1_1.gridY = result[2][5];
		peices.push(soldier1_1);
		
		var soldier2_1 = new Piece();
		soldier2_1.strength = 4;
		soldier2_1.type = "soldier";
		soldier2_1.team = playerNumber;
		soldier2_1.gridX = result[2][6];
		soldier2_1.gridY = result[2][7];
		peices.push(soldier2_1);
		
		var engineer1_1 = new Piece();
		engineer1_1.strength = 3;
		engineer1_1.type = "engineer";
		engineer1_1.team = playerNumber;
		engineer1_1.gridX = result[2][8];
		engineer1_1.gridY = result[2][9];
		peices.push(engineer1_1);
		
		var engineer2_1 = new Piece();
		engineer2_1.strength = 3;
		engineer2_1.type = "engineer";
		engineer2_1.team = playerNumber;
		engineer2_1.gridX = result[2][10];
		engineer2_1.gridY = result[2][11];
		peices.push(engineer2_1);
		
		var rider1_1 = new Piece();
		rider1_1.strength = 2;
		rider1_1.type = "rider";
		rider1_1.team = playerNumber;
		rider1_1.gridX = result[2][12];
		rider1_1.gridY = result[2][13];
		peices.push(rider1_1);
		
		var rider2_1 = new Piece();
		rider2_1.strength = 2;
		rider2_1.type = "rider";
		rider2_1.team = playerNumber;
		rider2_1.gridX = result[2][14];
		rider2_1.gridY = result[2][15];
		peices.push(rider2_1);
		
		var assasin_1 = new Piece();
		assasin_1.strength = 1;
		assasin_1.type = "assasin";
		assasin_1.team = playerNumber;
		assasin_1.gridX = result[2][16];
		assasin_1.gridY = result[2][17];
		peices.push(assasin_1);
		
		var archer_1 = new Piece();
		archer_1.strength = 1;
		archer_1.type = "archer";
		archer_1.team = playerNumber;
		archer_1.gridX = result[2][18];
		archer_1.gridY = result[2][19];
		peices.push(archer_1);
		
		var mystic_1 = new Piece();
		mystic_1.strength = 1;
		mystic_1.type = "mystic";
		mystic_1.team = playerNumber;
		mystic_1.gridX = result[2][20];
		mystic_1.gridY = result[2][21];
		peices.push(mystic_1);
		
		var trap1_1 = new Piece();
		trap1_1.strength = 11;
		trap1_1.type = "trap";
		trap1_1.team = playerNumber;
		trap1_1.gridX = result[2][22];
		trap1_1.gridY = result[2][23];
		peices.push(trap1_1);
		
		var trap2_1 = new Piece();
		trap2_1.strength = 11;
		trap2_1.type = "trap";
		trap2_1.team = playerNumber;
		trap2_1.gridX = result[2][24];
		trap2_1.gridY = result[2][25];
		peices.push(trap2_1);
		
		var importantThing_1 = new Piece();
		importantThing_1.strength = 11;
		importantThing_1.type = "important thing";
		importantThing_1.team = playerNumber;
		importantThing_1.gridX = result[2][26];
		importantThing_1.gridY = result[2][27];
		peices.push(importantThing_1);
		
		clients_recieved++;
		}
		
		else if(playerNumber == 2){
		var commander_2 = new Piece();
		commander_2.strength = 6;
		commander_2.type = "commander";
		commander_2.team = playerNumber;
		commander_2.gridX = result[2][0];
		commander_2.gridY = result[2][1];
		peices.push(commander_2);
		
		var captain_2 = new Piece();
		captain_2.strength = 5;
		captain_2.type = "captain";
		captain_2.team = playerNumber;
		captain_2.gridX = result[2][2];
		captain_2.gridY = result[2][3];
		peices.push(captain_2);
		
		var soldier1_2 = new Piece();
		soldier1_2.strength = 4;
		soldier1_2.type = "soldier";
		soldier1_2.team = playerNumber;
		soldier1_2.gridX = result[2][4];
		soldier1_2.gridY = result[2][5];
		peices.push(soldier1_2);
		
		var soldier2_2 = new Piece();
		soldier2_2.strength = 4;
		soldier2_2.type = "soldier";
		soldier2_2.team = playerNumber;
		soldier2_2.gridX = result[2][6];
		soldier2_2.gridY = result[2][7];
		peices.push(soldier2_2);
		
		var engineer1_2 = new Piece();
		engineer1_2.strength = 3;
		engineer1_2.type = "engineer";
		engineer1_2.team = playerNumber;
		engineer1_2.gridX = result[2][8];
		engineer1_2.gridY = result[2][9];
		peices.push(engineer1_2);
		
		var engineer2_2 = new Piece();
		engineer2_2.strength = 3;
		engineer2_2.type = "engineer";
		engineer2_2.team = playerNumber;
		engineer2_2.gridX = result[2][10];
		engineer2_2.gridY = result[2][11];
		peices.push(engineer2_2);
		
		var rider1_2 = new Piece();
		rider1_2.strength = 2;
		rider1_2.type = "rider";
		rider1_2.team = playerNumber;
		rider1_2.gridX = result[2][12];
		rider1_2.gridY = result[2][13];
		peices.push(rider1_2);
		
		var rider2_2 = new Piece();
		rider2_2.strength = 2;
		rider2_2.type = "rider";
		rider2_2.team = playerNumber;
		rider2_2.gridX = result[2][14];
		rider2_2.gridY = result[2][15];
		peices.push(rider2_2);
		
		var assasin_2 = new Piece();
		assasin_2.strength = 1;
		assasin_2.type = "assasin";
		assasin_2.team = playerNumber;
		assasin_2.gridX = result[2][16];
		assasin_2.gridY = result[2][17];
		peices.push(assasin_2);
		
		var archer_2 = new Piece();
		archer_2.strength = 1;
		archer_2.type = "archer";
		archer_2.team = playerNumber;
		archer_2.gridX = result[2][18];
		archer_2.gridY = result[2][19];
		peices.push(archer_2);
		
		var mystic_2 = new Piece();
		mystic_2.strength = 1;
		mystic_2.type = "mystic";
		mystic_2.team = playerNumber;
		mystic_2.gridX = result[2][20];
		mystic_2.gridY = result[2][21];
		peices.push(mystic_2);
		
		var trap1_2 = new Piece();
		trap1_2.strength = 11;
		trap1_2.type = "trap";
		trap1_2.team = playerNumber;
		trap1_2.gridX = result[2][22];
		trap1_2.gridY = result[2][23];
		peices.push(trap1_2);
		
		var trap2_2 = new Piece();
		trap2_2.strength = 6;
		trap2_2.type = "trap";
		trap2_2.team = playerNumber;
		trap2_2.gridX = result[2][24];
		trap2_2.gridY = result[2][25];
		peices.push(trap2_2);
		
		var importantThing_2 = new Piece();
		importantThing_2.strength = 11;
		importantThing_2.type = "important thing";
		importantThing_2.team = playerNumber;
		importantThing_2.gridX = result[2][26];
		importantThing_2.gridY = result[2][27];
		peices.push(importantThing_2);
		
		clients_recieved++;
		}
		
		if(clients_recieved == 2){
		var locArray = getLocations(peices);
			io.sockets.emit("start game", locArray);
			console.log("hello");
		}
      }

io.sockets.on('connection', function(client) {
		client.on('setup', setupboard);
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
