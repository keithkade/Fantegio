//the player number is passed as a url argument
var urlName = window.location.search.substring(1);
var playerNum = unescape(urlName);

//player one always start first
var playerTurn = '1';

//this is oddly shaped because 2d arrays are indexed by [row][column] and also because they are zero based
var isGameLocOccupied = [
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//this array keeps track of the pieces lost by each player
var piecesLost = new Array();

//this array keeps track of the pieces captured by each player
var piecesCaptured = new Array();

//when game starts we hide and/or show html elements
function hideElem(divId){
   document.getElementById(divId).style.display = 'none';
}

function showElem(divId){
   document.getElementById(divId).style.display = 'block';
}

//creates initial gameGrid x and y for draggers. also establishes initial lastX and lastY
//lastX and lastY are used for collision detection
function initializePieceXY (dragger){
   convertToGameGridXY(dragger);
   dragger.lastX = dragger.gameGridX;
   dragger.lastY = dragger.gameGridY;
}

//converts canvas x and y to gameGrid x and y for draggers
function convertToGameGridXY (dragger){
   dragger.gameGridX = (dragger.x-2)/60 + 1;
   dragger.gameGridY = (dragger.y+178)/60 + 1;	
}

//converts canvas x and y to gameGrid x and y for clickers
function addGameGridXY (clickable){
   clickable.gameGridX = (clickable.x-2)/60 + 1;
   clickable.gameGridY = (clickable.y-2)/60 + 1;	
}

var xOffset;
var yOffset;

//can cause a bug if you just click the piece and then it moves. The previous location is still marked as full
//adds drag and drop listeners
function addDragAndDrop (toDrag){
	
   //set an offset so that the the piece moves with mouse correctly
   toDrag.on("mousedown",function(evt) {
         xOffset = evt.stageX % 60;
         yOffset = evt.stageY % 60; 	
         });
         
   //move piece on drag			
   toDrag.on("pressmove",function(evt) {
         evt.currentTarget.lastX = evt.currentTarget.gameGridX;
         evt.currentTarget.lastY = evt.currentTarget.gameGridY;
         evt.currentTarget.x = evt.stageX-xOffset;
         evt.currentTarget.y = evt.stageY-yOffset;
         setupStage.update();   	
         });	

   //center piece on release of mouse
   toDrag.on("pressup", function(evt) {
         var x = evt.currentTarget.x;	
         var y = evt.currentTarget.y;
         var xRem = x % 60;
         var yRem = y % 60;
         if (xRem >= 30)
         x = x + (60 - xRem) + 2; //round up
         if (xRem < 30)
         x = x - xRem + 2; //round down
         if (yRem >= 30)
         y = y + (60 - yRem) + 2; //round up
         if (yRem < 30)
         y = y - yRem + 2; //round down	
         //do not allow dragging out of canvas or placing outside of placement area
         if(x<0)
         x=2;
         if(x>540)
         x=482;	
         if(y<120)
         y=122;
         if(y>480)
            y=422;					
         //check to ensure that we arent moving onto a piece
         if (isGameLocOccupied[(x-2)/60 + 1][(y+178)/60 + 1]){
            evt.currentTarget.x = (evt.currentTarget.gameGridX - 1)*60 + 2;
            evt.currentTarget.y = (evt.currentTarget.gameGridY - 1)*60 - 178;
         }
         //otherwise update location of piece, both on canvas and gameGrid
         else{
            evt.currentTarget.x = x;
            evt.currentTarget.y = y;
            convertToGameGridXY(evt.currentTarget);
            isGameLocOccupied[evt.currentTarget.gameGridX][evt.currentTarget.gameGridY] = 1;
            isGameLocOccupied[evt.currentTarget.lastX][evt.currentTarget.lastY] = 0;
         }
         setupStage.update(); 
   });
}

//make all the pieces drag and droppable and initialize their positions
//made this a function so it can be compressed in IDE
function initPieces(){
   addDragAndDrop(commanderDragger);
   initializePieceXY(commanderDragger);
   addDragAndDrop(captainDragger);
   initializePieceXY(captainDragger);  
   initializePieceXY(importantThingDragger);
   addDragAndDrop(importantThingDragger);
   initializePieceXY(trap1Dragger);
   addDragAndDrop(trap1Dragger);
   initializePieceXY(trap2Dragger);
   addDragAndDrop(trap2Dragger);
   initializePieceXY(archerDragger);
   addDragAndDrop(archerDragger);
   initializePieceXY(mysticDragger);
   addDragAndDrop(mysticDragger);
   initializePieceXY(rider1Dragger);
   addDragAndDrop(rider1Dragger);
   initializePieceXY(rider2Dragger);
   addDragAndDrop(rider2Dragger);
   initializePieceXY(assassinDragger);
   addDragAndDrop(assassinDragger);
   initializePieceXY(soldier1Dragger);
   addDragAndDrop(soldier1Dragger);
   initializePieceXY(soldier2Dragger);
   addDragAndDrop(soldier2Dragger);
   initializePieceXY(engineer1Dragger);
   addDragAndDrop(engineer1Dragger);
   initializePieceXY(engineer2Dragger);
   addDragAndDrop(engineer2Dragger);
}
initPieces();

//puts draggers in initial locations on default setup
function setup(){
   importantThingDragger.x = 122;
   importantThingDragger.y = 242;
   convertToGameGridXY(importantThingDragger);
   isGameLocOccupied[importantThingDragger.gameGridX][importantThingDragger.gameGridY] = 1;
   isGameLocOccupied[importantThingDragger.lastX][importantThingDragger.lastY] = 0;

   archerDragger.x = 62;
   archerDragger.y = 122;
   convertToGameGridXY(archerDragger);
   isGameLocOccupied[archerDragger.gameGridX][archerDragger.gameGridY] = 1;
   isGameLocOccupied[archerDragger.lastX][archerDragger.lastY] = 0;	

   commanderDragger.x = 182;
   commanderDragger.y = 182;
   convertToGameGridXY(commanderDragger);
   isGameLocOccupied[commanderDragger.gameGridX][commanderDragger.gameGridY] = 1;
   isGameLocOccupied[commanderDragger.lastX][commanderDragger.lastY] = 0;		

   trap1Dragger.x = 122;
   trap1Dragger.y = 182;
   convertToGameGridXY(trap1Dragger);
   isGameLocOccupied[trap1Dragger.gameGridX][trap1Dragger.gameGridY] = 1;
   isGameLocOccupied[trap1Dragger.lastX][trap1Dragger.lastY] = 0;	

   trap2Dragger.x = 362;
   trap2Dragger.y = 122;
   convertToGameGridXY(trap2Dragger);
   isGameLocOccupied[trap2Dragger.gameGridX][trap2Dragger.gameGridY] = 1;
   isGameLocOccupied[trap2Dragger.lastX][trap2Dragger.lastY] = 0;	

   captainDragger.x = 362;
   captainDragger.y = 182;
   convertToGameGridXY(captainDragger);
   isGameLocOccupied[captainDragger.gameGridX][captainDragger.gameGridY] = 1;
   isGameLocOccupied[captainDragger.lastX][captainDragger.lastY] = 0;	

   engineer1Dragger.x = 62;
   engineer1Dragger.y = 242;
   convertToGameGridXY(engineer1Dragger);
   isGameLocOccupied[engineer1Dragger.gameGridX][engineer1Dragger.gameGridY] = 1;
   isGameLocOccupied[engineer1Dragger.lastX][engineer1Dragger.lastY] = 0;	

   engineer2Dragger.x = 242;
   engineer2Dragger.y = 182;
   convertToGameGridXY(engineer2Dragger);
   isGameLocOccupied[engineer2Dragger.gameGridX][engineer2Dragger.gameGridY] = 1;
   isGameLocOccupied[engineer2Dragger.lastX][engineer2Dragger.lastY] = 0;	

   soldier1Dragger.x = 62;
   soldier1Dragger.y = 182;
   convertToGameGridXY(soldier1Dragger);
   isGameLocOccupied[soldier1Dragger.gameGridX][soldier1Dragger.gameGridY] = 1;
   isGameLocOccupied[soldier1Dragger.lastX][soldier1Dragger.lastY] = 0;	

   soldier2Dragger.x = 302;
   soldier2Dragger.y = 122;
   convertToGameGridXY(soldier2Dragger);
   isGameLocOccupied[soldier2Dragger.gameGridX][soldier2Dragger.gameGridY] = 1;
   isGameLocOccupied[soldier2Dragger.lastX][soldier2Dragger.lastY] = 0;	

   assassinDragger.x = 302;
   assassinDragger.y = 182;
   convertToGameGridXY(assassinDragger);
   isGameLocOccupied[assassinDragger.gameGridX][assassinDragger.gameGridY] = 1;
   isGameLocOccupied[assassinDragger.lastX][assassinDragger.lastY] = 0;	

   mysticDragger.x = 242;
   mysticDragger.y = 122;
   convertToGameGridXY(mysticDragger);
   isGameLocOccupied[mysticDragger.gameGridX][mysticDragger.gameGridY] = 1;
   isGameLocOccupied[mysticDragger.lastX][mysticDragger.lastY] = 0;	

   rider1Dragger.x = 2;
   rider1Dragger.y = 182;
   convertToGameGridXY(rider1Dragger);
   isGameLocOccupied[rider1Dragger.gameGridX][rider1Dragger.gameGridY] = 1;
   isGameLocOccupied[rider1Dragger.lastX][rider1Dragger.lastY] = 0;	

   rider2Dragger.x = 422;
   rider2Dragger.y = 182;
   convertToGameGridXY(rider2Dragger);	
   isGameLocOccupied[rider2Dragger.gameGridX][rider2Dragger.gameGridY] = 1;
   isGameLocOccupied[rider2Dragger.lastX][rider2Dragger.lastY] = 0;	

   setupStage.update();
}	
setupStage.update();

//to be sent to server on game start	
var resultArray = new Array();
var locationArray = new Array();


//if the timer runs out start with default setup
function gameStartOnTimeout(){   
   setup();
   startGame();
}

//return the piece at a given location, if no piece is there return false
function pieceAtLocation(x, y){
   for (var i=0; i < pieceArray.length; i++){
      if (pieceArray[i].gameGridX == x && pieceArray[i].gameGridY == y){
         return pieceArray[i];
      }
   }
   return false;
}

//switches y coordinate if neccessary for player 2
function orient(playerNum, Y_Loc){
   if(playerNum == "2"){
      return 9 - Y_Loc;
   }
   else{
      return Y_Loc;
   }
}

function updateTurnIndicator(){
	if(playerTurn == playerNum){
	   document.getElementById("turnIndicator").innerHTML = "Your turn";
	}
	else{
	   document.getElementById("turnIndicator").innerHTML = "         ";
	}
}

// Called when server emits "boulder locations" to show boulders on board setup
function initializeBoulders(locations) {
	rock1.graphics.beginFill("black").drawCircle(28, 28, 20);
	rock2.graphics.beginFill("black").drawCircle(28, 28, 20);
	rock3.graphics.beginFill("black").drawCircle(28, 28, 20);

	// Switch for player 2
	if (playerNum == 2) {
		rock1.y = (Math.abs(locations[1] - 3) - 1)  *  60 + 2;
		rock2.y = (Math.abs(locations[3] - 3) - 1)  *  60 + 2;
		rock3.y = (Math.abs(locations[5] - 3) - 1)  *  60 + 2;
	}
	else if (playerNum == 1) {
		rock2.y = (locations[3] - 1)  *  60 + 2;
		rock1.y = (locations[1] - 1)  *  60 + 2;
		rock3.y = (locations[5] - 1)  *  60 + 2;
	}

	rock1.x = (locations[0] - 1)  *  60 + 2;
	addGameGridXY(rock1);

	rock2.x = (locations[2] - 1)  *  60 + 2;
	addGameGridXY(rock2);

	rock3.x = (locations[4] - 1)  *  60 + 2;
	addGameGridXY(rock3);

	setupStage.addChild(rock1);
	setupStage.addChild(rock2);
	setupStage.addChild(rock3);
	setupStage.update();
}

// Show direction of opponent's last move
function showMovementArrow(xOld, yOld, xNew, yNew) {
	var xDif = xNew - xOld;
	var yDif = yNew - yOld;
	var moveArrow = new createjs.Shape();
	moveArrow.name = "moveArrow";

	if (xDif == 0 && yDif == 0) {
		return; // nothing moved
	}
	if (xDif > 0) {
		// Moved to the right
		moveArrow.graphics.beginFill("#CCCC00").drawPolyStar(37, 30, 15, 3, 0.5, 0);
	}
	else if (xDif < 0) {
		// Moved to the left
		moveArrow.graphics.beginFill("#CCCC00").drawPolyStar(23, 30, 15, 3, 0.5, 60);
	}
	else if (yDif > 0) {
		// Moved down
		moveArrow.graphics.beginFill("#CCCC00").drawPolyStar(30, 37, 15, 3, 0.5, 90);
	}
	else if (yDif < 0) {
		// Moved up
		moveArrow.graphics.beginFill("#CCCC00").drawPolyStar(30, 23, 15, 3, 0.5, 30);
	}
	board[xOld][yOld].addChild(moveArrow);
}

//this function adds the clickable to the pieces lost array of appropriate player
function pieceLost(clickable){
	if(playerNum == 1){
		piecesLost.push(clickable);
		drawPiecesOnLost(clickable, piecesLost.length);
		
	}
	else{
		piecesLost.push(clickable);
		drawPiecesOnLost(clickable, piecesLost.length);
	}
}


//this function adds the clickable to the pieces lost array of appropriate player
function pieceCaptured(clickable){

	if(playerNum == 1){
		//adding the content in the grey box
		var newSquare1 = new createjs.Shape();
		var newSquareText = new createjs.Text(clickable.pieceType, "10px Arial", "#000000");
		newSquareText.textAlign = "center";
		newSquareText.x = 28;
		newSquareText.y = 15;
		newSquare1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
		clickable.addChild(newSquare1, newSquareText);
		
		//adding the new clickable in the piecesCaptured array and then displaying it
		piecesCaptured.push(clickable);
		drawPiecesOnCaptured(clickable,piecesCaptured.length);
	}
	else{
		//adding the content in the grey box
		var newSquare1 = new createjs.Shape();
		var newSquareText = new createjs.Text(clickable.pieceType, "10px Arial", "#000000");
		newSquareText.textAlign = "center";
		newSquareText.x = 28;
		newSquareText.y = 15;
		newSquare1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
		clickable.addChild(newSquare1, newSquareText);
		
		//adding the new clickable in the piecesCaptured array and then displaying it
		piecesCaptured.push(clickable);
		drawPiecesOnCaptured(clickable,piecesCaptured.length);
	}
}

//this function addes the pieces lost in the lost canvas
function drawPiecesOnLost(clickable, loc){
	if(loc < 6){
		clickable.x = (loc - 1)*60 + 3;
		clickable.y = 3;
	}
	else if(loc > 5 && loc < 11){
		loc = loc%6;
		clickable.x = (loc - 1)*60 + 3;
		clickable.y = 60 + 3;
		
	}
	else{
		loc = loc%6;
		clickable.x = (loc - 1)*60 + 3;
		clickable.y = 120 + 3;	
	}
	lostStage.addChild(clickable);
	lostStage.update();
}

//this function addes the pieces captured in the captured canvas
function drawPiecesOnCaptured(clickable, loc){
	if(loc < 6){
		clickable.x = (loc - 1)*60 + 3;
		clickable.y = 3;
	}
	else if(loc > 5 && loc < 11){
		loc = loc%6;
		clickable.x = (loc - 1)*60 + 3;
		clickable.y = 60 + 3;
		
	}
	else{
		loc = loc%6;
		clickable.x = (loc - 1)*60 + 3;
		clickable.y = 120 + 3;	
	}
	captStage.addChild(clickable);
	captStage.update();
}



