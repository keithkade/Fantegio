var urlName = window.location.search.substring(1);
var playerNum = unescape(urlName);
var socket = io.connect('http://' + document.location.host);
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

function hideElem(divId){
   document.getElementById(divId).style.display = 'none';
}

function showElem(divId){
   document.getElementById(divId).style.display = 'block';
}

//also establishes intial lastX and lastY
function initializePieceXY (dragger){
   convertToGameGridXY(dragger);
   dragger.lastX = dragger.gameGridX;
   dragger.lastY = dragger.gameGridY;
}

//converts canvas x and y to grid x and y
function convertToGameGridXY (dragger){
   dragger.gameGridX = (dragger.x-2)/60 + 1;
   dragger.gameGridY = (dragger.y+178)/60 + 1;	
}

function addGameGridXY (clickAble){
   clickAble.gameGridX = (clickAble.x-2)/60 + 1;
   clickAble.gameGridY = (clickAble.y-2)/60 + 1;	
}

//can cause a bug if you just click the piece and then it moves. The previous location is still marked as full
//adds drag and drop listeners
function addDragAndDrop (toDrag){
   //move piece on drag			
   toDrag.on("pressmove",function(evt) {
         evt.currentTarget.lastX = evt.currentTarget.gameGridX;
         evt.currentTarget.lastY = evt.currentTarget.gameGridY;
         evt.currentTarget.x = evt.stageX;
         evt.currentTarget.y = evt.stageY;
         setupStage.update();   	
         });	

   //center piece on release of mouse
   toDrag.on("pressup", function(evt) {
         var x = evt.stageX;	
         var y = evt.stageY;
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
         if(x>480)
         x=422;	
         if(y<120)
         y=122;
         if(y>540)
            y=482;					
         //check to ensure that we arent moving onto a piece
         if (isGameLocOccupied[(x-2)/60 + 1][(y+178)/60 + 1]){
            evt.currentTarget.x = (evt.currentTarget.gameGridX - 1)*60 + 2;
            evt.currentTarget.y = (evt.currentTarget.gameGridY - 1)*60 - 178;
         }
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

//put all of the piece locations into an array and send to server
//also update the page by showing old canvas and adding new one
function startGame(){
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
}

//listen 
socket.on('start game', setBoard);
socket.on('resolve conflict', resolveConflict);
socket.on('simple move', simpleMove);
socket.on('invalid move', invalidMove);
socket.on('game over', gameOver);

//message recieved that someone has won
function gameOver(gameOverArray){
	var playerWon = conflictArray[0];
    if (playerWon == 1 && playerNum == 1){
         alert("You have won!");
    }	
    else if (playerWon == 1 && playerNum == 2){
         alert("You have lost!");
    }	
    else if (playerWon == 2 && playerNum == 1){
         alert("You have lost!");
    }	
    else if (playerWon == 2 && playerNum == 2){
         alert("You have won!");
    }							
}


//message recieved that contains the results of a conflict
function resolveConflict(conflictArray){
   var playerMoved = conflictArray[0];
   var outcome = conflictArray[1];
   var xOld = conflictArray[2];
   var yOld = orient(playerNum, conflictArray[3]);
   var xNew = conflictArray[4];
   var yNew = orient(playerNum, conflictArray[5]);

   var attacked = pieceAtLocation(xNew, yNew);

   if (outcome == 0){ //both die
      var p1 = pieceAtLocation(xOld, yOld);
      var p2 = pieceAtLocation(xNew, yNew);
      removeClickable(p1);
      removeClickable(p2);
      alert("A " + p1.pieceType + " and a " + p2.pieceType + "defeated each other");
   }

   if (outcome == 1 && playerMoved == 1){ //player1 wins
      var loser = pieceAtLocation(xNew, yNew); //piece moved onto
      var winner = pieceAtLocation(xOld, yOld);
      removeClickable(loser);
      if (playerNum == 1)
         alert("You captured your opponent's " + loser.pieceType);
      else
         alert("Your piece was taken by your opponent's " + winner.pieceType);
   }
   else if (outcome == 2 && playerMoved == 1){ //player2 wins
      var loser = pieceAtLocation(xOld, yOld); //piece moved 
      var winner = pieceAtLocation(xNew, yNew);
      removeClickable(loser);
      if (playerNum == 2)
         alert("You captured your opponent's " + loser.pieceType);
      else
         alert("Your piece was taken by your opponent's " + winner.pieceType);		
   }
   else if (outcome == 1 && playerMoved == 2){ 
      var loser = pieceAtLocation(xOld, yOld); //piece moved 
      var winner = pieceAtLocation(xNew, yNew);
      removeClickable(loser);
      if (playerNum == 1)
         alert("You captured your opponent's " + loser.pieceType);
      else
         alert("Your piece was taken by your opponent's " + winner.pieceType);			
   }
   else if (outcome == 2 && playerMoved == 2){ 
      var loser = pieceAtLocation(xNew, yNew); 
      var winner = pieceAtLocation(xOld, yOld);
      removeClickable(loser);		
      if (playerNum == 2)
         alert("You captured your opponent's " + loser.pieceType);
      else
         alert("Your piece was taken by your opponent's " + winner.pieceType);	
   }	

   //move the piece
   for(var i=0; i<pieceArray.length; i++){
      if (pieceArray[i].gameGridX == xOld && pieceArray[i].gameGridY == yOld){
         pieceArray[i].gameGridX = xNew;
         pieceArray[i].gameGridY = yNew;
         pieceArray[i].x = ((xNew - 1) * 60) + 2;
         pieceArray[i].y = ((yNew - 1) * 60) + 2;
      }
   }

   if(playerTurn == '1'){
   	  if(playerTurn == 2){ alert("Your turn"); }
      playerTurn = '2';
   }
   else{
   	  if(playerTurn == 1){ alert("Your turn"); }
      playerTurn = '1';
   }
    


   gameStage.update();
}

function removeClickable(clickable){
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

   for(var i=0; i<pieceArray.length; i++){
      if (pieceArray[i].gameGridX == xOld && pieceArray[i].gameGridY == yOld){
         pieceArray[i].gameGridX = xNew;
         pieceArray[i].gameGridY = yNew;
         pieceArray[i].x = ((xNew - 1) * 60) + 2;
         pieceArray[i].y = ((yNew - 1) * 60) + 2;
      }
   }

   if(playerTurn == '1'){
   	  if(playerTurn == 2){ alert("Your turn"); }
      playerTurn = '2';
   }
   else{
   	  if(playerTurn == 1){ alert("Your turn"); }
      playerTurn = '1';
   }

   gameStage.update();
}

//if the server does not think the move sent was valid
function invalidMove(data){
   alert("something went wrong");
   // [“invalid move”, xOld, yOld, message]
}

//if the timer runs out start with default setup
function gameStartOnTimeout(){
   setup();
   startGame();
}

//return the piece at a given location, if no piece is there return false
function pieceAtLocation(x, y){
   for (var i=0; i < pieceArray.length; i++)
      if (pieceArray[i].gameGridX == x && pieceArray[i].gameGridY == y)
         return pieceArray[i];

   return false;

}

//switches y coordinate if neccessary for player
function orient(playerNum, Y_Loc){
   if(playerNum == "2")
   {
      return 9 - Y_Loc;
   }
   else{
      return Y_Loc;
   }
}

//used to know which piece needs to be moved in movePiece() updated in pieceClick
var selectedPiece = p1importantThingClickable;
//list of current pieces possible move choices
var choices = [];

//called when a piece owned by a player is clicked.
function pieceClick(event){
   //clear previously clicked piece's choices
   while(choices.length > 0)
   {
      choices.pop().removeEventListener("click", movePiece);
   }

   selectedPiece = event.target.parent;
   
   if(selectedPiece.pieceType != "Trap" && selectedPiece.pieceType != "Important Thing")
   {
      possibleMoveDest(selectedPiece.gameGridX,selectedPiece.gameGridY+1);
      possibleMoveDest(selectedPiece.gameGridX,selectedPiece.gameGridY-1);
      possibleMoveDest(selectedPiece.gameGridX+1,selectedPiece.gameGridY);
      possibleMoveDest(selectedPiece.gameGridX-1,selectedPiece.gameGridY);
   }
}

//Used in pieceClick() to set the square as clickable if moving there is legal.
//	returns true if open square
// 	returns false if non-open square 
function possibleMoveDest(destX, destY){
   if( destX < 1 || destX > 8 || destY < 1 || destY > 8)
   {
      return false;
   }
   var curPiece = pieceAtLocation(destX,destY);
   if(curPiece == false)
   {
      var temp = board[destX][destY];
      board[destX][destY].addEventListener("click", movePiece);
      choices.push(board[destX][destY]);
      return true;
   }
   else if(curPiece.team != playerNum)
   {
      curPiece.addEventListener("click", movePiece);
      choices.push(curPiece);
   }
   return false;
}

var move = new Array();
//called when pieces a player can move the selectedPiece to are clicked.
function movePiece(event){
   if(playerTurn == playerNum)
   {

      alert("move sent");
      move[0] = "move";
      move[1] = selectedPiece.gameGridX;
      move[2] = orient(playerNum, selectedPiece.gameGridY);
      move[3] = event.target.parent.gameGridX;
      move[4] = orient(playerNum, event.target.parent.gameGridY);
      move[5] = 1;
      move[6] = playerNum;
      socket.emit("move", move);
   }
   else{
      alert("Not your turn");
   }
}
