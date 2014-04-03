
//create socket for communication
var socket = io.connect('http://' + document.location.host);

//listen to server
socket.on('start game', setBoard);
socket.on('resolve conflict', resolveConflict);
socket.on('simple move', simpleMove);
socket.on('invalid move', invalidMove);
socket.on('game over', gameOver);

//put all of the piece locations into an array and send to server
//also update the page by removing old html elements and adding new ones
function startGame(){
	
   //if not all pieces have been placed then just give the default setup
   for (var i=0; i < pieceArray.length; i++){
      if (pieceArray[i].gameGridY > 8){
         alert("You had at least one piece off the board so you were given the default setup");
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

}

//message recieved that someone has won
function gameOver(gameOverArray){
	var playerWon = gameOverArray[0];
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
      alert("A " + p1.pieceType + " and a " + p2.pieceType + " defeated each other");
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
      playerTurn = '2';
   }
   else{
      playerTurn = '1';
   }
    
   updateTurnIndicator();
   gameStage.update();
}

//when a clickable is defeated set it off the board 
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
   alert("something went wrong");
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
      cur.removeChild(cur.getChildByName("moveIcon"));
   }
}

//called when a piece owned by a player is clicked.
function pieceClick(event){
   //clear previously clicked piece's choices
   removeChoices();
   
   selectedPiece = event.target.parent;
  
   if(selectedPiece.pieceType == "Rider")
   {
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
   else if(selectedPiece.pieceType != "Trap" && selectedPiece.pieceType != "Important Thing"){
      possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY+1);
      possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY-1);
      possibleActionDest(selectedPiece.gameGridX+1,selectedPiece.gameGridY);
      possibleActionDest(selectedPiece.gameGridX-1,selectedPiece.gameGridY);
      if(selectedPiece.pieceType == "Archer")
      {
         possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY+2,"shot");
         possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY-2,"shot");
         possibleActionDest(selectedPiece.gameGridX+2,selectedPiece.gameGridY,"shot");
         possibleActionDest(selectedPiece.gameGridX-2,selectedPiece.gameGridY,"shot");
      }
   }

   gameStage.update();
}

//Used in pieceClick() to set the square as clickable if moving there is legal.
//	returns true if open square
// 	returns false if non-open square
function possibleActionDest(destX, destY, actionType){
   var curPiece = pieceAtLocation(destX,destY);

   if( destX < 1 || destX > 8 || destY < 1 || destY > 8 || curPiece.team == '3'){
      return false;
   }
   if(curPiece == false){
      var temp = board[destX][destY];
      if(actionType === undefined){
         board[destX][destY].addEventListener("click", movePiece);
         var moveIcon = new createjs.Shape();
         moveIcon.graphics.beginFill("#CCCC00").drawRect(13,13,30,30);
         moveIcon.name = "moveIcon";
         board[destX][destY].addChild(moveIcon);
      }
      choices.push(board[destX][destY]);
      return true;
   }
   else if(curPiece.team != playerNum){
      if(actionType === undefined){
         curPiece.addEventListener("click", movePiece);
         var moveIcon = new createjs.Shape();
         moveIcon.graphics.beginFill("#CCCC00").drawRect(13,13,30,30);
         moveIcon.name = "moveIcon";
         board[destX][destY].addChild(moveIcon);
      }
      else if(actionType == "shot"){
         curPiece.addEventListener("click", shootPiece);
         var moveIcon = new createjs.Shape();
         moveIcon.graphics.beginFill("#CCCC00").drawRect(13,13,30,30);
         moveIcon.name = "moveIcon";
         board[destX][destY].addChild(moveIcon);
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
      alert("Not your turn");
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
      alert("Not your turn");
   }
}
