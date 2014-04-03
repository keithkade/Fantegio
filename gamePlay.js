
//listen to server
socket.on('start game', setBoard);
socket.on('resolve conflict', resolveConflict);
socket.on('simple move', simpleMove);
socket.on('invalid move', invalidMove);
socket.on('game over', gameOver);

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

   if(selectedPiece.pieceType != "Trap" && selectedPiece.pieceType != "Important Thing"){
      possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY+1);
      possibleActionDest(selectedPiece.gameGridX,selectedPiece.gameGridY-1);
      possibleActionDest(selectedPiece.gameGridX+1,selectedPiece.gameGridY);
      possibleActionDest(selectedPiece.gameGridX-1,selectedPiece.gameGridY);
   }
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

function shootPiece(event){
   removeChoices();
   if(playerTurn == playerNum){
      //alert("move sent");
      move[0] = "move";
      move[1] = selectedPiece.gameGridX;
      move[2] = orient(playerNum, selectedPiece.gameGridY);
      move[3] = event.target.parent.gameGridX;
      move[4] = orient(playerNum, event.target.parent.gameGridY);
      move[5] = 2;
      move[6] = playerNum;
      socket.emit("move", move);
   }
   else{
      alert("Not your turn");
   }
}

var lostStage = new createjs.Stage("lostPiecesCanvas");
var captStage = new createjs.Stage("capPiecesCanvas");



