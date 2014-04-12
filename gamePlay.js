
//create socket for communication
var socket = io.connect('http://' + document.location.host);

//listen to server
socket.on('start game', setBoard);
socket.on('resolve conflict', resolveConflict);
socket.on('simple move', simpleMove);
socket.on('invalid move', invalidMove);
socket.on('game over', gameOver);
socket.on('mystic', showAroundMystic);
socket.on('boulder locations', initializeBoulders);

// Client is ready to recieve boulder locations
socket.emit("send boulders");

//put all of the piece locations into an array and send to server
//also update the page by removing old html elements and adding new ones
function startGame(){

	//if not all pieces have been placed then just give the default setup
	for (var i=0; i < pieceArray.length; i++){
		if (pieceArray[i].gameGridY > 8){
			notify("You had at least one piece off the board so you were given the default setup");
			setup();
			startGame();
		}
	}

	playerTurn = '1';
	resultArray[0] = "setup";
	resultArray[1] = playerNum;

	locationArray[0] = commanderDragger.gameGridX;
	locationArray[1] = orient(playerNum, commanderDragger.gameGridY);
	locationArray[2] = captainDragger.gameGridX;
	locationArray[3] = orient(playerNum, captainDragger.gameGridY);
	locationArray[4] = soldier1Dragger.gameGridX;
	locationArray[5] = orient(playerNum, soldier1Dragger.gameGridY);
	locationArray[6] = soldier2Dragger.gameGridX;
	locationArray[7] = orient(playerNum, soldier2Dragger.gameGridY);
	locationArray[8] = engineer1Dragger.gameGridX;
	locationArray[9] = orient(playerNum, engineer1Dragger.gameGridY);
	locationArray[10] = engineer2Dragger.gameGridX;
	locationArray[11] = orient(playerNum, engineer2Dragger.gameGridY);		
	locationArray[12] = rider1Dragger.gameGridX;
	locationArray[13] = orient(playerNum, rider1Dragger.gameGridY);
	locationArray[14] = rider2Dragger.gameGridX;
	locationArray[15] = orient(playerNum, rider2Dragger.gameGridY);
	locationArray[16] = assassinDragger.gameGridX;
	locationArray[17] = orient(playerNum, assassinDragger.gameGridY);
	locationArray[18] = archerDragger.gameGridX;
	locationArray[19] = orient(playerNum, archerDragger.gameGridY);	
	locationArray[20] = mysticDragger.gameGridX;
	locationArray[21] = orient(playerNum, mysticDragger.gameGridY);		
	locationArray[22] = trap1Dragger.gameGridX;
	locationArray[23] = orient(playerNum, trap1Dragger.gameGridY);	
	locationArray[24] = trap2Dragger.gameGridX;
	locationArray[25] = orient(playerNum, trap2Dragger.gameGridY);		
	locationArray[26] = importantThingDragger.gameGridX;
	locationArray[27] = orient(playerNum, importantThingDragger.gameGridY);

	resultArray[2] = locationArray;
	//send return to server			
	socket.emit("setup", resultArray);

	hideElem("infoScroll");
	hideElem("setupCanvas");
	hideElem("defaultButton");
	hideElem("startButton");
	hideElem("timer");
	showElem("gameCanvas");
	showElem("lostPiecesCanvas");
	showElem("capPiecesCanvas");	
	showElem("notification");	

}

//message received that someone has won
function gameOver(gameOverArray){
	var playerWon = gameOverArray[0];
	if (playerWon == 1 && playerNum == 1){
		alert("You won! :)");
	}	
	else if (playerWon == 1 && playerNum == 2){
		alert("Sad day, you lost... :(");
	}	
	else if (playerWon == 2 && playerNum == 1){
		alert("Sad day, you lost... :(");
	}	
	else if (playerWon == 2 && playerNum == 2){
		alert("You won! :)");
	}							
	window.location.href = "../";
}

var playerLabels = new Array();
function showAroundMystic(data) {
	var teamNumber = data[0];
	if (teamNumber == playerNum) {

		// Get rest of data
		var xCur = data[1];
		var yCur = orient(playerNum, data[2]);
		var p1Name = data[3];
		var p2Name = data[4];
		var p3Name = data[5];
		var p4Name = data[6];

		// Remove old labels
		while (playerLabels.length > 0) {
			var b = playerLabels.pop();
			var l = b.getChildByName("label");
			b.removeChild(b.getChildByName("label"));
		}

		// Piece above mystic
		if (p1Name != "") {
			var label = new createjs.Text(p1Name, "10px Arial", "#000000");
			label.textAlign = "center";
			label.x = 28;
			label.y = 15;
			label.name = "label";
			var piece;
			if (playerNum == 1) {
				piece = pieceAtLocation(xCur, yCur - 1);
			}
			else if (playerNum == 2) {
				// Y coordinates have to be different for player 2
				piece = pieceAtLocation(xCur, yCur + 1);
			}
			piece.addChild(label);
			playerLabels.push(piece);
		}
		// Piece to the right of the mystic
		if (p2Name != "") {
			var label = new createjs.Text(p2Name, "10px Arial", "#000000");
			label.textAlign = "center";
			label.x = 28;
			label.y = 15;
			label.name = "label";
			var piece = pieceAtLocation(xCur + 1, yCur);
			piece.addChild(label);
			playerLabels.push(piece);
		}
		// Piece below mystic
		if (p3Name != "") {
			var label = new createjs.Text(p3Name, "10px Arial", "#000000");
			label.textAlign = "center";
			label.x = 28;
			label.y = 15;
			label.name = "label";
			var piece;
			if (playerNum == 1) {
				piece = pieceAtLocation(xCur, yCur + 1);
			}
			else if (playerNum == 2) {
				// Y coordinates have to be different for player 2
				piece = pieceAtLocation(xCur, yCur - 1);
			}
			piece.addChild(label);
			playerLabels.push(piece);
		}
		// Piece to the left of the mystic
		if (p4Name != "") {
			var label = new createjs.Text(p4Name, "10px Arial", "#000000");
			label.textAlign = "center";
			label.x = 28;
			label.y = 15;
			label.name = "label";
			var piece = pieceAtLocation(xCur - 1, yCur);
			piece.addChild(label);
			playerLabels.push(piece);
		}
		gameStage.update();
	}
}

// Store the board location of the last created direction of movement arrow
// Used to delete arrow after next move
var lastMoveArrow;

//message recieved that contains the results of a conflict
function resolveConflict(conflictArray){
	var playerMoved = conflictArray[0];
	var outcome = conflictArray[1];
	var xOld = conflictArray[2];
	var yOld = orient(playerNum, conflictArray[3]);
	var xNew = conflictArray[4];
	var yNew = orient(playerNum, conflictArray[5]);

	var attacked = pieceAtLocation(xNew, yNew);
	var attacker = pieceAtLocation(xOld, yOld);

	// If mystic ever attacks, or is attacked, it get's destroyed (or game over)
	// So we need to update pieces shown around it
	if (attacked.pieceType == "Mystic") {
		if (playerMoved == 1 && playerNum == 2) {
			showAroundMystic([2, xNew, yNew, "", "", "", ""]);
		}
		else if (playerMoved == 2 && playerNum == 1) {
			showAroundMystic([1, xNew, yNew, "", "", "", ""]);
		}
	}
	else if (attacker.pieceType == "Mystic") {
		showAroundMystic([playerMoved, xOld, yOld, "", "", "", ""]);
	}


	if (outcome == 0){ //both die
		var p1 = pieceAtLocation(xOld, yOld);
		var p2 = pieceAtLocation(xNew, yNew);
		removeClickable(p1);
		removeClickable(p2);
		notify("A " + p1.pieceType + " and a " + p2.pieceType + " were both destroyed.");
	}

	if (outcome == 1 && playerMoved == 1){ //player1 wins
		var loser = pieceAtLocation(xNew, yNew); //piece moved onto
		var winner = pieceAtLocation(xOld, yOld);
		removeClickable(loser);
		if (playerNum == 1)
			notify("You captured your opponent's " + loser.pieceType);
		else
			notify("Your " + loser.pieceType + " was taken by your opponent's " + winner.pieceType);
	}
	else if (outcome == 2 && playerMoved == 1){ //player2 wins
		var loser = pieceAtLocation(xOld, yOld); //piece moved 
		var winner = pieceAtLocation(xNew, yNew);
		removeClickable(loser);
		if (playerNum == 2)
			notify("You captured your opponent's " + loser.pieceType);
		else
			notify("Your " + loser.pieceType + " was taken by your opponent's " + winner.pieceType);		
	}
	else if (outcome == 1 && playerMoved == 2){ 
		var loser = pieceAtLocation(xOld, yOld); //piece moved 
		var winner = pieceAtLocation(xNew, yNew);
		removeClickable(loser);
		if (playerNum == 1)
			notify("You captured your opponent's " + loser.pieceType);
		else
			notify("Your " + loser.pieceType + " was taken by your opponent's " + winner.pieceType);			
	}
	else if (outcome == 2 && playerMoved == 2){ 
		var loser = pieceAtLocation(xNew, yNew); 
		var winner = pieceAtLocation(xOld, yOld);
		removeClickable(loser);		
		if (playerNum == 2)
			notify("You captured your opponent's " + loser.pieceType);
		else
			notify("Your " + loser.pieceType + " was taken by your opponent's " + winner.pieceType);	
	}	
	else if (outcome == 3 && playerMoved == 1){ //failed archer attack
		var attacked = pieceAtLocation(xNew, yNew);
		if (playerNum == 1)
			notify("The piece you attacked has a strength higher than 3.");
		else {
			notify("Your " + attacked.pieceType + " was attacked by an archer.");
			// Draw a circle on the attacked piece
			var c = new createjs.Shape();
			c.graphics.beginFill("#FF0000").drawCircle(29, 30, 7);
			c.name = "highlightIcon";
			attacked.addChild(c);
			highlightSpaces.push(attacked);
		}
	}
	else if (outcome == 3 && playerMoved == 2){ //failed archer attack
		var attacked = pieceAtLocation(xNew, yNew);
		if (playerNum == 2)
			notify("The piece you attacked has a strength higher than 3.");
		else {
			notify("Your " + attacked.pieceType + " was attacked by an archer.");
			// Draw a circle on the attacked piece
			var c = new createjs.Shape();
			c.graphics.beginFill("#FF0000").drawCircle(29, 30, 7);
			c.name = "highlightIcon";
			attacked.addChild(c);
			highlightSpaces.push(attacked);
		}
	}
	else if (outcome == 4 && playerMoved == 1){
		var loser = pieceAtLocation(xNew, yNew);
		removeClickable(loser);		
		if (playerNum == 1)
			notify("You defeated your opponent's " + loser.pieceType + ".");
		else
			notify("Your " + loser.pieceType + " was defeated by your opponent's archer.");
	}
	else if (outcome == 4 && playerMoved == 2){
		var loser = pieceAtLocation(xNew, yNew);
		removeClickable(loser);		
		if (playerNum == 2)
			notify("You defeated your opponent's " + loser.pieceType + ".");
		else
			notify("Your " + loser.pieceType + " was defeated by your opponent's archer.");
	}

	// Always remove last direction arrow, even if archer attacked
	if (lastMoveArrow !== undefined) {
		lastMoveArrow.removeChild(lastMoveArrow.getChildByName("moveArrow"));
	}
	if (outcome != 3 && outcome != 4) {
		//move the piece
		for(var i=0; i<pieceArray.length; i++){
			if (pieceArray[i].gameGridX == xOld && pieceArray[i].gameGridY == yOld){
				pieceArray[i].gameGridX = xNew;
				pieceArray[i].gameGridY = yNew;
				pieceArray[i].x = ((xNew - 1) * 60) + 2;
				pieceArray[i].y = ((yNew - 1) * 60) + 2;
			}
		}

		// Handle adding direction of movement arrow
		lastMoveArrow = board[xOld][yOld];
		if (playerNum != playerTurn) {
			showMovementArrow(xOld, yOld, xNew, yNew);
		}
	}

	if(playerTurn == '1'){
		playerTurn = '2';
	}
	else{
		playerTurn = '1';
	}

	updateTurnIndicator();
	gameStage.update();
}

//when a clickable is defeated set it off the board 
//and pieces are moved to the pieces captured and pieces
//lost canvas
function removeClickable(clickable){
	if(playerNum == 1){
		if(clickable.team == 1){
			pieceLost(clickable);
		}
		else{
			pieceCaptured(clickable);
		}
	}
	else{
		if(clickable.team == 2){
			pieceLost(clickable);
		}
		else{
			pieceCaptured(clickable);
		}

	}
	clickable.gameGridX = -1;
	clickable.gameGridY = -1;
	gameStage.removeChild(clickable);
}

//move a piece into an open square
function simpleMove(moveArray){
	var xOld = moveArray[0];
	var yOld = orient(playerNum, moveArray[1]);
	var xNew = moveArray[2];
	var yNew = orient(playerNum, moveArray[3]); 

	// Handle adding and removing direction of movement arrow
	if (lastMoveArrow !== undefined) {
		lastMoveArrow.removeChild(lastMoveArrow.getChildByName("moveArrow"));
	}
	lastMoveArrow = board[xOld][yOld];
	if (playerNum != playerTurn) {
		showMovementArrow(xOld, yOld, xNew, yNew);
	}

	for(var i=0; i<pieceArray.length; i++){
		if (pieceArray[i].gameGridX == xOld && pieceArray[i].gameGridY == yOld){
			pieceArray[i].gameGridX = xNew;
			pieceArray[i].gameGridY = yNew;
			pieceArray[i].x = ((xNew - 1) * 60) + 2;
			pieceArray[i].y = ((yNew - 1) * 60) + 2;
		}
	}

	if(playerTurn == '1'){
		playerTurn = '2';
	}
	else{
		playerTurn = '1';
	}

	updateTurnIndicator();
	gameStage.update();
}

//if the server does not think the move sent was valid
function invalidMove(data){
	alert("Error: " + data[2]);
	// [“invalid move”, xOld, yOld, message]
}

//used to know which piece needs to be moved in movePiece() updated in pieceClick
var selectedPiece = p1importantThingClickable;
//list of current pieces possible move choices
var choices = [];

function removeChoices(){
	while(choices.length > 0){
		var cur = choices.pop();
		cur.removeAllEventListeners();
	}
	while (highlightSpaces.length > 0) {
		var h = highlightSpaces.pop();
		h.removeChild(h.getChildByName("highlightIcon"));
	}
}

//called when a piece owned by a player is clicked.
function pieceClick(event){
	//clear previously clicked piece's choices
	removeChoices();

	selectedPiece = event.target.parent;
	highlightPossibleMoves(selectedPiece);

	if(selectedPiece.pieceType == "Rider"){
		var count = 1;
		while(possibleActionDest(selectedPiece.gameGridX, selectedPiece.gameGridY+count))
			count++;

		count = 1;
		while(possibleActionDest(selectedPiece.gameGridX, selectedPiece.gameGridY-count))
			count++;

		count = 1;
		while(possibleActionDest(selectedPiece.gameGridX+count, selectedPiece.gameGridY))
			count++;

		count = 1;
		while(possibleActionDest(selectedPiece.gameGridX-count, selectedPiece.gameGridY))
			count++;
	}
	else if(selectedPiece.pieceType == "Archer"){
		if(possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY+1))
			possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY+2,"shot");
		if(possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY-1))
			possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY-2,"shot");
		if(possibleActionDest(selectedPiece.gameGridX+1,selectedPiece.gameGridY))
			possibleActionDest(selectedPiece.gameGridX+2,selectedPiece.gameGridY,"shot");
		if(possibleActionDest(selectedPiece.gameGridX-1,selectedPiece.gameGridY))
			possibleActionDest(selectedPiece.gameGridX-2,selectedPiece.gameGridY,"shot");
	}
	else if(selectedPiece.pieceType != "Trap" && selectedPiece.pieceType != "Important Thing"){
		possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY+1);
		possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY-1);
		possibleActionDest(selectedPiece.gameGridX+1,selectedPiece.gameGridY);
		possibleActionDest(selectedPiece.gameGridX-1,selectedPiece.gameGridY);

	}

	gameStage.update();
}


var highlightSpaces = new Array();
// Does what it says, takes a piece clickable, p, as parameter
function highlightPossibleMoves(p) {

	// Highlight piece selected
	var border = new createjs.Shape();
	border.graphics.beginStroke("#CCCC00");
	border.graphics.setStrokeStyle(3);
	border.snapToPixel = true;
	border.graphics.drawRect(0, 0, 56, 56);
	border.name = "highlightIcon";
	p.addChild(border);
	highlightSpaces.push(p);

	// Don't highlight moves during opponent's turn
	if (playerNum != playerTurn) {
		return;
	}

	if (p.pieceType == "Rider") {

		// Look above rider for open moves
		for (var i = -1; p.gameGridY + i > 0; --i) {
			var above = pieceAtLocation(p.gameGridX, p.gameGridY + i);
			if (above == false) {
				var h = new createjs.Shape();
				h.graphics.beginFill("#CCCC00").drawRect(15,15,30,30);
				h.name = "highlightIcon";
				board[p.gameGridX][p.gameGridY + i].addChild(h);
				highlightSpaces.push(board[p.gameGridX][p.gameGridY + i]);
			}
			else if (above.team != playerNum && above.pieceType != "rock") {
				var h = new createjs.Shape();
				h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
				h.name = "highlightIcon";
				above.addChild(h);
				highlightSpaces.push(above);
				break; // Done looking here
			}
			else {
				break; // Done looking here
			}
		}
		// Look to the right of rider for open moves
		for (var i = 1; p.gameGridX + i < 10; ++i) {
			var right = pieceAtLocation(p.gameGridX + i, p.gameGridY);
			if (right == false) {
				var h = new createjs.Shape();
				h.graphics.beginFill("#CCCC00").drawRect(15,15,30,30);
				h.name = "highlightIcon";
				board[p.gameGridX + i][p.gameGridY].addChild(h);
				highlightSpaces.push(board[p.gameGridX + i][p.gameGridY]);
			}
			else if (right.team != playerNum && right.pieceType != "rock") {
				var h = new createjs.Shape();
				h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
				h.name = "highlightIcon";
				right.addChild(h);
				highlightSpaces.push(right);
				break; // Done looking here
			}
			else {
				break; // Done looking here
			}
		}
		// Look below rider for open moves
		for (var i = 1; p.gameGridY + i < 9; ++i) {
			var below = pieceAtLocation(p.gameGridX, p.gameGridY + i);
			if (below == false) {
				var h = new createjs.Shape();
				h.graphics.beginFill("#CCCC00").drawRect(15,15,30,30);
				h.name = "highlightIcon";
				board[p.gameGridX][p.gameGridY + i].addChild(h);
				highlightSpaces.push(board[p.gameGridX][p.gameGridY + i]);
			}
			else if (below.team != playerNum && below.pieceType != "rock") {
				var h = new createjs.Shape();
				h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
				h.name = "highlightIcon";
				below.addChild(h);
				highlightSpaces.push(below);
				break; // Done looking here
			}
			else {
				break; // Done looking here
			}
		}
		// Look to the left of rider for open moves
		for (var i = -1; p.gameGridX + i > 0; --i) {
			var left = pieceAtLocation(p.gameGridX + i, p.gameGridY);
			if (left == false) {
				var h = new createjs.Shape();
				h.graphics.beginFill("#CCCC00").drawRect(15,15,30,30);
				h.name = "highlightIcon";
				board[p.gameGridX + i][p.gameGridY].addChild(h);
				highlightSpaces.push(board[p.gameGridX + i][p.gameGridY]);
			}
			else if (left.team != playerNum && left.pieceType != "rock") {
				var h = new createjs.Shape();
				h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
				h.name = "highlightIcon";
				left.addChild(h);
				highlightSpaces.push(left);
				break; // Done looking here
			}
			else {
				break; // Done looking here
			}
		}
	}
	// Regular piece moving (including archer close range)
	else if (p.pieceType != "Trap" && p.pieceType != "Important Thing") {
		var above = pieceAtLocation(p.gameGridX, p.gameGridY - 1);
		var right = pieceAtLocation(p.gameGridX + 1, p.gameGridY);
		var below = pieceAtLocation(p.gameGridX, p.gameGridY + 1);
		var left = pieceAtLocation(p.gameGridX - 1, p.gameGridY);
		// Empty space above
		if (above == false && (p.gameGridY - 1) > 0) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#CCCC00").drawRect(15, 15, 30, 30);
			h.name = "highlightIcon";
			board[p.gameGridX][p.gameGridY - 1].addChild(h);
			highlightSpaces.push(board[p.gameGridX][p.gameGridY - 1]);
		}
		else if ((p.gameGridY - 1) > 0 && above.team != playerNum && above.pieceType != "rock") {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
			h.name = "highlightIcon";
			above.addChild(h);
			highlightSpaces.push(above);
		}
		// Empty space to the right
		if (right == false && (p.gameGridX + 1) < 10) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#CCCC00").drawRect(15, 15, 30, 30);
			h.name = "highlightIcon";
			board[p.gameGridX + 1][p.gameGridY].addChild(h);
			highlightSpaces.push(board[p.gameGridX + 1][p.gameGridY]);
		}
		else if ((p.gameGridX + 1) < 10 && right.team != playerNum && right.pieceType != "rock") {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
			h.name = "highlightIcon";
			right.addChild(h);
			highlightSpaces.push(right);
		}
		// Empty space below
		if (below == false && (p.gameGridY + 1) < 9) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#CCCC00").drawRect(15, 15, 30, 30);
			h.name = "highlightIcon";
			board[p.gameGridX][p.gameGridY + 1].addChild(h);
			highlightSpaces.push(board[p.gameGridX][p.gameGridY + 1]);
		}
		else if ((p.gameGridY + 1) < 9 && below.team != playerNum && below.pieceType != "rock") {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
			h.name = "highlightIcon";
			below.addChild(h);
			highlightSpaces.push(below);
		}
		// Empty space to the left
		if (left == false && (p.gameGridX - 1) > 0) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#CCCC00").drawRect(15, 15, 30, 30);
			h.name = "highlightIcon";
			board[p.gameGridX - 1][p.gameGridY].addChild(h);
			highlightSpaces.push(board[p.gameGridX - 1][p.gameGridY]);
		}
		else if ((p.gameGridX - 1) > 0 && left.team != playerNum && left.pieceType != "rock") {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawRect(20, 20, 17, 17);
			h.name = "highlightIcon";
			left.addChild(h);
			highlightSpaces.push(left);
		}
	}

	// Archer long range highlighting
	if (p.pieceType == "Archer") {
		var above = pieceAtLocation(p.gameGridX, p.gameGridY - 2);
		var right = pieceAtLocation(p.gameGridX + 2, p.gameGridY);
		var below = pieceAtLocation(p.gameGridX, p.gameGridY + 2);
		var left = pieceAtLocation(p.gameGridX - 2, p.gameGridY);
		// Piece to shoot above
		if (above !== false && (p.gameGridY - 2) > 0 &&
				above.team != playerNum && above.pieceType != "rock" &&
				pieceAtLocation(p.gameGridX, p.gameGridY - 1) == false) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawCircle(29, 30, 7);
			h.name = "highlightIcon";
			above.addChild(h);
			highlightSpaces.push(above);
		}
		// Piece to shoot to the right
		if (right !== false && (p.gameGridX + 2) < 10 &&
				right.team != playerNum && right.pieceType != "rock" &&
				pieceAtLocation(p.gameGridX + 1, p.gameGridY) == false) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawCircle(29, 30, 7);
			h.name = "highlightIcon";
			right.addChild(h);
			highlightSpaces.push(right);
		}
		// Piece to shoot below
		if (below !== false && (p.gameGridY + 2) < 9 &&
				below.team != playerNum && below.pieceType != "rock" &&
				pieceAtLocation(p.gameGridX, p.gameGridY + 1) == false) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawCircle(29, 30, 7);
			h.name = "highlightIcon";
			below.addChild(h);
			highlightSpaces.push(below);
		}
		// Piece to shoot to the left
		if (left !== false && (p.gameGridX - 2) > 0 &&
				left.team != playerNum && left.pieceType != "rock" &&
				pieceAtLocation(p.gameGridX - 1, p.gameGridY) == false) {
			var h = new createjs.Shape();
			h.graphics.beginFill("#FF0000").drawCircle(29, 30, 7);
			h.name = "highlightIcon";
			left.addChild(h);
			highlightSpaces.push(left);
		}
	}
}

// Used in pieceClick() to set the square as clickable if moving there is legal.
//	returns true if open square
// 	returns false if non-open square
function possibleActionDest(destX, destY, actionType){
	var curPiece = pieceAtLocation(destX,destY);

	if( destX < 1 || destX > 9 || destY < 1 || destY > 8 || curPiece.team == '3'){
		return false;
	}
	if(curPiece == false){
		var temp = board[destX][destY];
		if(actionType === undefined){
			board[destX][destY].addEventListener("click", movePiece);
		}
		choices.push(board[destX][destY]);
		return true;
	}
	else if(curPiece.team != playerNum){
		if(actionType === undefined){
			curPiece.addEventListener("click", movePiece);
		}
		else if(actionType == "shot"){
			curPiece.addEventListener("click", shootPiece);
		}
		choices.push(curPiece);
	}
	return false;
}

var move = new Array();
//called when pieces a player can move the selectedPiece to are clicked.
function movePiece(event){
	removeChoices();
	if(playerTurn == playerNum){
		move[0] = "move";
		move[1] = selectedPiece.gameGridX;
		move[2] = orient(playerNum, selectedPiece.gameGridY);
		move[3] = event.currentTarget.gameGridX;
		move[4] = orient(playerNum, event.currentTarget.gameGridY);
		move[5] = 1;
		move[6] = playerNum;
		socket.emit("move", move);
	}
	else{
		notify("Not your turn");
	}
}

function shootPiece(event){
	removeChoices();
	if(playerTurn == playerNum){
		//alert("move sent");
		move[0] = "move";
		move[1] = selectedPiece.gameGridX;
		move[2] = orient(playerNum, selectedPiece.gameGridY);
		move[3] = event.currentTarget.gameGridX;
		move[4] = orient(playerNum, event.currentTarget.gameGridY);
		move[5] = 2;
		move[6] = playerNum;
		socket.emit("move", move);
	}
	else{
		notify("Not your turn");
	}
}
