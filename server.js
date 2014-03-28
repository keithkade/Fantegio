var server = require('http').createServer(handler);
console.log("Server running on port 33331.");

var url = require('url');
var io = require('socket.io').listen(server);
var fs = require('fs');


server.listen(33331);

// Listen for initial connection
// Execute setupBoard for each client that connects
io.sockets.on('connection', function(client) {
		client.on('setup', setupBoard);
		client.on('move', handleMove);
	});

// Piece object
function Piece() {
	this.strength = 11;
	this.type = "engineer";
	this.team = 1;
	this.X = 0;
	this.Y = 0;
}

var allPieces = new Array();

// Convert json object to array object
function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key) {
        result.push(json[key]);
		});
    return result;
}

// Get x and y board coordinates of all pieces on the board
function getLocations(pieces) {
	var locations = new Array();
	for (var i = 0; i < pieces.length; ++i) {
		locations.push(pieces[i].X);
		locations.push(pieces[i].Y);
	}
	return locations;
}

// Get a allPieces index of a piece at x and y board coordinates
function getPieceIndex(X, Y) {
	for (var i = 0; i < allPieces.length; ++i) {
		if (allPieces[i].X == X && allPieces[i].Y == Y) {
			return i;
		}
	}
	return;
}

// Take x and y board coordinates and return true if unoccupied, false otherwise
function spaceEmpty(X, Y) {
	for (var i = 0; i < allPieces.length; ++i) {
		if (allPieces[i].X == X && allPieces[i].Y == Y) {
			return false;
		}
	}
	return true;
}

/*function(boardPieces, playerId) {
var location = new Array();

}*/

// Handle connections to port being monitored
function handler(request,response) {
	console.log('Got kicked..');//rmv
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
		case '/initializePieces.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error running initializePieces.js');
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
		case '/boardSetup.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error running boardSetup.js');
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
						return response.end('Error running timer.js');
					}
					response.writeHead(200, {"Content-Type": "application/x-javascript"});
					response.write(data);
					response.end();
				});
			break;
	}
}

// As a note, the _1 or _2 denotes the player that corresponds to the var
var numClients = 0;
function setupBoard(data) {
	console.log(data);
	// This function extracts the user name from the login message, stores
	// it to the client object, sends a login_ok message to the client, and
	// sends notifications to other clients.

	var setup = json2array(data);
	var playerNumber = setup[1];

	if (playerNumber == 1) {

		var commander_1 = new Piece();
		commander_1.strength = 6;
		commander_1.type = "commander";
		commander_1.team = playerNumber;
		commander_1.X = setup[2][0];
		commander_1.Y = setup[2][1];
		allPieces.push(commander_1);

		var captain_1 = new Piece();
		captain_1.strength = 5;
		captain_1.type = "captain";
		captain_1.team = playerNumber;
		captain_1.X = setup[2][2];
		captain_1.Y = setup[2][3];
		allPieces.push(captain_1);

		var soldier1_1 = new Piece();
		soldier1_1.strength = 4;
		soldier1_1.type = "soldier";
		soldier1_1.team = playerNumber;
		soldier1_1.X = setup[2][4];
		soldier1_1.Y = setup[2][5];
		allPieces.push(soldier1_1);

		var soldier2_1 = new Piece();
		soldier2_1.strength = 4;
		soldier2_1.type = "soldier";
		soldier2_1.team = playerNumber;
		soldier2_1.X = setup[2][6];
		soldier2_1.Y = setup[2][7];
		allPieces.push(soldier2_1);

		var engineer1_1 = new Piece();
		engineer1_1.strength = 3;
		engineer1_1.type = "engineer";
		engineer1_1.team = playerNumber;
		engineer1_1.X = setup[2][8];
		engineer1_1.Y = setup[2][9];
		allPieces.push(engineer1_1);

		var engineer2_1 = new Piece();
		engineer2_1.strength = 3;
		engineer2_1.type = "engineer";
		engineer2_1.team = playerNumber;
		engineer2_1.X = setup[2][10];
		engineer2_1.Y = setup[2][11];
		allPieces.push(engineer2_1);

		var rider1_1 = new Piece();
		rider1_1.strength = 2;
		rider1_1.type = "rider";
		rider1_1.team = playerNumber;
		rider1_1.X = setup[2][12];
		rider1_1.Y = setup[2][13];
		allPieces.push(rider1_1);

		var rider2_1 = new Piece();
		rider2_1.strength = 2;
		rider2_1.type = "rider";
		rider2_1.team = playerNumber;
		rider2_1.X = setup[2][14];
		rider2_1.Y = setup[2][15];
		allPieces.push(rider2_1);

		var assasin_1 = new Piece();
		assasin_1.strength = 1;
		assasin_1.type = "assasin";
		assasin_1.team = playerNumber;
		assasin_1.X = setup[2][16];
		assasin_1.Y = setup[2][17];
		allPieces.push(assasin_1);

		var archer_1 = new Piece();
		archer_1.strength = 1;
		archer_1.type = "archer";
		archer_1.team = playerNumber;
		archer_1.X = setup[2][18];
		archer_1.Y = setup[2][19];
		allPieces.push(archer_1);

		var mystic_1 = new Piece();
		mystic_1.strength = 1;
		mystic_1.type = "mystic";
		mystic_1.team = playerNumber;
		mystic_1.X = setup[2][20];
		mystic_1.Y = setup[2][21];
		allPieces.push(mystic_1);

		var trap1_1 = new Piece();
		trap1_1.strength = 11;
		trap1_1.type = "trap";
		trap1_1.team = playerNumber;
		trap1_1.X = setup[2][22];
		trap1_1.Y = setup[2][23];
		allPieces.push(trap1_1);

		var trap2_1 = new Piece();
		trap2_1.strength = 11;
		trap2_1.type = "trap";
		trap2_1.team = playerNumber;
		trap2_1.X = setup[2][24];
		trap2_1.Y = setup[2][25];
		allPieces.push(trap2_1);

		var importantThing_1 = new Piece();
		importantThing_1.strength = 11;
		importantThing_1.type = "important thing";
		importantThing_1.team = playerNumber;
		importantThing_1.X = setup[2][26];
		importantThing_1.Y = setup[2][27];
		allPieces.push(importantThing_1);

		++numClients;
	}
	else if (playerNumber == 2) {
		var commander_2 = new Piece();
		commander_2.strength = 6;
		commander_2.type = "commander";
		commander_2.team = playerNumber;
		commander_2.X = setup[2][0];
		commander_2.Y = setup[2][1];
		allPieces.push(commander_2);

		var captain_2 = new Piece();
		captain_2.strength = 5;
		captain_2.type = "captain";
		captain_2.team = playerNumber;
		captain_2.X = setup[2][2];
		captain_2.Y = setup[2][3];
		allPieces.push(captain_2);

		var soldier1_2 = new Piece();
		soldier1_2.strength = 4;
		soldier1_2.type = "soldier";
		soldier1_2.team = playerNumber;
		soldier1_2.X = setup[2][4];
		soldier1_2.Y = setup[2][5];
		allPieces.push(soldier1_2);

		var soldier2_2 = new Piece();
		soldier2_2.strength = 4;
		soldier2_2.type = "soldier";
		soldier2_2.team = playerNumber;
		soldier2_2.X = setup[2][6];
		soldier2_2.Y = setup[2][7];
		allPieces.push(soldier2_2);

		var engineer1_2 = new Piece();
		engineer1_2.strength = 3;
		engineer1_2.type = "engineer";
		engineer1_2.team = playerNumber;
		engineer1_2.X = setup[2][8];
		engineer1_2.Y = setup[2][9];
		allPieces.push(engineer1_2);

		var engineer2_2 = new Piece();
		engineer2_2.strength = 3;
		engineer2_2.type = "engineer";
		engineer2_2.team = playerNumber;
		engineer2_2.X = setup[2][10];
		engineer2_2.Y = setup[2][11];
		allPieces.push(engineer2_2);

		var rider1_2 = new Piece();
		rider1_2.strength = 2;
		rider1_2.type = "rider";
		rider1_2.team = playerNumber;
		rider1_2.X = setup[2][12];
		rider1_2.Y = setup[2][13];
		allPieces.push(rider1_2);

		var rider2_2 = new Piece();
		rider2_2.strength = 2;
		rider2_2.type = "rider";
		rider2_2.team = playerNumber;
		rider2_2.X = setup[2][14];
		rider2_2.Y = setup[2][15];
		allPieces.push(rider2_2);

		var assasin_2 = new Piece();
		assasin_2.strength = 1;
		assasin_2.type = "assasin";
		assasin_2.team = playerNumber;
		assasin_2.X = setup[2][16];
		assasin_2.Y = setup[2][17];
		allPieces.push(assasin_2);

		var archer_2 = new Piece();
		archer_2.strength = 1;
		archer_2.type = "archer";
		archer_2.team = playerNumber;
		archer_2.X = setup[2][18];
		archer_2.Y = setup[2][19];
		allPieces.push(archer_2);

		var mystic_2 = new Piece();
		mystic_2.strength = 1;
		mystic_2.type = "mystic";
		mystic_2.team = playerNumber;
		mystic_2.X = setup[2][20];
		mystic_2.Y = setup[2][21];
		allPieces.push(mystic_2);

		var trap1_2 = new Piece();
		trap1_2.strength = 11;
		trap1_2.type = "trap";
		trap1_2.team = playerNumber;
		trap1_2.X = setup[2][22];
		trap1_2.Y = setup[2][23];
		allPieces.push(trap1_2);

		var trap2_2 = new Piece();
		trap2_2.strength = 6;
		trap2_2.type = "trap";
		trap2_2.team = playerNumber;
		trap2_2.X = setup[2][24];
		trap2_2.Y = setup[2][25];
		allPieces.push(trap2_2);

		var importantThing_2 = new Piece();
		importantThing_2.strength = 11;
		importantThing_2.type = "important thing";
		importantThing_2.team = playerNumber;
		importantThing_2.X = setup[2][26];
		importantThing_2.Y = setup[2][27];
		allPieces.push(importantThing_2);

		++numClients;
	}

	// If both players have connected, signal start game
	if (numClients == 2) {
		var locArray = getLocations(allPieces);
		io.sockets.emit("start game", locArray);
	}
}
	  
// As a note, the _1 or _2 denotes the player that corresponds to the var
function handleMove(data) {
	// Get all information about the move from data
	var moveData = json2array(data);
	var xOld = moveData[1];
	var yOld = moveData[2];
	var xNew = moveData[3];
	var yNew = moveData[4];
	var actionType = moveData[5];
	var playerNumber = moveData[6];
	var piece_1 = moveData[7];
	var piece_2 = moveData[8];

	// Determine who is moving
	if (playerNumber == 1) {
		if (spaceEmpty(xNew, yNew)) {
			// Just signal move
			io.socket.emit("update", xOld, yOld, xNew, yNew);//TODO
		}
		else {
			// Here, we assume a player won't move onto his/her own pieces
			// Need to check for this later
			// If space not empty, then handle attack
			resolveConflict(xOld, yOld, xNew, yNew);
		}
	}
	else if (playerNumber == 2) {
		if (spaceEmpty(xNew, yNew)) {
			// Just signal move
			io.socket.emit("update", xOld, yOld, xNew, yNew);//TODO
		}
		else {
			// Here, we assume a player won't move onto his/her own pieces
			// Need to check for this later
			// If space not empty, then handle attack
			resolveConflict(xOld, yOld, xNew, yNew);
		}
	}

}

function resolveConflict(xOld, yOld, xNew, yNew) {
	// Does JS return reference to piece? That would be easier //rmv
	// mInd -> moving peice index, aInd -> attacked piece index
	var mInd = getPieceIndex(xOld, yOld);
	var aInd = getPieceIndex(xNew, yNew);
	var moving = allPieces[mInd];
	var attacked = allPieces[aInd];

	if (moving.strength > attacked.strength) {
		// Need to move piece and destroy attacked piece
		// Move piece first
		allPieces[mInd].X = xNew;
		allPieces[mInd].Y = yNew;
		allPieces.splice(aInd, 1);
		io.socket.emit("update", );//TODO
	}
	else if (moving.strength == attacked.strength) {
		// Need to destroy both pieces (but destroy higher index first!)
		if (aInd > mInd) {
			allPieces.splice(aInd, 1);
			allPieces.splice(mInd, 1);
		}
		else {
			allPieces.splice(mInd, 1);
			allPieces.splice(aInd, 1);
		}
		io.socket.emit("update", );//TODO
	}
	else if (moving.strength < attacked.strength) {
		// Need to destroy attacking piece
		allPieces.splice(mInd, 1);
		io.socket.emit("update", );//TODO
	}

}

function invalidMove(xOld, yOld, xNew, yNew){
	//this function checks whether sent is right move or not
	if(xNew < 1 || xNew > 8 || yNew < 1 || yNew  8){
		var message = "pieces cannot move out of the board";
		io.socket.emit('invalid move', xOld, yOld, message);
	}
	else if(spaceEmty(xNew, yNew) == false)
	{
		var pieceIndOld = getPieceIndex(xOld, yOld);
		var pieceIndNew = getPieceIndex(xNew, yNew);
		var peiceWithOlInd = allPieces[pieceIndOld]
		var pieceToBeMoved = allPieces[pieceIndNew];
		
		//checks whether the piece is of the same player
		if(peiceWithOlInd.team == pieceToBeMoved.team){
			var message = "Player cannot move their piece on their own piece.";
			io.socket.emit('invalid move', xOld, yOld, message);
		}
	}
}

