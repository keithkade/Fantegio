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
var p1squareIT = new createjs.Bitmap("images/Enemy.png");
var p1importantThingBMP = new createjs.Bitmap("images/ImportantThing.png");
var p1importantThingClickable = new createjs.Container();
p1importantThingClickable.pieceType =  "Important Thing";
p1importantThingClickable.team = '1';

//create clickable trap1
var p1squareT1 = new createjs.Bitmap("images/Enemy.png");
var p1trap1BMP = new createjs.Bitmap("images/Trap.png");
var p1trap1Clickable = new createjs.Container();
p1trap1Clickable.pieceType = "Trap";
p1trap1Clickable.team = '1';

//create clickable trap2
var p1squareT2 = new createjs.Bitmap("images/Enemy.png");
var p1trap2BMP = new createjs.Bitmap("images/Trap.png");
var p1trap2Clickable = new createjs.Container();
p1trap2Clickable.pieceType = "Trap";
p1trap2Clickable.team = '1';

//create clickable archer
var p1squareAr = new createjs.Bitmap("images/Enemy.png");
var p1archerBMP = new createjs.Bitmap("images/Archer.png");
var p1archerClickable = new createjs.Container();
p1archerClickable.pieceType = "Archer";
p1archerClickable.team = '1';

//create clickable mystic
var p1squareMy = new createjs.Bitmap("images/Enemy.png");
var p1mysticBMP = new createjs.Bitmap("images/Mystic.png");
var p1mysticClickable = new createjs.Container();
p1mysticClickable.pieceType = "Mystic";
p1mysticClickable.team = '1';

//create clickable rider1
var p1squareR1 = new createjs.Bitmap("images/Enemy.png");
var p1rider1BMP = new createjs.Bitmap("images/Rider.png");
var p1rider1Clickable = new createjs.Container();
p1rider1Clickable.pieceType = "Rider";
p1rider1Clickable.team = '1';

//create clickable rider2
var p1squareR2 = new createjs.Bitmap("images/Enemy.png");
var p1rider2BMP = new createjs.Bitmap("images/Rider.png");
var p1rider2Clickable = new createjs.Container();
p1rider2Clickable.pieceType = "Rider";
p1rider2Clickable.team =  '1';

//create clickable assassin
var p1squareAs = new createjs.Bitmap("images/Enemy.png");
var p1assassinBMP = new createjs.Bitmap("images/Assassin.png");
var p1assassinClickable = new createjs.Container();
p1assassinClickable.pieceType = "Assassin";
p1assassinClickable.team =  '1';

//create clickable soldier1
var p1squareS1 = new createjs.Bitmap("images/Enemy.png");
var p1soldier1BMP = new createjs.Bitmap("images/Soldier.png");
var p1soldier1Clickable = new createjs.Container();
p1soldier1Clickable.pieceType = "Soldier";
p1soldier1Clickable.team =  '1';

//create clickable soldier2
var p1squareS2 = new createjs.Bitmap("images/Enemy.png");
var p1soldier2BMP = new createjs.Bitmap("images/Soldier.png");
var p1soldier2Clickable = new createjs.Container();
p1soldier2Clickable.pieceType = "Soldier";
p1soldier2Clickable.team =  '1';

//create clickable engineer1
var p1squareE1 = new createjs.Bitmap("images/Enemy.png");
var p1engineer1BMP = new createjs.Bitmap("images/Engineer.png");
var p1engineer1Clickable = new createjs.Container();
p1engineer1Clickable.pieceType = "Engineer";
p1engineer1Clickable.team =  '1';

//create clickable engineer2
var p1squareE2 = new createjs.Bitmap("images/Enemy.png");
var p1engineer2BMP = new createjs.Bitmap("images/Engineer.png");
var p1engineer2Clickable = new createjs.Container();
p1engineer2Clickable.pieceType = "Engineer";
p1engineer2Clickable.team =  '1';

//create clickable captain
var p1squareCa = new createjs.Bitmap("images/Enemy.png");
var p1captainBMP = new createjs.Bitmap("images/Captain.png");
var p1captainClickable = new createjs.Container();
p1captainClickable.pieceType = "Captain";
p1captainClickable.team =  '1';

//create clickable commander
var p1squareCo = new createjs.Bitmap("images/Enemy.png");
var p1commanderBMP = new createjs.Bitmap("images/Commander.png");
var p1commanderClickable = new createjs.Container();
p1commanderClickable.pieceType = "Commander";
p1commanderClickable.team =  '1';

//==========================================================================Player 2 game pieces
//create clickable important thing
var p2squareIT = new createjs.Bitmap("images/Enemy.png");
var p2importantThingBMP = new createjs.Bitmap("images/ImportantThing.png");
var p2importantThingClickable = new createjs.Container();
p2importantThingClickable.pieceType =  "Important Thing";
p2importantThingClickable.team =  '2';

//create clickable trap2
var p2squareT1 = new createjs.Bitmap("images/Enemy.png");
var p2trap1BMP = new createjs.Bitmap("images/Trap.png");
var p2trap1Clickable = new createjs.Container();
p2trap1Clickable.pieceType = "Trap";
p2trap1Clickable.team =  '2';

//create clickable trap2
var p2squareT2 = new createjs.Bitmap("images/Enemy.png");
var p2trap2BMP = new createjs.Bitmap("images/Trap.png");
var p2trap2Clickable = new createjs.Container();
p2trap2Clickable.pieceType = "Trap";
p2trap2Clickable.team =  '2';

//create clickable archer
var p2squareAr = new createjs.Bitmap("images/Enemy.png");
var p2archerBMP = new createjs.Bitmap("images/Archer.png");
var p2archerClickable = new createjs.Container();
p2archerClickable.pieceType = "Archer";
p2archerClickable.team =  '2';

//create clickable mystic
var p2squareMy = new createjs.Bitmap("images/Enemy.png");
var p2mysticBMP = new createjs.Bitmap("images/Mystic.png");
var p2mysticClickable = new createjs.Container();
p2mysticClickable.pieceType = "Mystic";
p2mysticClickable.team =  '2';

//create clickable rider1
var p2squareR1 = new createjs.Bitmap("images/Enemy.png");
var p2rider1BMP = new createjs.Bitmap("images/Rider.png");
var p2rider1Clickable = new createjs.Container();
p2rider1Clickable.pieceType = "Rider";
p2rider1Clickable.team =  '2';

//create clickable rider2
var p2squareR2 = new createjs.Bitmap("images/Enemy.png");
var p2rider2BMP = new createjs.Bitmap("images/Rider.png");
var p2rider2Clickable = new createjs.Container();
p2rider2Clickable.pieceType = "Rider";
p2rider2Clickable.team =  '2';

//create clickable assassin
var p2squareAs = new createjs.Bitmap("images/Enemy.png");
var p2assassinBMP = new createjs.Bitmap("images/Assassin.png");
var p2assassinClickable = new createjs.Container();
p2assassinClickable.pieceType = "Assassin";
p2assassinClickable.team =  '2';

//create clickable soldier1
var p2squareS1 = new createjs.Bitmap("images/Enemy.png");
var p2soldier1BMP = new createjs.Bitmap("images/Soldier.png");
var p2soldier1Clickable = new createjs.Container();
p2soldier1Clickable.pieceType = "Soldier";
p2soldier1Clickable.team =  '2';

//create clickable soldier2
var p2squareS2 = new createjs.Bitmap("images/Enemy.png");
var p2soldier2BMP = new createjs.Bitmap("images/Soldier.png");
var p2soldier2Clickable = new createjs.Container();
p2soldier2Clickable.pieceType = "Soldier";
p2soldier2Clickable.team =  '2';

//create clickable engineer1
var p2squareE1 = new createjs.Bitmap("images/Enemy.png");
var p2engineer1BMP = new createjs.Bitmap("images/Engineer.png");
var p2engineer1Clickable = new createjs.Container();
p2engineer1Clickable.pieceType = "Engineer";
p2engineer1Clickable.team =  '2';

//create clickable engineer2
var p2squareE2 = new createjs.Bitmap("images/Enemy.png");
var p2engineer2BMP = new createjs.Bitmap("images/Engineer.png");
var p2engineer2Clickable = new createjs.Container();
p2engineer2Clickable.pieceType = "Engineer";
p2engineer2Clickable.team =  '2';

//create clickable captain
var p2squareCa = new createjs.Bitmap("images/Enemy.png");
var p2captainBMP = new createjs.Bitmap("images/Captain.png");
var p2captainClickable = new createjs.Container();
p2captainClickable.pieceType = "Captain";
p2captainClickable.team =  '2';

//create clickable commander
var p2squareCo = new createjs.Bitmap("images/Enemy.png");
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
      p2commanderClickable.addChild(p2squareCo);
      p2commanderClickable.x = (initXYArray[28] - 1)  *  60 + 2;
      p2commanderClickable.y = (initXYArray[29] - 1)  *  60 + 2;
      addGameGridXY(p2commanderClickable);
      gameStage.addChild(p2commanderClickable);

      p2captainClickable.addChild(p2squareCa);
      p2captainClickable.x = (initXYArray[30] - 1)  *  60 + 2;
      p2captainClickable.y = (initXYArray[31] - 1)  *  60 + 2;
      addGameGridXY(p2captainClickable);
      gameStage.addChild(p2captainClickable);

      p2soldier1Clickable.addChild(p2squareS1);
      p2soldier1Clickable.x = (initXYArray[32] - 1)  *  60 + 2;
      p2soldier1Clickable.y = (initXYArray[33] - 1)  *  60 + 2;
      addGameGridXY(p2soldier1Clickable);
      gameStage.addChild(p2soldier1Clickable);

      p2soldier2Clickable.addChild(p2squareS2);
      p2soldier2Clickable.x = (initXYArray[34] - 1)  *  60 + 2;
      p2soldier2Clickable.y = (initXYArray[35] - 1)  *  60 + 2;
      addGameGridXY(p2soldier2Clickable);
      gameStage.addChild(p2soldier2Clickable);

      p2engineer1Clickable.addChild(p2squareE1);
      p2engineer1Clickable.x = (initXYArray[36] - 1)  *  60 + 2;
      p2engineer1Clickable.y = (initXYArray[37] - 1)  *  60 + 2;
      addGameGridXY(p2engineer1Clickable);
      gameStage.addChild(p2engineer1Clickable);

      p2engineer2Clickable.addChild(p2squareE2);
      p2engineer2Clickable.x = (initXYArray[38] - 1)  *  60 + 2;
      p2engineer2Clickable.y = (initXYArray[39] - 1)  *  60 + 2;
      addGameGridXY(p2engineer2Clickable);
      gameStage.addChild(p2engineer2Clickable);

      p2rider1Clickable.addChild(p2squareR1);
      p2rider1Clickable.x = (initXYArray[40] - 1)  *  60 + 2;
      p2rider1Clickable.y = (initXYArray[41] - 1)  *  60 + 2;
      addGameGridXY(p2rider1Clickable);
      gameStage.addChild(p2rider1Clickable);

      p2rider2Clickable.addChild(p2squareR2);
      p2rider2Clickable.x = (initXYArray[42] - 1)  *  60 + 2;
      p2rider2Clickable.y = (initXYArray[43] - 1)  *  60 + 2;
      addGameGridXY(p2rider2Clickable);
      gameStage.addChild(p2rider2Clickable);

      p2assassinClickable.addChild(p2squareAs);
      p2assassinClickable.x = (initXYArray[44] - 1)  *  60 + 2;
      p2assassinClickable.y = (initXYArray[45] - 1)  *  60 + 2;
      addGameGridXY(p2assassinClickable);
      gameStage.addChild(p2assassinClickable);

      p2archerClickable.addChild(p2squareAr);
      p2archerClickable.x = (initXYArray[46] - 1)  *  60 + 2;
      p2archerClickable.y = (initXYArray[47] - 1)  *  60 + 2;
      addGameGridXY(p2archerClickable);
      gameStage.addChild(p2archerClickable);

      p2mysticClickable.addChild(p2squareMy);
      p2mysticClickable.x = (initXYArray[48] - 1)  *  60 + 2;
      p2mysticClickable.y = (initXYArray[49] - 1)  *  60 + 2;
      addGameGridXY(p2mysticClickable);
      gameStage.addChild(p2mysticClickable);

      p2trap1Clickable.addChild(p2squareT1);
      p2trap1Clickable.x = (initXYArray[50] - 1)  *  60 + 2;
      p2trap1Clickable.y = (initXYArray[51] - 1)  *  60 + 2;
      addGameGridXY(p2trap1Clickable);
      gameStage.addChild(p2trap1Clickable);

      p2trap2Clickable.addChild(p2squareT2);
      p2trap2Clickable.x = (initXYArray[52] - 1)  *  60 + 2;
      p2trap2Clickable.y = (initXYArray[53] - 1)  *  60 + 2;
      addGameGridXY(p2trap2Clickable);
      gameStage.addChild(p2trap2Clickable);

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
      p1commanderClickable.addChild(p1squareCo);
      p1commanderClickable.x = (initXYArray[0] - 1) * 60 + 2;
      p1commanderClickable.y = (9 -  initXYArray[1] - 1)  *  60 + 2;
      addGameGridXY(p1commanderClickable);
      gameStage.addChild(p1commanderClickable);

      p1captainClickable.addChild(p1squareCa);
      p1captainClickable.x = (initXYArray[2] - 1)  *  60 + 2;
      p1captainClickable.y = (9 -  initXYArray[3] - 1)  *  60 + 2;
      addGameGridXY(p1captainClickable);
      gameStage.addChild(p1captainClickable);

      p1soldier1Clickable.addChild(p1squareS1);
      p1soldier1Clickable.x = (initXYArray[4] - 1)  *  60 + 2;
      p1soldier1Clickable.y = (9 -  initXYArray[5] - 1)  *  60 + 2;
      addGameGridXY(p1soldier1Clickable);
      gameStage.addChild(p1soldier1Clickable);

      p1soldier2Clickable.addChild(p1squareS2);
      p1soldier2Clickable.x = (initXYArray[6] - 1)  *  60 + 2;
      p1soldier2Clickable.y = (9 -  initXYArray[7] - 1)  *  60 + 2;
      addGameGridXY(p1soldier2Clickable);
      gameStage.addChild(p1soldier2Clickable);

      p1engineer1Clickable.addChild(p1squareE1);
      p1engineer1Clickable.x = (initXYArray[8] - 1)  *  60 + 2;
      p1engineer1Clickable.y = (9 -  initXYArray[9] - 1)  *  60 + 2;
      addGameGridXY(p1engineer1Clickable);
      gameStage.addChild(p1engineer1Clickable);

      p1engineer2Clickable.addChild(p1squareE2);
      p1engineer2Clickable.x = (initXYArray[10] - 1)  *  60 + 2;
      p1engineer2Clickable.y = (9 -  initXYArray[11] - 1)  *  60 + 2;
      addGameGridXY(p1engineer2Clickable);
      gameStage.addChild(p1engineer2Clickable);

      p1rider1Clickable.addChild(p1squareR1);
      p1rider1Clickable.x = (initXYArray[12] - 1)  *  60 + 2;
      p1rider1Clickable.y = (9 -  initXYArray[13] - 1)  *  60 + 2;
      addGameGridXY(p1rider1Clickable);
      gameStage.addChild(p1rider1Clickable);

      p1rider2Clickable.addChild(p1squareR2);
      p1rider2Clickable.x = (initXYArray[14] - 1)  *  60 + 2;
      p1rider2Clickable.y = (9 -  initXYArray[15] - 1)  *  60 + 2;
      addGameGridXY(p1rider2Clickable);
      gameStage.addChild(p1rider2Clickable);

      p1assassinClickable.addChild(p1squareAs);
      p1assassinClickable.x = (initXYArray[16] - 1)  *  60 + 2;
      p1assassinClickable.y = (9 -  initXYArray[17] - 1)  *  60 + 2;
      addGameGridXY(p1assassinClickable);
      gameStage.addChild(p1assassinClickable);;

      p1archerClickable.addChild(p1squareAr);
      p1archerClickable.x = (initXYArray[18] - 1)  *  60 + 2;
      p1archerClickable.y = (9 -  initXYArray[19] - 1)  *  60 + 2;
      addGameGridXY(p1archerClickable);
      gameStage.addChild(p1archerClickable);

      p1mysticClickable.addChild(p1squareMy);
      p1mysticClickable.x = (initXYArray[20] - 1)  *  60 + 2;
      p1mysticClickable.y = (9 -  initXYArray[21] - 1)  *  60 + 2;
      addGameGridXY(p1mysticClickable);
      gameStage.addChild(p1mysticClickable);

      p1trap1Clickable.addChild(p1squareT1);
      p1trap1Clickable.x = (initXYArray[22] - 1)  *  60 + 2;
      p1trap1Clickable.y = (9 -  initXYArray[23] - 1)  *  60 + 2;
      addGameGridXY(p1trap1Clickable);
      gameStage.addChild(p1trap1Clickable);

      p1trap2Clickable.addChild(p1squareT2);
      p1trap2Clickable.x = (initXYArray[24] - 1)  *  60 + 2;
      p1trap2Clickable.y = (9 -  initXYArray[25] - 1)  *  60 + 2;
      addGameGridXY(p1trap2Clickable);
      gameStage.addChild(p1trap2Clickable);

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

if(playerNum == 1){
//initializing the pieces captured canvas

	
	//create captured commander
	var captCommander = new createjs.Shape();
	var captCommanderText = new createjs.Text("Commander", "10px Arial", "#000000");
	captCommanderText.textAlign = "center";
	captCommanderText.x = 28;
	captCommanderText.y = 15;
	captCommander.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captCommanderClickable = new createjs.Container();
	captCommanderClickable.pieceType = "Commander";
	captCommanderClickable.addChild(captCommander,captCommanderText);
	captCommanderClickable.isHighlighted = false;
	piecesCaptured.push(captCommanderClickable);
	captCommanderClickable.alpha = 0.25;
	captCommanderClickable.x = 0;
	captCommanderClickable.y = 0;
	captStage.addChild(captCommanderClickable);
	
	//create captured captain
	var captCaptain = new createjs.Shape();
	var captCaptainText = new createjs.Text("Captain", "10px Arial", "#000000");
	captCaptainText.textAlign = "center";
	captCaptainText.x = 28;
	captCaptainText.y = 15;
	captCaptain.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captCaptainClickable = new createjs.Container();
	captCaptainClickable.pieceType = "Captain";
	captCaptainClickable.addChild(captCaptain,captCaptainText);
	captCaptainClickable.isHighlighted = false;
	piecesCaptured.push(captCaptainClickable);	
	captCaptainClickable.alpha = 0.25;
	captCaptainClickable.x = 60;
	captCaptainClickable.y = 0;
	captStage.addChild(captCaptainClickable);
	
	//create captured soldier1
	var captSoldier1 = new createjs.Shape();
	var captSoldier1Text = new createjs.Text("Soldier", "10px Arial", "#000000");
	captSoldier1Text.textAlign = "center";
	captSoldier1Text.x = 28;
	captSoldier1Text.y = 15;
	captSoldier1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captSoldier1Clickable = new createjs.Container();
	captSoldier1Clickable.pieceType = "Soldier";
	captSoldier1Clickable.addChild(captSoldier1,captSoldier1Text);
	captSoldier1Clickable.isHighlighted = false;
	piecesCaptured.push(captSoldier1Clickable);	
	captSoldier1Clickable.alpha = 0.25;
	captSoldier1Clickable.x = 120;
	captSoldier1Clickable.y = 0;
	captStage.addChild(captSoldier1Clickable);

	//create captured soldier2
	var captSoldier2 = new createjs.Shape();
	var captSoldier2Text = new createjs.Text("Soldier", "10px Arial", "#000000");
	captSoldier2Text.textAlign = "center";
	captSoldier2Text.x = 28;
	captSoldier2Text.y = 15;
	captSoldier2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captSoldier2Clickable = new createjs.Container();
	captSoldier2Clickable.pieceType = "Soldier";
	captSoldier2Clickable.addChild(captSoldier2,captSoldier2Text);
	captSoldier2Clickable.isHighlighted = false;
	piecesCaptured.push(captSoldier2Clickable);	
	captSoldier2Clickable.alpha = 0.25;
	captSoldier2Clickable.x = 180;
	captSoldier2Clickable.y = 0;
	captStage.addChild(captSoldier2Clickable);
	
	//create captured engineer1
	var captEngineer1 = new createjs.Shape();
	var captEngineer1Text = new createjs.Text("Engineer", "10px Arial", "#000000");
	captEngineer1Text.textAlign = "center";
	captEngineer1Text.x = 28;
	captEngineer1Text.y = 15;
	captEngineer1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captEngineer1Clickable = new createjs.Container();
	captEngineer1Clickable.pieceType = "Engineer";
	captEngineer1Clickable.addChild(captEngineer1,captEngineer1Text);
	captEngineer1Clickable.isHighlighted = false;
	piecesCaptured.push(captEngineer1Clickable);
	captEngineer1Clickable.alpha = 0.25;
	captEngineer1Clickable.x = 240;
	captEngineer1Clickable.y = 0;
	captStage.addChild(captEngineer1Clickable);

	//create captured engineer2
	var captEngineer2 = new createjs.Shape();
	var captEngineer2Text = new createjs.Text("Engineer", "10px Arial", "#000000");
	captEngineer2Text.textAlign = "center";
	captEngineer2Text.x = 28;
	captEngineer2Text.y = 15;
	captEngineer2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captEngineer2Clickable = new createjs.Container();
	captEngineer2Clickable.pieceType = "Engineer";
	captEngineer2Clickable.addChild(captEngineer2,captEngineer2Text);
	captEngineer2Clickable.isHighlighted = false;
	piecesCaptured.push(captEngineer2Clickable);
	captEngineer2Clickable.alpha = 0.25;
	captEngineer2Clickable.x = 0;
	captEngineer2Clickable.y = 60;
	captStage.addChild(captEngineer2Clickable);
	
	//create captured rider1
	var captRider1 = new createjs.Shape();
	var captRider1Text = new createjs.Text("Rider", "10px Arial", "#000000");
	captRider1Text.textAlign = "center";
	captRider1Text.x = 28;
	captRider1Text.y = 15;
	captRider1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captRider1Clickable = new createjs.Container();
	captRider1Clickable.pieceType = "Rider";
	captRider1Clickable.addChild(captRider1, captRider1Text);
	captRider1Clickable.isHighlighted = false;
	piecesCaptured.push(captRider1Clickable);
	captRider1Clickable.alpha = 0.25;
	captRider1Clickable.x = 60;
	captRider1Clickable.y = 60;
	captStage.addChild(captRider1Clickable);

	//create captured rider2
	var captRider2 = new createjs.Shape();
	var captRider2Text = new createjs.Text("Rider", "10px Arial", "#000000");
	captRider2Text.textAlign = "center";
	captRider2Text.x = 28;
	captRider2Text.y = 15;
	captRider2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captRider2Clickable = new createjs.Container();
	captRider2Clickable.pieceType = "Rider";
	captRider2Clickable.addChild(captRider2, captRider2Text);
	captRider2Clickable.isHighlighted = false;
	piecesCaptured.push(captRider2Clickable);
	captRider2Clickable.alpha = 0.25;
	captRider2Clickable.x = 120;
	captRider2Clickable.y = 60;
	captStage.addChild(captRider2Clickable);
	
	//create captured archer
	var captArcher = new createjs.Shape();
	var captArcherText = new createjs.Text("Archer", "10px Arial", "#000000");
	captArcherText.textAlign = "center";
	captArcherText.x = 28;
	captArcherText.y = 15;
	captArcher.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captArcherClickable = new createjs.Container();
	captArcherClickable.pieceType = "Archer";
	captArcherClickable.addChild(captArcher, captArcherText);
	captArcherClickable.isHighlighted = false;
	piecesCaptured.push(captArcherClickable);
	captArcherClickable.alpha = 0.25;
	captArcherClickable.x = 180;
	captArcherClickable.y = 60;
	captStage.addChild(captArcherClickable);
	
	//create captured assassin
	var captAs = new createjs.Shape();
	var captAsText = new createjs.Text("Assassin", "10px Arial", "#000000");
	captAsText.textAlign = "center";
	captAsText.x = 28;
	captAsText.y = 15;
	captAs.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captAsClickable = new createjs.Container();
	captAsClickable.pieceType = "Assassin";
	captAsClickable.addChild(captAs, captAsText);
	captAsClickable.isHighlighted = false;
	piecesCaptured.push(captAsClickable);	
	captAsClickable.alpha = 0.25;
	captAsClickable.x = 240;
	captAsClickable.y = 60;
	captStage.addChild(captAsClickable);
	
	//create captured mystic
	var captMystic = new createjs.Shape();
	var captMysticText = new createjs.Text("Mystic", "10px Arial", "#000000");
	captMysticText.textAlign = "center";
	captMysticText.x = 28;
	captMysticText.y = 15;
	captMystic.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captMysticClickable = new createjs.Container();
	captMysticClickable.pieceType = "Mystic";
	captMysticClickable.addChild(captMystic, captMysticText);
	captMysticClickable.isHighlighted = false;
	piecesCaptured.push(captMysticClickable);
	captMysticClickable.alpha = 0.25;
	captMysticClickable.x = 0;
	captMysticClickable.y = 120;
	captStage.addChild(captMysticClickable);
	
	//create captured trap1
	var captTrap1 = new createjs.Shape();
	var captTrap1Text = new createjs.Text("Trap", "10px Arial", "#000000");
	captTrap1Text.textAlign = "center";
	captTrap1Text.x = 28;
	captTrap1Text.y = 15;
	captTrap1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captTrap1Clickable = new createjs.Container();
	captTrap1Clickable.pieceType = "Trap";
	captTrap1Clickable.addChild(captTrap1, captTrap1Text);
	captTrap1Clickable.isHighlighted = false;
	piecesCaptured.push(captTrap1Clickable);
	captTrap1Clickable.alpha = 0.25;
	captTrap1Clickable.x = 60;
	captTrap1Clickable.y = 120;
	captStage.addChild(captTrap1Clickable);

	//create captured trap2
	var captTrap2 = new createjs.Shape();
	var captTrap2Text = new createjs.Text("Trap", "10px Arial", "#000000");
	captTrap2Text.textAlign = "center";
	captTrap2Text.x = 28;
	captTrap2Text.y = 15;
	captTrap2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captTrap2Clickable = new createjs.Container();
	captTrap2Clickable.pieceType = "Trap";
	captTrap2Clickable.addChild(captTrap2, captTrap2Text);
	captTrap2Clickable.isHighlighted = false;
	piecesCaptured.push(captTrap2Clickable);
	captTrap2Clickable.alpha = 0.25;
	captTrap2Clickable.x = 120;
	captTrap2Clickable.y = 120;
	captStage.addChild(captTrap2Clickable);


	//create captured important thing
	var captImpThing = new createjs.Shape();
	var captImpThingText = new createjs.Text("Important \nThing", "10px Arial", "#000000");
	captImpThingText.textAlign = "center";
	captImpThingText.x = 28;
	captImpThingText.y = 15;
	captImpThing.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captImpThingClickable = new createjs.Container();
	captImpThingClickable.pieceType = "Important Thing";
	captImpThingClickable.addChild(captImpThing, captImpThingText);
	piecesCaptured.push(captImpThingClickable);	
	captImpThingClickable.alpha = 0.25;
	captImpThingClickable.x = 180;
	captImpThingClickable.y = 120;
	captImpThingClickable.isHighlighted = false;
	captStage.addChild(captImpThingClickable);
}

else{

	//for player 2
	//initializing the pices captured canvas
	//create captured commander
	var captCommander = new createjs.Shape();
	var captCommanderText = new createjs.Text("Commander", "10px Arial", "#000000");
	captCommanderText.textAlign = "center";
	captCommanderText.x = 28;
	captCommanderText.y = 15;
	captCommander.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captCommanderClickable = new createjs.Container();
	captCommanderClickable.pieceType = "Commander";
	captCommanderClickable.addChild(captCommander,captCommanderText);
	captCommanderClickable.isHighlighted = false;
	piecesCaptured.push(captCommanderClickable);
	captCommanderClickable.alpha = 0.25;
	captCommanderClickable.x = 0;
	captCommanderClickable.y = 0;
	captStage.addChild(captCommanderClickable);
	
	//create captured captain
	var captCaptain = new createjs.Shape();
	var captCaptainText = new createjs.Text("Captain", "10px Arial", "#000000");
	captCaptainText.textAlign = "center";
	captCaptainText.x = 28;
	captCaptainText.y = 15;
	captCaptain.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captCaptainClickable = new createjs.Container();
	captCaptainClickable.pieceType = "Captain";
	captCaptainClickable.addChild(captCaptain,captCaptainText);
	captCaptainClickable.isHighlighted = false;
	piecesCaptured.push(captCaptainClickable);	
	captCaptainClickable.alpha = 0.25;
	captCaptainClickable.x = 60;
	captCaptainClickable.y = 0;
	captStage.addChild(captCaptainClickable);
	
	//create captured soldier1
	var captSoldier1 = new createjs.Shape();
	var captSoldier1Text = new createjs.Text("Soldier", "10px Arial", "#000000");
	captSoldier1Text.textAlign = "center";
	captSoldier1Text.x = 28;
	captSoldier1Text.y = 15;
	captSoldier1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captSoldier1Clickable = new createjs.Container();
	captSoldier1Clickable.pieceType = "Soldier";
	captSoldier1Clickable.addChild(captSoldier1,captSoldier1Text);
	captSoldier1Clickable.isHighlighted = false;
	piecesCaptured.push(captSoldier1Clickable);	
	captSoldier1Clickable.alpha = 0.25;
	captSoldier1Clickable.x = 120;
	captSoldier1Clickable.y = 0;
	captStage.addChild(captSoldier1Clickable);

	//create captured soldier2
	var captSoldier2 = new createjs.Shape();
	var captSoldier2Text = new createjs.Text("Soldier", "10px Arial", "#000000");
	captSoldier2Text.textAlign = "center";
	captSoldier2Text.x = 28;
	captSoldier2Text.y = 15;
	captSoldier2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captSoldier2Clickable = new createjs.Container();
	captSoldier2Clickable.pieceType = "Soldier";
	captSoldier2Clickable.addChild(captSoldier2,captSoldier2Text);
	captSoldier2Clickable.isHighlighted = false;
	piecesCaptured.push(captSoldier2Clickable);	
	captSoldier2Clickable.alpha = 0.25;
	captSoldier2Clickable.x = 180;
	captSoldier2Clickable.y = 0;
	captStage.addChild(captSoldier2Clickable);
	
	//create captured engineer1
	var captEngineer1 = new createjs.Shape();
	var captEngineer1Text = new createjs.Text("Engineer", "10px Arial", "#000000");
	captEngineer1Text.textAlign = "center";
	captEngineer1Text.x = 28;
	captEngineer1Text.y = 15;
	captEngineer1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captEngineer1Clickable = new createjs.Container();
	captEngineer1Clickable.pieceType = "Engineer";
	captEngineer1Clickable.addChild(captEngineer1,captEngineer1Text);
	captEngineer1Clickable.isHighlighted = false;
	piecesCaptured.push(captEngineer1Clickable);
	captEngineer1Clickable.alpha = 0.25;
	captEngineer1Clickable.x = 240;
	captEngineer1Clickable.y = 0;
	captStage.addChild(captEngineer1Clickable);

	//create captured engineer2
	var captEngineer2 = new createjs.Shape();
	var captEngineer2Text = new createjs.Text("Engineer", "10px Arial", "#000000");
	captEngineer2Text.textAlign = "center";
	captEngineer2Text.x = 28;
	captEngineer2Text.y = 15;
	captEngineer2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captEngineer2Clickable = new createjs.Container();
	captEngineer2Clickable.pieceType = "Engineer";
	captEngineer2Clickable.addChild(captEngineer2,captEngineer2Text);
	captEngineer2Clickable.isHighlighted = false;
	piecesCaptured.push(captEngineer2Clickable);
	captEngineer2Clickable.alpha = 0.25;
	captEngineer2Clickable.x = 0;
	captEngineer2Clickable.y = 60;
	captStage.addChild(captEngineer2Clickable);
	
	//create captured rider1
	var captRider1 = new createjs.Shape();
	var captRider1Text = new createjs.Text("Rider", "10px Arial", "#000000");
	captRider1Text.textAlign = "center";
	captRider1Text.x = 28;
	captRider1Text.y = 15;
	captRider1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captRider1Clickable = new createjs.Container();
	captRider1Clickable.pieceType = "Rider";
	captRider1Clickable.addChild(captRider1, captRider1Text);
	captRider1Clickable.isHighlighted = false;
	piecesCaptured.push(captRider1Clickable);
	captRider1Clickable.alpha = 0.25;
	captRider1Clickable.x = 60;
	captRider1Clickable.y = 60;
	captStage.addChild(captRider1Clickable);

	//create captured rider2
	var captRider2 = new createjs.Shape();
	var captRider2Text = new createjs.Text("Rider", "10px Arial", "#000000");
	captRider2Text.textAlign = "center";
	captRider2Text.x = 28;
	captRider2Text.y = 15;
	captRider2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captRider2Clickable = new createjs.Container();
	captRider2Clickable.pieceType = "Rider";
	captRider2Clickable.addChild(captRider2, captRider2Text);
	captRider2Clickable.isHighlighted = false;
	piecesCaptured.push(captRider2Clickable);
	captRider2Clickable.alpha = 0.25;
	captRider2Clickable.x = 120;
	captRider2Clickable.y = 60;
	captStage.addChild(captRider2Clickable);
	
	//create captured archer
	var captArcher = new createjs.Shape();
	var captArcherText = new createjs.Text("Archer", "10px Arial", "#000000");
	captArcherText.textAlign = "center";
	captArcherText.x = 28;
	captArcherText.y = 15;
	captArcher.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captArcherClickable = new createjs.Container();
	captArcherClickable.pieceType = "Archer";
	captArcherClickable.addChild(captArcher, captArcherText);
	captArcherClickable.isHighlighted = false;
	piecesCaptured.push(captArcherClickable);
	captArcherClickable.alpha = 0.25;
	captArcherClickable.x = 180;
	captArcherClickable.y = 60;
	captStage.addChild(captArcherClickable);
	
	//create captured assassin
	var captAs = new createjs.Shape();
	var captAsText = new createjs.Text("Assassin", "10px Arial", "#000000");
	captAsText.textAlign = "center";
	captAsText.x = 28;
	captAsText.y = 15;
	captAs.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captAsClickable = new createjs.Container();
	captAsClickable.pieceType = "Assassin";
	captAsClickable.addChild(captAs, captAsText);
	captAsClickable.isHighlighted = false;
	piecesCaptured.push(captAsClickable);	
	captAsClickable.alpha = 0.25;
	captAsClickable.x = 240;
	captAsClickable.y = 60;
	captStage.addChild(captAsClickable);
	
	//create captured mystic
	var captMystic = new createjs.Shape();
	var captMysticText = new createjs.Text("Mystic", "10px Arial", "#000000");
	captMysticText.textAlign = "center";
	captMysticText.x = 28;
	captMysticText.y = 15;
	captMystic.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captMysticClickable = new createjs.Container();
	captMysticClickable.pieceType = "Mystic";
	captMysticClickable.addChild(captMystic, captMysticText);
	captMysticClickable.isHighlighted = false;
	piecesCaptured.push(captMysticClickable);
	captMysticClickable.alpha = 0.25;
	captMysticClickable.x = 0;
	captMysticClickable.y = 120;
	captStage.addChild(captMysticClickable);
	
	//create captured trap1
	var captTrap1 = new createjs.Shape();
	var captTrap1Text = new createjs.Text("Trap", "10px Arial", "#000000");
	captTrap1Text.textAlign = "center";
	captTrap1Text.x = 28;
	captTrap1Text.y = 15;
	captTrap1.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captTrap1Clickable = new createjs.Container();
	captTrap1Clickable.pieceType = "Trap";
	captTrap1Clickable.addChild(captTrap1, captTrap1Text);
	captTrap1Clickable.isHighlighted = false;
	piecesCaptured.push(captTrap1Clickable);
	captTrap1Clickable.alpha = 0.25;
	captTrap1Clickable.x = 60;
	captTrap1Clickable.y = 120;
	captStage.addChild(captTrap1Clickable);

	//create captured trap2
	var captTrap2 = new createjs.Shape();
	var captTrap2Text = new createjs.Text("Trap", "10px Arial", "#000000");
	captTrap2Text.textAlign = "center";
	captTrap2Text.x = 28;
	captTrap2Text.y = 15;
	captTrap2.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captTrap2Clickable = new createjs.Container();
	captTrap2Clickable.pieceType = "Trap";
	captTrap2Clickable.addChild(captTrap2, captTrap2Text);
	captTrap2Clickable.isHighlighted = false;
	piecesCaptured.push(captTrap2Clickable);
	captTrap2Clickable.alpha = 0.25;
	captTrap2Clickable.x = 120;
	captTrap2Clickable.y = 120;
	captStage.addChild(captTrap2Clickable);


	//create captured important thing
	var captImpThing = new createjs.Shape();
	var captImpThingText = new createjs.Text("Important \nThing", "10px Arial", "#000000");
	captImpThingText.textAlign = "center";
	captImpThingText.x = 28;
	captImpThingText.y = 15;
	captImpThing.graphics.beginFill(enemyColor).drawRect(0, 0, 59, 59);
	var captImpThingClickable = new createjs.Container();
	captImpThingClickable.pieceType = "Important Thing";
	captImpThingClickable.addChild(captImpThing, captImpThingText);
	piecesCaptured.push(captImpThingClickable);	
	captImpThingClickable.alpha = 0.25;
	captImpThingClickable.x = 180;
	captImpThingClickable.y = 120;
	captImpThingClickable.isHighlighted = false;
	captStage.addChild(captImpThingClickable);
	
	}

	//creating pieces for pieces being lost
if(playerNum == 1){

	//create lost commander
	var lostCommanderSquare = new createjs.Shape();
	var lostCommanderBMP = new createjs.Bitmap("images/Commander.png");
	var lostCommanderClickable = new createjs.Container();
	lostCommanderClickable.pieceType = "Commander";
	lostCommanderClickable.addChild(lostCommanderSquare,lostCommanderBMP);
	lostCommanderClickable.isHighlighted = false;
	piecesLost.push(lostCommanderClickable);	
	lostCommanderClickable.x = 0;
	lostCommanderClickable.y = 0;
	lostCommanderClickable.alpha = 0.25;
	lostStage.addChild(lostCommanderClickable);
	
	//create lost captain
	var lostCaptainSquare = new createjs.Shape();
	var lostCaptainBMP = new createjs.Bitmap("images/Captain.png");
	var lostCaptainClickable = new createjs.Container();
	lostCaptainClickable.pieceType = "Captain";
	lostCaptainClickable.addChild(lostCaptainSquare,lostCaptainBMP);
	lostCaptainClickable.isHighlighted = false;
	piecesLost.push(lostCaptainClickable);	
	lostCaptainClickable.x = 60;
	lostCaptainClickable.y = 0;
	lostCaptainClickable.alpha = 0.25;
	lostStage.addChild(lostCaptainClickable);
	
	//create lost soldier 1
	var lostSoldier1Square = new createjs.Shape();
	var lostSoldier1BMP = new createjs.Bitmap("images/Soldier.png");
	var lostSoldier1Clickable = new createjs.Container();
	lostSoldier1Clickable.pieceType = "Soldier";
	lostSoldier1Clickable.addChild(lostSoldier1Square,lostSoldier1BMP);
	lostSoldier1Clickable.isHighlighted = false;
	piecesLost.push(lostSoldier1Clickable);	
	lostSoldier1Clickable.x = 120;
	lostSoldier1Clickable.y = 0;
	lostSoldier1Clickable.alpha = 0.25;
	lostStage.addChild(lostSoldier1Clickable);
	
	//create lost soldier 2
	var lostSoldier2Square = new createjs.Shape();
	var lostSoldier2BMP = new createjs.Bitmap("images/Soldier.png");
	var lostSoldier2Clickable = new createjs.Container();
	lostSoldier2Clickable.pieceType = "Soldier";
	lostSoldier2Clickable.addChild(lostSoldier2Square,lostSoldier2BMP);
	lostSoldier2Clickable.isHighlighted = false;
	piecesLost.push(lostSoldier1Clickable);	
	lostSoldier2Clickable.x = 180;
	lostSoldier2Clickable.y = 0;
	lostSoldier2Clickable.alpha = 0.25;
	lostStage.addChild(lostSoldier2Clickable);
	
	//create lost engineer 1
	var lostEngineer1Square = new createjs.Shape();
	var lostEngineer1BMP = new createjs.Bitmap("images/Engineer.png");
	var lostEngineer1Clickable = new createjs.Container();
	lostEngineer1Clickable.pieceType = "Engineer";
	lostEngineer1Clickable.addChild(lostEngineer1Square,lostEngineer1BMP);
	lostEngineer1Clickable.isHighlighted = false;
	piecesLost.push(lostEngineer1Clickable);	
	lostEngineer1Clickable.x = 240;
	lostEngineer1Clickable.y = 0;
	lostEngineer1Clickable.alpha = 0.25;
	lostStage.addChild(lostEngineer1Clickable);
	
	//create lost engineer 2
	var lostEngineer2Square = new createjs.Shape();
	var lostEngineer2BMP = new createjs.Bitmap("images/Engineer.png");
	var lostEngineer2Clickable = new createjs.Container();
	lostEngineer2Clickable.pieceType = "Engineer";
	lostEngineer2Clickable.addChild(lostEngineer2Square,lostEngineer2BMP);
	lostEngineer2Clickable.isHighlighted = false;
	piecesLost.push(lostEngineer2Clickable);	
	lostEngineer2Clickable.x = 0;
	lostEngineer2Clickable.y = 60;
	lostEngineer2Clickable.alpha = 0.25;
	lostStage.addChild(lostEngineer2Clickable);
	
	//create lost rider 1
	var lostRider1Square = new createjs.Shape();
	var lostRider1BMP = new createjs.Bitmap("images/Rider.png");
	var lostRider1Clickable = new createjs.Container();
	lostRider1Clickable.pieceType = "Rider";
	lostRider1Clickable.addChild(lostRider1Square,lostRider1BMP);
	lostRider1Clickable.isHighlighted = false;
	piecesLost.push(lostRider1Clickable);	
	lostRider1Clickable.x = 60;
	lostRider1Clickable.y = 60;
	lostRider1Clickable.alpha = 0.25;
	lostStage.addChild(lostRider1Clickable);
	
	//create lost rider 2
	var lostRider2Square = new createjs.Shape();
	var lostRider2BMP = new createjs.Bitmap("images/Rider.png");
	var lostRider2Clickable = new createjs.Container();
	lostRider2Clickable.pieceType = "Rider";
	lostRider2Clickable.addChild(lostRider2Square,lostRider2BMP);
	lostRider2Clickable.isHighlighted = false;
	piecesLost.push(lostRider2Clickable);	
	lostRider2Clickable.x = 120;
	lostRider2Clickable.y = 60;
	lostRider2Clickable.alpha = 0.25;
	lostStage.addChild(lostRider2Clickable);
	
	//create lost archer
	var lostArcherSquare = new createjs.Shape();
	var lostArcherBMP = new createjs.Bitmap("images/Archer.png");
	var lostArcherClickable = new createjs.Container();
	lostArcherClickable.pieceType = "Archer";
	lostArcherClickable.addChild(lostArcherSquare,lostArcherBMP);
	lostArcherClickable.isHighlighted = false;
	piecesLost.push(lostArcherClickable);	
	lostArcherClickable.x = 180;
	lostArcherClickable.y = 60;
	lostArcherClickable.alpha = 0.25;
	lostStage.addChild(lostArcherClickable);

	//create lost assassin
	var lostAsSquare = new createjs.Shape();
	var lostAsBMP = new createjs.Bitmap("images/Assassin.png");
	var lostAsClickable = new createjs.Container();
	lostAsClickable.pieceType = "Assassin";
	lostAsClickable.addChild(lostAsSquare,lostAsBMP);
	lostAsClickable.isHighlighted = false;
	piecesLost.push(lostAsClickable);	
	lostAsClickable.x = 240;
	lostAsClickable.y = 60;
	lostAsClickable.alpha = 0.25;
	lostStage.addChild(lostAsClickable);

	
	//create lost mystic
	var lostMysticSquare = new createjs.Shape();
	var lostMysticBMP = new createjs.Bitmap("images/Mystic.png");
	var lostMysticClickable = new createjs.Container();
	lostMysticClickable.pieceType = "Mystic";
	lostMysticClickable.addChild(lostMysticSquare,lostMysticBMP);
	lostMysticClickable.isHighlighted = false;
	piecesLost.push(lostMysticClickable);	
	lostMysticClickable.x = 0;
	lostMysticClickable.y = 120;
	lostMysticClickable.alpha = 0.25;
	lostStage.addChild(lostMysticClickable);
	
	//create lost trap1
	var lostTrap1Square = new createjs.Shape();
	var lostTrap1BMP = new createjs.Bitmap("images/Trap.png");
	var lostTrap1Clickable = new createjs.Container();
	lostTrap1Clickable.pieceType = "Trap";
	lostTrap1Clickable.addChild(lostTrap1Square,lostTrap1BMP);
	lostTrap1Clickable.isHighlighted = false;
	piecesLost.push(lostTrap1Clickable);	
	lostTrap1Clickable.x = 60;
	lostTrap1Clickable.y = 120;
	lostTrap1Clickable.alpha = 0.25;
	lostStage.addChild(lostTrap1Clickable);

	//create lost trap2
	var lostTrap2Square = new createjs.Shape();
	var lostTrap2BMP = new createjs.Bitmap("images/Trap.png");
	var lostTrap2Clickable = new createjs.Container();
	lostTrap2Clickable.pieceType = "Trap";
	lostTrap2Clickable.addChild(lostTrap2Square,lostTrap2BMP);
	lostTrap2Clickable.isHighlighted = false;
	piecesLost.push(lostTrap2Clickable);	
	lostTrap2Clickable.x = 120;
	lostTrap2Clickable.y = 120;
	lostTrap2Clickable.alpha = 0.25;
	lostStage.addChild(lostTrap2Clickable);

	//create lost important thing
	var lostImportantThingSquare = new createjs.Shape();
	var lostImportantThingBMP = new createjs.Bitmap("images/ImportantThing.png");
	var lostImportantThingClickable = new createjs.Container();
	lostImportantThingClickable.pieceType = "Important thing";
	lostImportantThingClickable.addChild(lostImportantThingSquare,lostImportantThingBMP);
	lostImportantThingClickable.isHighlighted = false;
	piecesLost.push(lostImportantThingClickable);	
	lostImportantThingClickable.x = 180;
	lostImportantThingClickable.y = 120;
	lostImportantThingClickable.alpha = 0.25;
	lostStage.addChild(lostImportantThingClickable);

}








