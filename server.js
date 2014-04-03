var server = require('http').createServer(handler);
var url = require('url');
var io = require('socket.io').listen(server);
var fs = require('fs');

var portNumber = 33332;
console.log("Server running on port " + portNumber + ".");
server.listen(portNumber);

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

var allPieces = new Array(30);

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
		case '/gamePlay.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error running gamePlay.js');
					}
					response.writeHead(200, {"Content-Type": "application/x-javascript"});
					response.write(data);
					response.end();
				});
			break;
		case '/helpers.js':
			fs.readFile(__dirname + path, function(error, data) {
					if (error) {
						response.writeHead(500);
						return response.end('Error running helpers.js');
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
		allPieces[0] = commander_1;

		var captain_1 = new Piece();
		captain_1.strength = 5;
		captain_1.type = "captain";
		captain_1.team = playerNumber;
		captain_1.X = setup[2][2];
		captain_1.Y = setup[2][3];
		allPieces[1] = captain_1;

		var soldier1_1 = new Piece();
		soldier1_1.strength = 4;
		soldier1_1.type = "soldier";
		soldier1_1.team = playerNumber;
		soldier1_1.X = setup[2][4];
		soldier1_1.Y = setup[2][5];
		allPieces[2] = soldier1_1;

		var soldier2_1 = new Piece();
		soldier2_1.strength = 4;
		soldier2_1.type = "soldier";
		soldier2_1.team = playerNumber;
		soldier2_1.X = setup[2][6];
		soldier2_1.Y = setup[2][7];
		allPieces[3] = soldier2_1;

		var engineer1_1 = new Piece();
		engineer1_1.strength = 3;
		engineer1_1.type = "engineer";
		engineer1_1.team = playerNumber;
		engineer1_1.X = setup[2][8];
		engineer1_1.Y = setup[2][9];
		allPieces[4] = engineer1_1;

		var engineer2_1 = new Piece();
		engineer2_1.strength = 3;
		engineer2_1.type = "engineer";
		engineer2_1.team = playerNumber;
		engineer2_1.X = setup[2][10];
		engineer2_1.Y = setup[2][11];
		allPieces[5] = engineer2_1;

		var rider1_1 = new Piece();
		rider1_1.strength = 2;
		rider1_1.type = "rider";
		rider1_1.team = playerNumber;
		rider1_1.X = setup[2][12];
		rider1_1.Y = setup[2][13];
		allPieces[6] = rider1_1;

		var rider2_1 = new Piece();
		rider2_1.strength = 2;
		rider2_1.type = "rider";
		rider2_1.team = playerNumber;
		rider2_1.X = setup[2][14];
		rider2_1.Y = setup[2][15];
		allPieces[7] = rider2_1;

		var assasin_1 = new Piece();
		assasin_1.strength = 1;
		assasin_1.type = "assassin";
		assasin_1.team = playerNumber;
		assasin_1.X = setup[2][16];
		assasin_1.Y = setup[2][17];
		allPieces[8] = assasin_1;

		var archer_1 = new Piece();
		archer_1.strength = 1;
		archer_1.type = "archer";
		archer_1.team = playerNumber;
		archer_1.X = setup[2][18];
		archer_1.Y = setup[2][19];
		allPieces[9] = archer_1;

		var mystic_1 = new Piece();
		mystic_1.strength = 1;
		mystic_1.type = "mystic";
		mystic_1.team = playerNumber;
		mystic_1.X = setup[2][20];
		mystic_1.Y = setup[2][21];
		allPieces[10] = mystic_1;

		var trap1_1 = new Piece();
		trap1_1.strength = 11;
		trap1_1.type = "trap";
		trap1_1.team = playerNumber;
		trap1_1.X = setup[2][22];
		trap1_1.Y = setup[2][23];
		allPieces[11] = trap1_1;

		var trap2_1 = new Piece();
		trap2_1.strength = 11;
		trap2_1.type = "trap";
		trap2_1.team = playerNumber;
		trap2_1.X = setup[2][24];
		trap2_1.Y = setup[2][25];
 		allPieces[12] = trap2_1;
 
 		var importantThing_1 = new Piece();
 		importantThing_1.strength = 11;
 		importantThing_1.type = "important thing";
 		importantThing_1.team = playerNumber;
 		importantThing_1.X = setup[2][26];
 		importantThing_1.Y = setup[2][27];
 		allPieces[13] = importantThing_1;
 
 		++numClients;
 	}
 	else if (playerNumber == 2) {
 		var commander_2 = new Piece();
 		commander_2.strength = 6;
 		commander_2.type = "commander";
 		commander_2.team = playerNumber;
 		commander_2.X = setup[2][0];
 		commander_2.Y = setup[2][1];
 		allPieces[14] = commander_2;
 
 		var captain_2 = new Piece();
 		captain_2.strength = 5;
 		captain_2.type = "captain";
 		captain_2.team = playerNumber;
 		captain_2.X = setup[2][2];
 		captain_2.Y = setup[2][3];
 		allPieces[15] = captain_2;
 
 		var soldier1_2 = new Piece();
 		soldier1_2.strength = 4;
 		soldier1_2.type = "soldier";
 		soldier1_2.team = playerNumber;
 		soldier1_2.X = setup[2][4];
 		soldier1_2.Y = setup[2][5];
 		allPieces[16] = soldier1_2;
 
 		var soldier2_2 = new Piece();
 		soldier2_2.strength = 4;
 		soldier2_2.type = "soldier";
 		soldier2_2.team = playerNumber;
 		soldier2_2.X = setup[2][6];
 		soldier2_2.Y = setup[2][7];
                allPieces[17] = soldier2_2;

		var engineer1_2 = new Piece();
		engineer1_2.strength = 3;
		engineer1_2.type = "engineer";
		engineer1_2.team = playerNumber;
		engineer1_2.X = setup[2][8];
		engineer1_2.Y = setup[2][9];
		allPieces[18] = engineer1_2;

		var engineer2_2 = new Piece();
		engineer2_2.strength = 3;
		engineer2_2.type = "engineer";
		engineer2_2.team = playerNumber;
		engineer2_2.X = setup[2][10];
		engineer2_2.Y = setup[2][11];
		allPieces[19] = engineer2_2;

		var rider1_2 = new Piece();
		rider1_2.strength = 2;
		rider1_2.type = "rider";
		rider1_2.team = playerNumber;
		rider1_2.X = setup[2][12];
		rider1_2.Y = setup[2][13];
		allPieces[20] = rider1_2;

		var rider2_2 = new Piece();
		rider2_2.strength = 2;
		rider2_2.type = "rider";
		rider2_2.team = playerNumber;
		rider2_2.X = setup[2][14];
		rider2_2.Y = setup[2][15];
		allPieces[21] = rider2_2;

		var assasin_2 = new Piece();
		assasin_2.strength = 1;
		assasin_2.type = "assassin";
		assasin_2.team = playerNumber;
		assasin_2.X = setup[2][16];
		assasin_2.Y = setup[2][17];
		allPieces[22] = assasin_2;

		var archer_2 = new Piece();
		archer_2.strength = 1;
		archer_2.type = "archer";
		archer_2.team = playerNumber;
		archer_2.X = setup[2][18];
		archer_2.Y = setup[2][19];
		allPieces[23] = archer_2;

		var mystic_2 = new Piece();
		mystic_2.strength = 1;
		mystic_2.type = "mystic";
		mystic_2.team = playerNumber;
		mystic_2.X = setup[2][20];
		mystic_2.Y = setup[2][21];
		allPieces[24] = mystic_2;

		var trap1_2 = new Piece();
		trap1_2.strength = 11;
		trap1_2.type = "trap";
		trap1_2.team = playerNumber;
		trap1_2.X = setup[2][22];
		trap1_2.Y = setup[2][23];
		allPieces[25] = trap1_2;

		var trap2_2 = new Piece();
		trap2_2.strength = 6;
		trap2_2.type = "trap";
		trap2_2.team = playerNumber;
		trap2_2.X = setup[2][24];
		trap2_2.Y = setup[2][25];
		allPieces[26] = trap2_2;

		var importantThing_2 = new Piece();
		importantThing_2.strength = 11;
		importantThing_2.type = "important thing";
		importantThing_2.team = playerNumber;
		importantThing_2.X = setup[2][26];
		importantThing_2.Y = setup[2][27];
		allPieces[27] = importantThing_2;

		++numClients;
	}

	// If both players have connected, signal start game
	if (numClients == 2) {
		//creating three rocks
		var rock1 = new Piece();
		rock1.strength = 17;
		rock1.type = "boulder";
		rock1.team = 3;
		rock1.X = 2;
		rock1.Y = 4;
		allPieces[28] = rock1;
		
		var rock2 = new Piece();
		rock2.strength = 17;
		rock2.type = "boulder";
		rock2.team = 3;
		rock2.X = 4;
		rock2.Y = 5;
		allPieces[29] = rock2;
		
		var rock3 = new Piece();
		rock3.strength = 17;
		rock3.type = "boulder";
		rock3.team = playerNumber;
		rock3.X = 8;
		rock3.Y = 4;
		allPieces[30] = rock3;
		
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
	var actionType = moveData[5]; // 1->normal, 2->archer
	var playerNumber = moveData[6];

	// Only execute if move is valid
	if (validMove(xOld, yOld, xNew, yNew)) {
		if (spaceEmpty(xNew, yNew)) {
			// We need to update piece position in allPieces
			// mInd -> moving index
			var mInd = getPieceIndex(xOld, yOld);
			allPieces[mInd].X = xNew;
			allPieces[mInd].Y = yNew;

			// Just signal a simple move
			var tempArray = [xOld, yOld, xNew, yNew];
			console.log(tempArray);
			io.sockets.emit("simple move", tempArray);
		}
		else {
			// If space not empty, then handle attack
			resolveConflict(xOld, yOld, xNew, yNew);
		}
	}
}

function resolveConflict(xOld, yOld, xNew, yNew) {
	// mInd -> moving piece index, aInd -> attacked piece index
	var mInd = getPieceIndex(xOld, yOld);
	var aInd = getPieceIndex(xNew, yNew);
	var moving = allPieces[mInd];
	var attacked = allPieces[aInd];

	// Handle special cases
	if (attacked.type == "important thing") {
		var tempArray = [moving.team];
		io.sockets.emit("game over", tempArray);
	}
	else if (attacked.type == "trap") {
		if (moving.type == "engineer") {
			// Engineer disables trap
			// Move the engineer, then remove trap from allPieces
			allPieces[mInd].X = xNew;
			allPieces[mInd].Y = yNew;
			allPieces.splice(aInd, 1);
			if (moving.team == 1) {
				var tempArray = [1, 1, xOld, yOld, xNew, yNew, attacked.type, ""];
				io.sockets.emit("resolve conflict", tempArray);
			}
			else if (moving.team == 2) {
				var tempArray = [2, 2, xOld, yOld, xNew, yNew, attacked.type, ""];
				io.sockets.emit("resolve conflict", tempArray);
			}
		}
		else {
			// Anything else dies along with the trap
			// Need to destroy both pieces (but destroy higher index first!)
			if (aInd > mInd) {
				allPieces.splice(aInd, 1);
				allPieces.splice(mInd, 1);
			}
			else {
				allPieces.splice(mInd, 1);
				allPieces.splice(aInd, 1);
			}
			var tempArray = [moving.team, 0, xOld, yOld, xNew, yNew, attacked.type, moving.type];
			io.sockets.emit("resolve conflict", tempArray);
		}
	}
	else if (attacked.type == "commander" && moving.type == "assassin") {
		// Assassin beats commander when assassin attacks
		// Move the assassin, then remove commander from allPieces
		allPieces[mInd].X = xNew;
		allPieces[mInd].Y = yNew;
		allPieces.splice(aInd, 1);
		if (moving.team == 1) {
			var tempArray = [1, 1, xOld, yOld, xNew, yNew, attacked.type, ""];
			io.sockets.emit("resolve conflict", tempArray);
		}
		else if (moving.team == 2) {
			var tempArray = [2, 2, xOld, yOld, xNew, yNew, attacked.type, ""];
			io.sockets.emit("resolve conflict", tempArray);
		}
	}
	// Now handle normal case based on strength alone
	else if (moving.strength > attacked.strength) {
		// Need to move piece and destroy attacked piece
		// Move piece first
		allPieces[mInd].X = xNew;
		allPieces[mInd].Y = yNew;
		allPieces.splice(aInd, 1);
		// Sent message is based on who's turn it was
		if (moving.team == 1) {
			var tempArray = [1, 1, xOld, yOld, xNew, yNew, attacked.type, ""];
			io.sockets.emit("resolve conflict", tempArray);
		}
		else if (moving.team == 2) {
			var tempArray = [2, 2, xOld, yOld, xNew, yNew, attacked.type, ""];
			io.sockets.emit("resolve conflict", tempArray);
		}
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
		var tempArray = [moving.team, 0, xOld, yOld, xNew, yNew, attacked.type, moving.type];
		io.sockets.emit("resolve conflict", tempArray);
	}
	else if (moving.strength < attacked.strength) {
		// Need to destroy the piece that moved
		allPieces.splice(mInd, 1);
		if (moving.team == 1) {
			var tempArray = [1, 2, xOld, yOld, xNew, yNew, moving.type, ""];
			io.sockets.emit("resolve conflict", tempArray);
		}
		else if (moving.team == 2) {
			var tempArray = [2, 1, xOld, yOld, xNew, yNew, moving.type, ""];
			io.sockets.emit("resolve conflict", tempArray);
		}
	}
}

// Determine if a requested move is valid, if so return true, return false otherwise
function validMove(xOld, yOld, xNew, yNew) {
	// mInd -> moving piece index, aInd -> attacked piece index
	var mInd = getPieceIndex(xOld, yOld);
	var aInd = getPieceIndex(xNew, yNew);
	var moving = allPieces[mInd];
	var attacked = allPieces[aInd];
		
	if (xNew < 1 || xNew > 8 || yNew < 1 || yNew > 8) {
		var message = "Pieces cannot move off of the board.";
		var tempArray = [xOld, yOld, message];
		io.sockets.emit('invalid move', tempArray);
		return false;
	}

	// All pieces must keep the same x coordinate OR the same y coordinate when moving
	if (xOld != xNew && yOld != yNew) {
		var message = "Pieces cannot move diagnally";
		var tempArray = [xOld, yOld, message];
		io.sockets.emit('invalid move', tempArray);
		return false;
	}

	// All the pieces that can only move one space
	if (moving.type == "mystic" || moving.type == "assassin" ||
			moving.type == "engineer" || moving.type == "soldier" ||
			moving.type == "captain" || moving.type == "commander") {
		
		if (Math.abs(xOld - xNew) > 1 || Math.abs(yOld - yNew) > 1) {
			// Trying to move a piece too far
			var message = moving.type + " cannot move that far.";
			var tempArray = [xOld, yOld, message];
			io.sockets.emit('invalid move', tempArray);
			return false;
		}
	}
	
	// Riders cannot move through other pieces
	if (moving.type == "rider") {
		var xMoveDist = Math.abs(xOld - xNew);
		var yMoveDist = Math.abs(yOld - yNew);

		var message = "Riders cannot move through other pieces.";
		var tempArray = [xOld, yOld, message];

		// Test horizontal
		for (var i = 1; i < xMoveDist; ++i) {
			if (!spaceEmpty((xOld + i), yOld) && (i + 1) != xMoveDist) {
				io.sockets.emit('invalid move', tempArray);
				return false;
			}
		}

		// Test vertical
		for (var i = 1; i < yMoveDist; ++i) {
			if (!spaceEmpty(xOld, (yOld + 1)) && (i + 1) != yMoveDist) {
				io.sockets.emit('invalid move', tempArray);
				return false;
			}
		}
	}

	// Trap and Important Thing are immobile
	if (moving.type == "trap" || moving.type == "important thing") {
		var message = "The Important Thing and Traps cannot be moved.";
		var tempArray = [xOld, yOld, message];
		io.sockets.emit('invalid move', tempArray);
		return false;
	}

	if (!spaceEmpty(xNew, yNew)) {
		// Pieces on the same team cannot attack each other
		if (moving.team == attacked.team) {
			var message = "Pieces on the same team cannot attack each other.";
			var tempArray = [xOld, yOld, message];
			io.sockets.emit('invalid move', tempArray);
			return false;
		}
		else if (attacked.type == "boulder") {
			var message = "Pieces cannot move onto boulders.";
			var tempArray = [xOld, yOld, message];
			io.sockets.emit('invalid move', tempArray);
			return false;
		}
	}
	return true;
}

function checkMystic(xOld, yOld, xNew, yNew) {
	var pieceIndOld = getPieceIndex(xOld, yOld);
	var pieceIndNew = getPieceIndex(xNew, yNew);
	var pieceWithOlInd = allPieces[pieceIndOld]
	var pieceToBeSeen = allPieces[pieceIndNew];
	
	//checks whether the piece is mystic or not
		if(pieceWithOlInd.type == "mystic") {
			
			var tempArray = [xNew, yNew, pieceToBeSeen];
			io.sockets.emit('mystic', tempArray);
		}
		else {
			return;
		}
}
