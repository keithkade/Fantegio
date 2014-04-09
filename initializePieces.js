//==========================================================================Rocks
//rocks will recieve x and y from server
var rock1 = new createjs.Bitmap("images/Boulder.png");
//rock1.graphics.beginFill("black").drawCircle(29, 29, 20);
rock1.pieceType = "rock";
rock1.team = '3';
var rock2 = new createjs.Bitmap("images/Boulder.png");
//rock2.graphics.beginFill("black").drawCircle(209, 60, 20);
rock2.pieceType = "rock";
rock2.team = '3';
var rock3 = new createjs.Bitmap("images/Boulder.png");
//rock3.graphics.beginFill("black").drawCircle(329, 60, 20);
rock3.pieceType = "rock";
rock3.team = '3';

//==========================================================================Player 1 game pieces

//create clickable important thing
var p1squareIT = new createjs.Shape();
var p1importantThingBMP = new createjs.Bitmap("images/ImportantThing.png");
var p1importantThingClickable = new createjs.Container();
p1importantThingClickable.pieceType =  "Important Thing";
p1importantThingClickable.team = '1';

//create clickable trap1
var p1squareT1 = new createjs.Shape();
var p1trap1BMP = new createjs.Bitmap("images/Trap.png");
var p1trap1Clickable = new createjs.Container();
p1trap1Clickable.pieceType = "Trap";
p1trap1Clickable.team = '1';

//create clickable trap2
var p1squareT2 = new createjs.Shape();
var p1trap2BMP = new createjs.Bitmap("images/Trap.png");
var p1trap2Clickable = new createjs.Container();
p1trap2Clickable.pieceType = "Trap";
p1trap2Clickable.team = '1';

//create clickable archer
var p1squareAr = new createjs.Shape();
var p1archerBMP = new createjs.Bitmap("images/Archer.png");
var p1archerClickable = new createjs.Container();
p1archerClickable.pieceType = "Archer";
p1archerClickable.team = '1';

//create clickable mystic
var p1squareMy = new createjs.Shape();
var p1mysticBMP = new createjs.Bitmap("images/Mystic.png");
var p1mysticClickable = new createjs.Container();
p1mysticClickable.pieceType = "Mystic";
p1mysticClickable.team = '1';

//create clickable rider1
var p1squareR1 = new createjs.Shape();
var p1rider1BMP = new createjs.Bitmap("images/Rider.png");
var p1rider1Clickable = new createjs.Container();
p1rider1Clickable.pieceType = "Rider";
p1rider1Clickable.team = '1';

//create clickable rider2
var p1squareR2 = new createjs.Shape();
var p1rider2BMP = new createjs.Bitmap("images/Rider.png");
var p1rider2Clickable = new createjs.Container();
p1rider2Clickable.pieceType = "Rider";
p1rider2Clickable.team =  '1';

//create clickable assassin
var p1squareAs = new createjs.Shape();
var p1assassinBMP = new createjs.Bitmap("images/Assassin.png");
var p1assassinClickable = new createjs.Container();
p1assassinClickable.pieceType = "Assassin";
p1assassinClickable.team =  '1';

//create clickable soldier1
var p1squareS1 = new createjs.Shape();
var p1soldier1BMP = new createjs.Bitmap("images/Soldier.png");
var p1soldier1Clickable = new createjs.Container();
p1soldier1Clickable.pieceType = "Soldier";
p1soldier1Clickable.team =  '1';

//create clickable soldier2
var p1squareS2 = new createjs.Shape();
var p1soldier2BMP = new createjs.Bitmap("images/Soldier.png");
var p1soldier2Clickable = new createjs.Container();
p1soldier2Clickable.pieceType = "Soldier";
p1soldier2Clickable.team =  '1';

//create clickable engineer1
var p1squareE1 = new createjs.Shape();
var p1engineer1BMP = new createjs.Bitmap("images/Engineer.png");
var p1engineer1Clickable = new createjs.Container();
p1engineer1Clickable.pieceType = "Engineer";
p1engineer1Clickable.team =  '1';

//create clickable engineer2
var p1squareE2 = new createjs.Shape();
var p1engineer2BMP = new createjs.Bitmap("images/Engineer.png");
var p1engineer2Clickable = new createjs.Container();
p1engineer2Clickable.pieceType = "Engineer";
p1engineer2Clickable.team =  '1';

//create clickable captain
var p1squareCa = new createjs.Shape();
var p1captainBMP = new createjs.Bitmap("images/Captain.png");
var p1captainClickable = new createjs.Container();
p1captainClickable.pieceType = "Captain";
p1captainClickable.team =  '1';

//create clickable commander
var p1squareCo = new createjs.Shape();
var p1commanderBMP = new createjs.Bitmap("images/Commander.png");
var p1commanderClickable = new createjs.Container();
p1commanderClickable.pieceType = "Commander";
p1commanderClickable.team =  '1';

//==========================================================================Player 2 game pieces
//create clickable important thing
var p2squareIT = new createjs.Shape();
var p2importantThingBMP = new createjs.Bitmap("images/ImportantThing.png");
var p2importantThingClickable = new createjs.Container();
p2importantThingClickable.pieceType =  "Important Thing";
p2importantThingClickable.team =  '2';

//create clickable trap2
var p2squareT1 = new createjs.Shape();
var p2trap1BMP = new createjs.Bitmap("images/Trap.png");
var p2trap1Clickable = new createjs.Container();
p2trap1Clickable.pieceType = "Trap";
p2trap1Clickable.team =  '2';

//create clickable trap2
var p2squareT2 = new createjs.Shape();
var p2trap2BMP = new createjs.Bitmap("images/Trap.png");
var p2trap2Clickable = new createjs.Container();
p2trap2Clickable.pieceType = "Trap";
p2trap2Clickable.team =  '2';

//create clickable archer
var p2squareAr = new createjs.Shape();
var p2archerBMP = new createjs.Bitmap("images/Archer.png");
var p2archerClickable = new createjs.Container();
p2archerClickable.pieceType = "Archer";
p2archerClickable.team =  '2';

//create clickable mystic
var p2squareMy = new createjs.Shape();
var p2mysticBMP = new createjs.Bitmap("images/Mystic.png");
var p2mysticClickable = new createjs.Container();
p2mysticClickable.pieceType = "Mystic";
p2mysticClickable.team =  '2';

//create clickable rider1
var p2squareR1 = new createjs.Shape();
var p2rider1BMP = new createjs.Bitmap("images/Rider.png");
var p2rider1Clickable = new createjs.Container();
p2rider1Clickable.pieceType = "Rider";
p2rider1Clickable.team =  '2';

//create clickable rider2
var p2squareR2 = new createjs.Shape();
var p2rider2BMP = new createjs.Bitmap("images/Rider.png");
var p2rider2Clickable = new createjs.Container();
p2rider2Clickable.pieceType = "Rider";
p2rider2Clickable.team =  '2';

//create clickable assassin
var p2squareAs = new createjs.Shape();
var p2assassinBMP = new createjs.Bitmap("images/Assassin.png");
var p2assassinClickable = new createjs.Container();
p2assassinClickable.pieceType = "Assassin";
p2assassinClickable.team =  '2';

//create clickable soldier1
var p2squareS1 = new createjs.Shape();
var p2soldier1BMP = new createjs.Bitmap("images/Soldier.png");
var p2soldier1Clickable = new createjs.Container();
p2soldier1Clickable.pieceType = "Soldier";
p2soldier1Clickable.team =  '2';

//create clickable soldier2
var p2squareS2 = new createjs.Shape();
var p2soldier2BMP = new createjs.Bitmap("images/Soldier.png");
var p2soldier2Clickable = new createjs.Container();
p2soldier2Clickable.pieceType = "Soldier";
p2soldier2Clickable.team =  '2';

//create clickable engineer1
var p2squareE1 = new createjs.Shape();
var p2engineer1BMP = new createjs.Bitmap("images/Engineer.png");
var p2engineer1Clickable = new createjs.Container();
p2engineer1Clickable.pieceType = "Engineer";
p2engineer1Clickable.team =  '2';

//create clickable engineer2
var p2squareE2 = new createjs.Shape();
var p2engineer2BMP = new createjs.Bitmap("images/Engineer.png");
var p2engineer2Clickable = new createjs.Container();
p2engineer2Clickable.pieceType = "Engineer";
p2engineer2Clickable.team =  '2';

//create clickable captain
var p2squareCa = new createjs.Shape();
var p2captainBMP = new createjs.Bitmap("images/Captain.png");
var p2captainClickable = new createjs.Container();
p2captainClickable.pieceType = "Captain";
p2captainClickable.team =  '2';

//create clickable commander
var p2squareCo = new createjs.Shape();
var p2commanderBMP = new createjs.Bitmap("images/Commander.png");
var p2commanderClickable = new createjs.Container();
p2commanderClickable.pieceType = "Commander";
p2commanderClickable.team =  '2';

//put all pieces in array so it can be searched
var pieceArray = new Array();
pieceArray[0] = p1importantThingClickable;
pieceArray[1] = p2importantThingClickable;
pieceArray[2] = p1commanderClickable;
pieceArray[3] = p2commanderClickable;
pieceArray[4] = p1captainClickable;
pieceArray[5] = p2captainClickable;
pieceArray[6] = p1engineer1Clickable;
pieceArray[7] = p2engineer1Clickable;
pieceArray[8] = p1engineer2Clickable;
pieceArray[9] = p2engineer2Clickable;
pieceArray[10] = p1soldier1Clickable;
pieceArray[11] = p2soldier1Clickable;
pieceArray[12] = p1soldier2Clickable;
pieceArray[13] = p2soldier2Clickable;
pieceArray[14] = p1assassinClickable;
pieceArray[15] = p2assassinClickable;
pieceArray[16] = p1rider1Clickable;
pieceArray[17] = p2rider1Clickable;
pieceArray[18] = p1rider2Clickable;
pieceArray[19] = p2rider2Clickable;
pieceArray[20] = p1mysticClickable;
pieceArray[21] = p2mysticClickable;
pieceArray[22] = p1archerClickable;
pieceArray[23] = p2archerClickable;
pieceArray[24] = p1trap1Clickable;
pieceArray[25] = p2trap1Clickable;
pieceArray[26] = p1trap2Clickable;
pieceArray[27] = p2trap2Clickable;
pieceArray[28] = rock1;
pieceArray[29] = rock2;
pieceArray[30] = rock3;



gameStage.update();
setupStage.update();

var friendlyColor = "blue";
var enemyColor = "#8b8989";
function setBoard(initXYArray){
	
	for (var x = 1; x < 10; x++){
		for (var y = 1; y < 9; y++){
			gameStage.addChild(board[x][y]);
		}
	}
   
   if(playerNum == '1')
   {
      //Player 1
      p1commanderClickable.addChild(p1commanderBMP);
      p1commanderClickable.addEventListener("click", pieceClick);
      p1commanderClickable.x = (initXYArray[0] - 1)  *  60 + 2;
      p1commanderClickable.y = (initXYArray[1] - 1)  *  60 + 2;
      addGameGridXY(p1commanderClickable);
      gameStage.addChild(p1commanderClickable);

      p1captainClickable.addChild(p1captainBMP);
      p1captainClickable.addEventListener("click", pieceClick);
      p1captainClickable.x = (initXYArray[2] - 1)  *  60 + 2;
      p1captainClickable.y = (initXYArray[3] - 1)  *  60 + 2;
      addGameGridXY(p1captainClickable);
      gameStage.addChild(p1captainClickable);

      p1soldier1Clickable.addChild(p1soldier1BMP);
      p1soldier1Clickable.addEventListener("click", pieceClick);
      p1soldier1Clickable.x = (initXYArray[4] - 1)  *  60 + 2;
      p1soldier1Clickable.y = (initXYArray[5] - 1)  *  60 + 2;
      addGameGridXY(p1soldier1Clickable);
      gameStage.addChild(p1soldier1Clickable);

      p1soldier2Clickable.addChild(p1soldier2BMP);
      p1soldier2Clickable.addEventListener("click", pieceClick);
      p1soldier2Clickable.x = (initXYArray[6] - 1)  *  60 + 2;
      p1soldier2Clickable.y = (initXYArray[7] - 1)  *  60 + 2;
      addGameGridXY(p1soldier2Clickable);
      gameStage.addChild(p1soldier2Clickable);

      p1engineer1Clickable.addChild(p1engineer1BMP);
      p1engineer1Clickable.addEventListener("click", pieceClick);
      p1engineer1Clickable.x = (initXYArray[8] - 1)  *  60 + 2;
      p1engineer1Clickable.y = (initXYArray[9] - 1)  *  60 + 2;
      addGameGridXY(p1engineer1Clickable);
      gameStage.addChild(p1engineer1Clickable);

      p1engineer2Clickable.addChild(p1engineer2BMP);
      p1engineer2Clickable.addEventListener("click", pieceClick);
      p1engineer2Clickable.x = (initXYArray[10] - 1)  *  60 + 2;
      p1engineer2Clickable.y = (initXYArray[11] - 1)  *  60 + 2;
      addGameGridXY(p1engineer2Clickable);
      gameStage.addChild(p1engineer2Clickable);

      p1rider1Clickable.addChild(p1rider1BMP);
      p1rider1Clickable.addEventListener("click", pieceClick);
      p1rider1Clickable.x = (initXYArray[12] - 1)  *  60 + 2;
      p1rider1Clickable.y = (initXYArray[13] - 1)  *  60 + 2;
      addGameGridXY(p1rider1Clickable);
      gameStage.addChild(p1rider1Clickable);

      p1rider2Clickable.addChild(p1rider2BMP);
      p1rider2Clickable.addEventListener("click", pieceClick);
      p1rider2Clickable.x = (initXYArray[14] - 1)  *  60 + 2;
      p1rider2Clickable.y = (initXYArray[15] - 1)  *  60 + 2;
      addGameGridXY(p1rider2Clickable);
      gameStage.addChild(p1rider2Clickable);

      p1assassinClickable.addChild(p1assassinBMP);
      p1assassinClickable.addEventListener("click", pieceClick);
      p1assassinClickable.x = (initXYArray[16] - 1)  *  60 + 2;
      p1assassinClickable.y = (initXYArray[17] - 1)  *  60 + 2;
      addGameGridXY(p1assassinClickable);
      gameStage.addChild(p1assassinClickable);

      p1archerClickable.addChild(p1archerBMP);
      p1archerClickable.addEventListener("click", pieceClick);
      p1archerClickable.x = (initXYArray[18] - 1)  *  60 + 2;
      p1archerClickable.y = (initXYArray[19] - 1)  *  60 + 2;
      addGameGridXY(p1archerClickable);
      gameStage.addChild(p1archerClickable);

      p1mysticClickable.addChild(p1mysticBMP);
      p1mysticClickable.addEventListener("click", pieceClick);
      p1mysticClickable.x = (initXYArray[20] - 1)  *  60 + 2;
      p1mysticClickable.y = (initXYArray[21] - 1)  *  60 + 2;
      addGameGridXY(p1mysticClickable);
      gameStage.addChild(p1mysticClickable);

      p1trap1Clickable.addChild(p1trap1BMP);
      p1trap1Clickable.addEventListener("click", pieceClick);
      p1trap1Clickable.x = (initXYArray[22] - 1)  *  60 + 2;
      p1trap1Clickable.y = (initXYArray[23] - 1)  *  60 + 2;
      addGameGridXY(p1trap1Clickable);
      gameStage.addChild(p1trap1Clickable);

      p1trap2Clickable.addChild(p1trap2BMP);
      p1trap2Clickable.addEventListener("click", pieceClick);
      p1trap2Clickable.x = (initXYArray[24] - 1)  *  60 + 2;
      p1trap2Clickable.y = (initXYArray[25] - 1)  *  60 + 2;
      addGameGridXY(p1trap2Clickable);
      gameStage.addChild(p1trap2Clickable);

      p1importantThingClickable.addChild(p1importantThingBMP);
      p1importantThingClickable.addEventListener("click", pieceClick);
      p1importantThingClickable.x = (initXYArray[26] - 1)  *  60 + 2;
      p1importantThingClickable.y = (initXYArray[27] - 1)  *  60 + 2;
      addGameGridXY(p1importantThingClickable);
      gameStage.addChild(p1importantThingClickable);

      //Player 2
      p2squareCo.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2commanderClickable.addChild(p2squareCo);
      p2commanderClickable.x = (initXYArray[28] - 1)  *  60 + 2;
      p2commanderClickable.y = (initXYArray[29] - 1)  *  60 + 2;
      addGameGridXY(p2commanderClickable);
      gameStage.addChild(p2commanderClickable);

      p2squareCa.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2captainClickable.addChild(p2squareCa);
      p2captainClickable.x = (initXYArray[30] - 1)  *  60 + 2;
      p2captainClickable.y = (initXYArray[31] - 1)  *  60 + 2;
      addGameGridXY(p2captainClickable);
      gameStage.addChild(p2captainClickable);

      p2squareS1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2soldier1Clickable.addChild(p2squareS1);
      p2soldier1Clickable.x = (initXYArray[32] - 1)  *  60 + 2;
      p2soldier1Clickable.y = (initXYArray[33] - 1)  *  60 + 2;
      addGameGridXY(p2soldier1Clickable);
      gameStage.addChild(p2soldier1Clickable);

      p2squareS2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2soldier2Clickable.addChild(p2squareS2);
      p2soldier2Clickable.x = (initXYArray[34] - 1)  *  60 + 2;
      p2soldier2Clickable.y = (initXYArray[35] - 1)  *  60 + 2;
      addGameGridXY(p2soldier2Clickable);
      gameStage.addChild(p2soldier2Clickable);

      p2squareE1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2engineer1Clickable.addChild(p2squareE1);
      p2engineer1Clickable.x = (initXYArray[36] - 1)  *  60 + 2;
      p2engineer1Clickable.y = (initXYArray[37] - 1)  *  60 + 2;
      addGameGridXY(p2engineer1Clickable);
      gameStage.addChild(p2engineer1Clickable);

      p2squareE2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2engineer2Clickable.addChild(p2squareE2);
      p2engineer2Clickable.x = (initXYArray[38] - 1)  *  60 + 2;
      p2engineer2Clickable.y = (initXYArray[39] - 1)  *  60 + 2;
      addGameGridXY(p2engineer2Clickable);
      gameStage.addChild(p2engineer2Clickable);

      p2squareR1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2rider1Clickable.addChild(p2squareR1);
      p2rider1Clickable.x = (initXYArray[40] - 1)  *  60 + 2;
      p2rider1Clickable.y = (initXYArray[41] - 1)  *  60 + 2;
      addGameGridXY(p2rider1Clickable);
      gameStage.addChild(p2rider1Clickable);

      p2squareR2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2rider2Clickable.addChild(p2squareR2);
      p2rider2Clickable.x = (initXYArray[42] - 1)  *  60 + 2;
      p2rider2Clickable.y = (initXYArray[43] - 1)  *  60 + 2;
      addGameGridXY(p2rider2Clickable);
      gameStage.addChild(p2rider2Clickable);

      p2squareAs.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2assassinClickable.addChild(p2squareAs);
      p2assassinClickable.x = (initXYArray[44] - 1)  *  60 + 2;
      p2assassinClickable.y = (initXYArray[45] - 1)  *  60 + 2;
      addGameGridXY(p2assassinClickable);
      gameStage.addChild(p2assassinClickable);

      p2squareAr.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2archerClickable.addChild(p2squareAr);
      p2archerClickable.x = (initXYArray[46] - 1)  *  60 + 2;
      p2archerClickable.y = (initXYArray[47] - 1)  *  60 + 2;
      addGameGridXY(p2archerClickable);
      gameStage.addChild(p2archerClickable);

      p2squareMy.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2mysticClickable.addChild(p2squareMy);
      p2mysticClickable.x = (initXYArray[48] - 1)  *  60 + 2;
      p2mysticClickable.y = (initXYArray[49] - 1)  *  60 + 2;
      addGameGridXY(p2mysticClickable);
      gameStage.addChild(p2mysticClickable);

      p2squareT1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2trap1Clickable.addChild(p2squareT1);
      p2trap1Clickable.x = (initXYArray[50] - 1)  *  60 + 2;
      p2trap1Clickable.y = (initXYArray[51] - 1)  *  60 + 2;
      addGameGridXY(p2trap1Clickable);
      gameStage.addChild(p2trap1Clickable);

      p2squareT2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2trap2Clickable.addChild(p2squareT2);
      p2trap2Clickable.x = (initXYArray[52] - 1)  *  60 + 2;
      p2trap2Clickable.y = (initXYArray[53] - 1)  *  60 + 2;
      addGameGridXY(p2trap2Clickable);
      gameStage.addChild(p2trap2Clickable);

      p2squareIT.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p2importantThingClickable.addChild(p2squareIT);
      p2importantThingClickable.x = (initXYArray[54] - 1)  *  60 + 2;
      p2importantThingClickable.y = (initXYArray[55] - 1)  *  60 + 2;
      addGameGridXY(p2importantThingClickable);
      gameStage.addChild(p2importantThingClickable);

      //added rocks for player 1's perspective 
      //rock1.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock1.x = (initXYArray[56] - 1)  *  60 + 2;
      rock1.y = (initXYArray[57] - 1)  *  60 + 2;
      addGameGridXY(rock1);
      gameStage.addChild(rock1);

      //rock2.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock2.x = (initXYArray[58] - 1)  *  60 + 2;
      rock2.y = (initXYArray[59] - 1)  *  60 + 2;
      addGameGridXY(rock2);
      gameStage.addChild(rock2);

      //rock3.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock3.x = (initXYArray[60] - 1)  *  60 + 2;
      rock3.y = (initXYArray[61] - 1)  *  60 + 2;
      addGameGridXY(rock3);
      gameStage.addChild(rock3);
   }
   else{ // Piece X and Ys from Player 1's perspective. so Y's need to be flipped. 
      //Player 1
      p1squareCo.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1commanderClickable.addChild(p1squareCo);
      p1commanderClickable.x = (initXYArray[0] - 1) * 60 + 2;
      p1commanderClickable.y = (9 -  initXYArray[1] - 1)  *  60 + 2;
      addGameGridXY(p1commanderClickable);
      gameStage.addChild(p1commanderClickable);

      p1squareCa.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1captainClickable.addChild(p1squareCa);
      p1captainClickable.x = (initXYArray[2] - 1)  *  60 + 2;
      p1captainClickable.y = (9 -  initXYArray[3] - 1)  *  60 + 2;
      addGameGridXY(p1captainClickable);
      gameStage.addChild(p1captainClickable);

      p1squareS1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1soldier1Clickable.addChild(p1squareS1);
      p1soldier1Clickable.x = (initXYArray[4] - 1)  *  60 + 2;
      p1soldier1Clickable.y = (9 -  initXYArray[5] - 1)  *  60 + 2;
      addGameGridXY(p1soldier1Clickable);
      gameStage.addChild(p1soldier1Clickable);

      p1squareS2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1soldier2Clickable.addChild(p1squareS2);
      p1soldier2Clickable.x = (initXYArray[6] - 1)  *  60 + 2;
      p1soldier2Clickable.y = (9 -  initXYArray[7] - 1)  *  60 + 2;
      addGameGridXY(p1soldier2Clickable);
      gameStage.addChild(p1soldier2Clickable);

      p1squareE1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1engineer1Clickable.addChild(p1squareE1);
      p1engineer1Clickable.x = (initXYArray[8] - 1)  *  60 + 2;
      p1engineer1Clickable.y = (9 -  initXYArray[9] - 1)  *  60 + 2;
      addGameGridXY(p1engineer1Clickable);
      gameStage.addChild(p1engineer1Clickable);

      p1squareE2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1engineer2Clickable.addChild(p1squareE2);
      p1engineer2Clickable.x = (initXYArray[10] - 1)  *  60 + 2;
      p1engineer2Clickable.y = (9 -  initXYArray[11] - 1)  *  60 + 2;
      addGameGridXY(p1engineer2Clickable);
      gameStage.addChild(p1engineer2Clickable);

      p1squareR1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1rider1Clickable.addChild(p1squareR1);
      p1rider1Clickable.x = (initXYArray[12] - 1)  *  60 + 2;
      p1rider1Clickable.y = (9 -  initXYArray[13] - 1)  *  60 + 2;
      addGameGridXY(p1rider1Clickable);
      gameStage.addChild(p1rider1Clickable);

      p1squareR2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1rider2Clickable.addChild(p1squareR2);
      p1rider2Clickable.x = (initXYArray[14] - 1)  *  60 + 2;
      p1rider2Clickable.y = (9 -  initXYArray[15] - 1)  *  60 + 2;
      addGameGridXY(p1rider2Clickable);
      gameStage.addChild(p1rider2Clickable);

      p1squareAs.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1assassinClickable.addChild(p1squareAs);
      p1assassinClickable.x = (initXYArray[16] - 1)  *  60 + 2;
      p1assassinClickable.y = (9 -  initXYArray[17] - 1)  *  60 + 2;
      addGameGridXY(p1assassinClickable);
      gameStage.addChild(p1assassinClickable);;

      p1squareAr.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1archerClickable.addChild(p1squareAr);
      p1archerClickable.x = (initXYArray[18] - 1)  *  60 + 2;
      p1archerClickable.y = (9 -  initXYArray[19] - 1)  *  60 + 2;
      addGameGridXY(p1archerClickable);
      gameStage.addChild(p1archerClickable);

      p1squareMy.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1mysticClickable.addChild(p1squareMy);
      p1mysticClickable.x = (initXYArray[20] - 1)  *  60 + 2;
      p1mysticClickable.y = (9 -  initXYArray[21] - 1)  *  60 + 2;
      addGameGridXY(p1mysticClickable);
      gameStage.addChild(p1mysticClickable);

      p1squareT1.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1trap1Clickable.addChild(p1squareT1);
      p1trap1Clickable.x = (initXYArray[22] - 1)  *  60 + 2;
      p1trap1Clickable.y = (9 -  initXYArray[23] - 1)  *  60 + 2;
      addGameGridXY(p1trap1Clickable);
      gameStage.addChild(p1trap1Clickable);

      p1squareT2.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1trap2Clickable.addChild(p1squareT2);
      p1trap2Clickable.x = (initXYArray[24] - 1)  *  60 + 2;
      p1trap2Clickable.y = (9 -  initXYArray[25] - 1)  *  60 + 2;
      addGameGridXY(p1trap2Clickable);
      gameStage.addChild(p1trap2Clickable);

      p1squareIT.graphics.beginFill(enemyColor).drawRect(0, 0, 57, 57);
      p1importantThingClickable.addChild(p1squareIT);
      p1importantThingClickable.x = (initXYArray[26] - 1)  *  60 + 2;
      p1importantThingClickable.y = (9 -  initXYArray[27] - 1)  *  60 + 2;
      addGameGridXY(p1importantThingClickable);
      gameStage.addChild(p1importantThingClickable);

      //Player 2
      p2commanderClickable.addChild(p2commanderBMP);
      p2commanderClickable.addEventListener("click", pieceClick);
      p2commanderClickable.x = (initXYArray[28] - 1)  *  60 + 2;
      p2commanderClickable.y = (9 -  initXYArray[29] - 1)  *  60 + 2;
      addGameGridXY(p2commanderClickable);
      gameStage.addChild(p2commanderClickable);

      p2captainClickable.addChild(p2captainBMP);
      p2captainClickable.addEventListener("click", pieceClick);
      p2captainClickable.x = (initXYArray[30] - 1)  *  60 + 2;
      p2captainClickable.y = (9 -  initXYArray[31] - 1)  *  60 + 2;
      addGameGridXY(p2captainClickable);
      gameStage.addChild(p2captainClickable);

      p2soldier1Clickable.addChild(p2soldier1BMP);
      p2soldier1Clickable.addEventListener("click", pieceClick);
      p2soldier1Clickable.x = (initXYArray[32] - 1)  *  60 + 2;
      p2soldier1Clickable.y = (9 -  initXYArray[33] - 1)  *  60 + 2;
      addGameGridXY(p2soldier1Clickable);
      gameStage.addChild(p2soldier1Clickable);

      p2soldier2Clickable.addChild(p2soldier2BMP);
      p2soldier2Clickable.addEventListener("click", pieceClick);
      p2soldier2Clickable.x = (initXYArray[34] - 1)  *  60 + 2;
      p2soldier2Clickable.y = (9 - initXYArray[35] - 1)  *  60 + 2;
      addGameGridXY(p2soldier2Clickable);
      gameStage.addChild(p2soldier2Clickable);

      p2engineer1Clickable.addChild(p2engineer1BMP);
      p2engineer1Clickable.addEventListener("click", pieceClick);
      p2engineer1Clickable.x = (initXYArray[36] - 1)  *  60 + 2;
      p2engineer1Clickable.y = (9 -  initXYArray[37] - 1)  *  60 + 2;
      addGameGridXY(p2engineer1Clickable);
      gameStage.addChild(p2engineer1Clickable);

      p2engineer2Clickable.addChild(p2engineer2BMP);
      p2engineer2Clickable.addEventListener("click", pieceClick);
      p2engineer2Clickable.x = (initXYArray[38] - 1)  *  60 + 2;
      p2engineer2Clickable.y = (9 -  initXYArray[39] - 1)  *  60 + 2;
      addGameGridXY(p2engineer2Clickable);
      gameStage.addChild(p2engineer2Clickable);

      p2rider1Clickable.addChild(p2rider1BMP);
      p2rider1Clickable.addEventListener("click", pieceClick);
      p2rider1Clickable.x = (initXYArray[40] - 1)  *  60 + 2;
      p2rider1Clickable.y = (9 -  initXYArray[41] - 1)  *  60 + 2;
      addGameGridXY(p2rider1Clickable);
      gameStage.addChild(p2rider1Clickable);

      p2rider2Clickable.addChild(p2rider2BMP);
      p2rider2Clickable.addEventListener("click", pieceClick);
      p2rider2Clickable.x = (initXYArray[42] - 1)  *  60 + 2;
      p2rider2Clickable.y = (9 -  initXYArray[43] - 1)  *  60 + 2;
      addGameGridXY(p2rider2Clickable);
      gameStage.addChild(p2rider2Clickable);

      p2assassinClickable.addChild(p2assassinBMP);
      p2assassinClickable.addEventListener("click", pieceClick);
      p2assassinClickable.x = (initXYArray[44] - 1)  *  60 + 2;
      p2assassinClickable.y = (9 -  initXYArray[45] - 1)  *  60 + 2;
      addGameGridXY(p2assassinClickable);
      gameStage.addChild(p2assassinClickable);

      p2archerClickable.addChild(p2archerBMP);
      p2archerClickable.addEventListener("click", pieceClick);
      p2archerClickable.x = (initXYArray[46] - 1)  *  60 + 2;
      p2archerClickable.y = (9 -  initXYArray[47] - 1)  *  60 + 2;
      addGameGridXY(p2archerClickable);
      gameStage.addChild(p2archerClickable);

      p2mysticClickable.addChild(p2mysticBMP);
      p2mysticClickable.addEventListener("click", pieceClick);
      p2mysticClickable.x = (initXYArray[48] - 1)  *  60 + 2;
      p2mysticClickable.y = (9 -  initXYArray[49] - 1)  *  60 + 2;
      addGameGridXY(p2mysticClickable);
      gameStage.addChild(p2mysticClickable);

      p2trap1Clickable.addChild(p2trap1BMP);
      p2trap1Clickable.addEventListener("click", pieceClick);
      p2trap1Clickable.x = (initXYArray[50] - 1)  *  60 + 2;
      p2trap1Clickable.y = (9 -  initXYArray[51] - 1)  *  60 + 2;
      addGameGridXY(p2trap1Clickable);
      gameStage.addChild(p2trap1Clickable);

      p2trap2Clickable.addChild(p2trap2BMP);
      p2trap2Clickable.addEventListener("click", pieceClick);
      p2trap2Clickable.x = (initXYArray[52] - 1)  *  60 + 2;
      p2trap2Clickable.y = (9 -  initXYArray[53] - 1)  *  60 + 2;
      addGameGridXY(p2trap2Clickable);
      gameStage.addChild(p2trap2Clickable);

      p2importantThingClickable.addChild(p2importantThingBMP);
      p2importantThingClickable.addEventListener("click", pieceClick);
      p2importantThingClickable.x = (initXYArray[54] - 1)  *  60 + 2;
      p2importantThingClickable.y = (9 -  initXYArray[55] - 1)  *  60 + 2;
      addGameGridXY(p2importantThingClickable);
      gameStage.addChild(p2importantThingClickable);

      //added rocks for player 2's perspective
      //rock1.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock1.x = (initXYArray[56] - 1)  *  60 + 2;
      rock1.y = (9 - initXYArray[57] - 1)  *  60 + 2;
      addGameGridXY(rock1);
      gameStage.addChild(rock1);

      //rock2.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock2.x = (initXYArray[58] - 1)  *  60 + 2;
      rock2.y = (9 - initXYArray[59] - 1)  *  60 + 2;
      addGameGridXY(rock2);
      gameStage.addChild(rock2);

      //rock3.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock3.x = (initXYArray[60] - 1)  *  60 + 2;
      rock3.y = (9 - initXYArray[61] - 1)  *  60 + 2;
      addGameGridXY(rock3);
      gameStage.addChild(rock3);
   }

   updateTurnIndicator();
   gameStage.update();
}


