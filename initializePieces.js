//==========================================================================Rocks
//rocks will recieve x and y from server
var rock1 = new createjs.Shape();
//rock1.graphics.beginFill("black").drawCircle(29, 29, 20);
rock1.pieceType = "rock";
rock1.team = '3';
var rock2 = new createjs.Shape();
//rock2.graphics.beginFill("black").drawCircle(209, 60, 20);
rock2.pieceType = "rock";
rock2.team = '3';
var rock3 = new createjs.Shape();
//rock3.graphics.beginFill("black").drawCircle(329, 60, 20);
rock3.pieceType = "rock";
rock3.team = '3';

//==========================================================================Player 1 game pieces

//create clickable important thing
var p1squareIT = new createjs.Shape();
var p1labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
p1labelIT.textAlign = "center";
p1labelIT.x = 28;
p1labelIT.y = 15;
var p1importantThingClickable = new createjs.Container();
p1importantThingClickable.pieceType =  "Important Thing";
p1importantThingClickable.team = '1';

//create clickable trap1
var p1squareT1 = new createjs.Shape();
var p1labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT1.textAlign = "center";
p1labelT1.x = 28;
p1labelT1.y = 15;
var p1trap1Clickable = new createjs.Container();
p1trap1Clickable.pieceType = "Trap";
p1trap1Clickable.team = '1';

//create clickable trap2
var p1squareT2 = new createjs.Shape();
var p1labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT2.textAlign = "center";
p1labelT2.x = 28;
p1labelT2.y = 15;
var p1trap2Clickable = new createjs.Container();
p1trap2Clickable.pieceType = "Trap";
p1trap2Clickable.team = '1';

//create clickable archer
var p1squareAr = new createjs.Shape();
p1squareAr.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
p1labelAr.textAlign = "center";
p1labelAr.x = 28;
p1labelAr.y = 15;
var p1archerClickable = new createjs.Container();
p1archerClickable.pieceType = "Archer";
p1archerClickable.team = '1';

//create clickable mystic
var p1squareMy = new createjs.Shape();
var p1labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
p1labelMy.textAlign = "center";
p1labelMy.x = 28;
p1labelMy.y = 15;
var p1mysticClickable = new createjs.Container();
p1mysticClickable.pieceType = "Mystic";
p1mysticClickable.team = '1';

//create clickable rider1
var p1squareR1 = new createjs.Shape();
p1squareR1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p1labelR1.textAlign = "center";
p1labelR1.x = 28;
p1labelR1.y = 15;
var p1rider1Clickable = new createjs.Container();
p1rider1Clickable.pieceType = "Rider";
p1rider1Clickable.team = '1';

//create clickable rider2
var p1squareR2 = new createjs.Shape();
var p1labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p1labelR2.textAlign = "center";
p1labelR2.x = 28;
p1labelR2.y = 15;
var p1rider2Clickable = new createjs.Container();
p1rider2Clickable.pieceType = "Rider";
p1rider2Clickable.team =  '1';

//create clickable assassin
var p1squareAs = new createjs.Shape();;
var p1labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
p1labelAs.textAlign = "center";
p1labelAs.x = 28;
p1labelAs.y = 15;
var p1assassinClickable = new createjs.Container();
p1assassinClickable.pieceType = "Assassin";
p1assassinClickable.team =  '1';

//create clickable soldier1
var p1squareS1 = new createjs.Shape();
var p1labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p1labelS1.textAlign = "center";
p1labelS1.x = 28;
p1labelS1.y = 15;
var p1soldier1Clickable = new createjs.Container();
p1soldier1Clickable.pieceType = "Soldier";
p1soldier1Clickable.team =  '1';

//create clickable soldier2
var p1squareS2 = new createjs.Shape();
var p1labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p1labelS2.textAlign = "center";
p1labelS2.x = 28;
p1labelS2.y = 15;
var p1soldier2Clickable = new createjs.Container();
p1soldier2Clickable.pieceType = "Soldier";
p1soldier2Clickable.team =  '1';

//create clickable engineer1
var p1squareE1 = new createjs.Shape();
var p1labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p1labelE1.textAlign = "center";
p1labelE1.x = 28;
p1labelE1.y = 15;
var p1engineer1Clickable = new createjs.Container();
p1engineer1Clickable.pieceType = "Engineer";
p1engineer1Clickable.team =  '1';

//create clickable engineer2
var p1squareE2 = new createjs.Shape();
var p1labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p1labelE2.textAlign = "center";
p1labelE2.x = 28;
p1labelE2.y = 15;
var p1engineer2Clickable = new createjs.Container();
p1engineer2Clickable.pieceType = "Engineer";
p1engineer2Clickable.team =  '1';

//create clickable captain
var p1squareCa = new createjs.Shape();
var p1labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
p1labelCa.textAlign = "center";
p1labelCa.x = 28;
p1labelCa.y = 15;
var p1captainClickable = new createjs.Container();
p1captainClickable.pieceType = "Captain";
p1captainClickable.team =  '1';

//create clickable commander
var p1squareCo = new createjs.Shape();
var p1labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
p1labelCo.textAlign = "center";
p1labelCo.x = 28;
p1labelCo.y = 15;
var p1commanderClickable = new createjs.Container();
p1commanderClickable.pieceType = "Commander";
p1commanderClickable.team =  '1';

//==========================================================================Player 2 game pieces
//create clickable important thing
var p2squareIT = new createjs.Shape();
var p2labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
p2labelIT.textAlign = "center";
p2labelIT.x = 28;
p2labelIT.y = 15;
var p2importantThingClickable = new createjs.Container();
p2importantThingClickable.pieceType =  "Important Thing";
p2importantThingClickable.team =  '2';

//create clickable trap2
var p2squareT1 = new createjs.Shape();
var p2labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p2labelT1.textAlign = "center";
p2labelT1.x = 28;
p2labelT1.y = 15;
var p2trap1Clickable = new createjs.Container();
p2trap1Clickable.pieceType = "Trap";
p2trap1Clickable.team =  '2';

//create clickable trap2
var p2squareT2 = new createjs.Shape();
var p2labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p2labelT2.textAlign = "center";
p2labelT2.x = 28;
p2labelT2.y = 15;
var p2trap2Clickable = new createjs.Container();
p2trap2Clickable.pieceType = "Trap";
p2trap2Clickable.team =  '2';

//create clickable archer
var p2squareAr = new createjs.Shape();
var p2labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
p2labelAr.textAlign = "center";
p2labelAr.x = 28;
p2labelAr.y = 15;
var p2archerClickable = new createjs.Container();
p2archerClickable.pieceType = "Archer";
p2archerClickable.team =  '2';

//create clickable mystic
var p2squareMy = new createjs.Shape();
var p2labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
p2labelMy.textAlign = "center";
p2labelMy.x = 28;
p2labelMy.y = 15;
var p2mysticClickable = new createjs.Container();
p2mysticClickable.pieceType = "Mystic";
p2mysticClickable.team =  '2';

//create clickable rider1
var p2squareR1 = new createjs.Shape();
var p2labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p2labelR1.textAlign = "center";
p2labelR1.x = 28;
p2labelR1.y = 15;
var p2rider1Clickable = new createjs.Container();
p2rider1Clickable.pieceType = "Rider";
p2rider1Clickable.team =  '2';

//create clickable rider2
var p2squareR2 = new createjs.Shape();
var p2labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p2labelR2.textAlign = "center";
p2labelR2.x = 28;
p2labelR2.y = 15;
var p2rider2Clickable = new createjs.Container();
p2rider2Clickable.pieceType = "Rider";
p2rider2Clickable.team =  '2';

//create clickable assassin
var p2squareAs = new createjs.Shape();
var p2labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
p2labelAs.textAlign = "center";
p2labelAs.x = 28;
p2labelAs.y = 15;
var p2assassinClickable = new createjs.Container();
p2assassinClickable.pieceType = "Assassin";
p2assassinClickable.team =  '2';

//create clickable soldier1
var p2squareS1 = new createjs.Shape();
var p2labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p2labelS1.textAlign = "center";
p2labelS1.x = 28;
p2labelS1.y = 15;
var p2soldier1Clickable = new createjs.Container();
p2soldier1Clickable.pieceType = "Soldier";
p2soldier1Clickable.team =  '2';

//create clickable soldier2
var p2squareS2 = new createjs.Shape();
var p2labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p2labelS2.textAlign = "center";
p2labelS2.x = 28;
p2labelS2.y = 15;
var p2soldier2Clickable = new createjs.Container();
p2soldier2Clickable.pieceType = "Soldier";
p2soldier2Clickable.team =  '2';

//create clickable engineer1
var p2squareE1 = new createjs.Shape();
var p2labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p2labelE1.textAlign = "center";
p2labelE1.x = 28;
p2labelE1.y = 15;
var p2engineer1Clickable = new createjs.Container();
p2engineer1Clickable.pieceType = "Engineer";
p2engineer1Clickable.team =  '2';

//create clickable engineer2
var p2squareE2 = new createjs.Shape();
var p2labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p2labelE2.textAlign = "center";
p2labelE2.x = 28;
p2labelE2.y = 15;
var p2engineer2Clickable = new createjs.Container();
p2engineer2Clickable.pieceType = "Engineer";
p2engineer2Clickable.team =  '2';

//create clickable captain
var p2squareCa = new createjs.Shape();
var p2labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
p2labelCa.textAlign = "center";
p2labelCa.x = 28;
p2labelCa.y = 15;
var p2captainClickable = new createjs.Container();
p2captainClickable.pieceType = "Captain";
p2captainClickable.team =  '2';

//create clickable commander
var p2squareCo = new createjs.Shape();
var p2labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
p2labelCo.textAlign = "center";
p2labelCo.x = 28;
p2labelCo.y = 15;
var p2commanderClickable = new createjs.Container();
p2commanderClickable.pieceType = "Commander";
p2commanderClickable.team =  '2';

//put all pieces in array so it can be search 
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
   if(playerNum == '1')
   {
      //Player 1
      p1squareCo.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1commanderClickable.addChild(p1squareCo, p1labelCo);
      p1commanderClickable.addEventListener("click", pieceClick);
      p1commanderClickable.x = (initXYArray[0] - 1)  *  60 + 2;
      p1commanderClickable.y = (initXYArray[1] - 1)  *  60 + 2;
      addGameGridXY(p1commanderClickable);
      gameStage.addChild(p1commanderClickable);

      p1squareCa.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1captainClickable.addChild(p1squareCa, p1labelCa);
      p1captainClickable.addEventListener("click", pieceClick);
      p1captainClickable.x = (initXYArray[2] - 1)  *  60 + 2;
      p1captainClickable.y = (initXYArray[3] - 1)  *  60 + 2;
      addGameGridXY(p1captainClickable);
      gameStage.addChild(p1captainClickable);

      p1squareS1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1soldier1Clickable.addChild(p1squareS1, p1labelS1);
      p1soldier1Clickable.addEventListener("click", pieceClick);
      p1soldier1Clickable.x = (initXYArray[4] - 1)  *  60 + 2;
      p1soldier1Clickable.y = (initXYArray[5] - 1)  *  60 + 2;
      addGameGridXY(p1soldier1Clickable);
      gameStage.addChild(p1soldier1Clickable);

      p1squareS2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1soldier2Clickable.addChild(p1squareS2, p1labelS2);
      p1soldier2Clickable.addEventListener("click", pieceClick);
      p1soldier2Clickable.x = (initXYArray[6] - 1)  *  60 + 2;
      p1soldier2Clickable.y = (initXYArray[7] - 1)  *  60 + 2;
      addGameGridXY(p1soldier2Clickable);
      gameStage.addChild(p1soldier2Clickable);

      p1squareE1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1engineer1Clickable.addChild(p1squareE1, p1labelE1);
      p1engineer1Clickable.addEventListener("click", pieceClick);
      p1engineer1Clickable.x = (initXYArray[8] - 1)  *  60 + 2;
      p1engineer1Clickable.y = (initXYArray[9] - 1)  *  60 + 2;
      addGameGridXY(p1engineer1Clickable);
      gameStage.addChild(p1engineer1Clickable);

      p1squareE2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1engineer2Clickable.addChild(p1squareE2, p1labelE2);
      p1engineer2Clickable.addEventListener("click", pieceClick);
      p1engineer2Clickable.x = (initXYArray[10] - 1)  *  60 + 2;
      p1engineer2Clickable.y = (initXYArray[11] - 1)  *  60 + 2;
      addGameGridXY(p1engineer2Clickable);
      gameStage.addChild(p1engineer2Clickable);

      p1squareR1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1rider1Clickable.addChild(p1squareR1, p1labelR1);
      p1rider1Clickable.addEventListener("click", pieceClick);
      p1rider1Clickable.x = (initXYArray[12] - 1)  *  60 + 2;
      p1rider1Clickable.y = (initXYArray[13] - 1)  *  60 + 2;
      addGameGridXY(p1rider1Clickable);
      gameStage.addChild(p1rider1Clickable);

      p1squareR2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1rider2Clickable.addChild(p1squareR2, p1labelR2);
      p1rider2Clickable.addEventListener("click", pieceClick);
      p1rider2Clickable.x = (initXYArray[14] - 1)  *  60 + 2;
      p1rider2Clickable.y = (initXYArray[15] - 1)  *  60 + 2;
      addGameGridXY(p1rider2Clickable);
      gameStage.addChild(p1rider2Clickable);

      p1squareAs.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1assassinClickable.addChild(p1squareAs, p1labelAs);
      p1assassinClickable.addEventListener("click", pieceClick);
      p1assassinClickable.x = (initXYArray[16] - 1)  *  60 + 2;
      p1assassinClickable.y = (initXYArray[17] - 1)  *  60 + 2;
      addGameGridXY(p1assassinClickable);
      gameStage.addChild(p1assassinClickable);

      p1squareAr.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1archerClickable.addChild(p1squareAr, p1labelAr);
      p1archerClickable.addEventListener("click", pieceClick);
      p1archerClickable.x = (initXYArray[18] - 1)  *  60 + 2;
      p1archerClickable.y = (initXYArray[19] - 1)  *  60 + 2;
      addGameGridXY(p1archerClickable);
      gameStage.addChild(p1archerClickable);

      p1squareMy.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1mysticClickable.addChild(p1squareMy, p1labelMy);
      p1mysticClickable.addEventListener("click", pieceClick);
      p1mysticClickable.x = (initXYArray[20] - 1)  *  60 + 2;
      p1mysticClickable.y = (initXYArray[21] - 1)  *  60 + 2;
      addGameGridXY(p1mysticClickable);
      gameStage.addChild(p1mysticClickable);

      p1squareT1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1trap1Clickable.addChild(p1squareT1, p1labelT1);
      p1trap1Clickable.addEventListener("click", pieceClick);
      p1trap1Clickable.x = (initXYArray[22] - 1)  *  60 + 2;
      p1trap1Clickable.y = (initXYArray[23] - 1)  *  60 + 2;
      addGameGridXY(p1trap1Clickable);
      gameStage.addChild(p1trap1Clickable);

      p1squareT2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1trap2Clickable.addChild(p1squareT2, p1labelT2);
      p1trap2Clickable.addEventListener("click", pieceClick);
      p1trap2Clickable.x = (initXYArray[24] - 1)  *  60 + 2;
      p1trap2Clickable.y = (initXYArray[25] - 1)  *  60 + 2;
      addGameGridXY(p1trap2Clickable);
      gameStage.addChild(p1trap2Clickable);

      p1squareIT.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p1importantThingClickable.addChild(p1squareIT, p1labelIT);
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
;
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
      rock1.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock1.x = (initXYArray[56] - 1)  *  60 + 2;
      rock1.y = (initXYArray[57] - 1)  *  60 + 2;
      addGameGridXY(rock1);
      gameStage.addChild(rock1);

      rock2.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock2.x = (initXYArray[58] - 1)  *  60 + 2;
      rock2.y = (initXYArray[59] - 1)  *  60 + 2;
      addGameGridXY(rock2);
      gameStage.addChild(rock2);

      rock3.graphics.beginFill("black").drawCircle(28, 28, 20);
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
      p2squareCo.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2commanderClickable.addChild(p2squareCo, p2labelCo);
      p2commanderClickable.addEventListener("click", pieceClick);
      p2commanderClickable.x = (initXYArray[28] - 1)  *  60 + 2;
      p2commanderClickable.y = (9 -  initXYArray[29] - 1)  *  60 + 2;
      addGameGridXY(p2commanderClickable);
      gameStage.addChild(p2commanderClickable);

      p2squareCa.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2captainClickable.addChild(p2squareCa, p2labelCa);
      p2captainClickable.addEventListener("click", pieceClick);
      p2captainClickable.x = (initXYArray[30] - 1)  *  60 + 2;
      p2captainClickable.y = (9 -  initXYArray[31] - 1)  *  60 + 2;
      addGameGridXY(p2captainClickable);
      gameStage.addChild(p2captainClickable);

      p2squareS1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2soldier1Clickable.addChild(p2squareS1, p2labelS1);
      p2soldier1Clickable.addEventListener("click", pieceClick);
      p2soldier1Clickable.x = (initXYArray[32] - 1)  *  60 + 2;
      p2soldier1Clickable.y = (9 -  initXYArray[33] - 1)  *  60 + 2;
      addGameGridXY(p2soldier1Clickable);
      gameStage.addChild(p2soldier1Clickable);

      p2squareS2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2soldier2Clickable.addChild(p2squareS2, p2labelS2);
      p2soldier2Clickable.addEventListener("click", pieceClick);
      p2soldier2Clickable.x = (initXYArray[34] - 1)  *  60 + 2;
      p2soldier2Clickable.y = (9 - initXYArray[35] - 1)  *  60 + 2;
      addGameGridXY(p2soldier2Clickable);
      gameStage.addChild(p2soldier2Clickable);

      p2squareE1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2engineer1Clickable.addChild(p2squareE1, p2labelE1);
      p2engineer1Clickable.addEventListener("click", pieceClick);
      p2engineer1Clickable.x = (initXYArray[36] - 1)  *  60 + 2;
      p2engineer1Clickable.y = (9 -  initXYArray[37] - 1)  *  60 + 2;
      addGameGridXY(p2engineer1Clickable);
      gameStage.addChild(p2engineer1Clickable);

      p2squareE2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2engineer2Clickable.addChild(p2squareE2, p2labelE2);
      p2engineer2Clickable.addEventListener("click", pieceClick);
      p2engineer2Clickable.x = (initXYArray[38] - 1)  *  60 + 2;
      p2engineer2Clickable.y = (9 -  initXYArray[39] - 1)  *  60 + 2;
      addGameGridXY(p2engineer2Clickable);
      gameStage.addChild(p2engineer2Clickable);

      p2squareR1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2rider1Clickable.addChild(p2squareR1, p2labelR1);
      p2rider1Clickable.addEventListener("click", pieceClick);
      p2rider1Clickable.x = (initXYArray[40] - 1)  *  60 + 2;
      p2rider1Clickable.y = (9 -  initXYArray[41] - 1)  *  60 + 2;
      addGameGridXY(p2rider1Clickable);
      gameStage.addChild(p2rider1Clickable);

      p2squareR2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2rider2Clickable.addChild(p2squareR2, p2labelR2);
      p2rider2Clickable.addEventListener("click", pieceClick);
      p2rider2Clickable.x = (initXYArray[42] - 1)  *  60 + 2;
      p2rider2Clickable.y = (9 -  initXYArray[43] - 1)  *  60 + 2;
      addGameGridXY(p2rider2Clickable);
      gameStage.addChild(p2rider2Clickable);

      p2squareAs.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2assassinClickable.addChild(p2squareAs, p2labelAs);
      p2assassinClickable.addEventListener("click", pieceClick);
      p2assassinClickable.x = (initXYArray[44] - 1)  *  60 + 2;
      p2assassinClickable.y = (9 -  initXYArray[45] - 1)  *  60 + 2;
      addGameGridXY(p2assassinClickable);
      gameStage.addChild(p2assassinClickable);

      p2squareAr.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2archerClickable.addChild(p2squareAr, p2labelAr);
      p2archerClickable.addEventListener("click", pieceClick);
      p2archerClickable.x = (initXYArray[46] - 1)  *  60 + 2;
      p2archerClickable.y = (9 -  initXYArray[47] - 1)  *  60 + 2;
      addGameGridXY(p2archerClickable);
      gameStage.addChild(p2archerClickable);

      p2squareMy.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2mysticClickable.addChild(p2squareMy, p2labelMy);
      p2mysticClickable.addEventListener("click", pieceClick);
      p2mysticClickable.x = (initXYArray[48] - 1)  *  60 + 2;
      p2mysticClickable.y = (9 -  initXYArray[49] - 1)  *  60 + 2;
      addGameGridXY(p2mysticClickable);
      gameStage.addChild(p2mysticClickable);

      p2squareT1.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2trap1Clickable.addChild(p2squareT1, p2labelT1);
      p2trap1Clickable.addEventListener("click", pieceClick);
      p2trap1Clickable.x = (initXYArray[50] - 1)  *  60 + 2;
      p2trap1Clickable.y = (9 -  initXYArray[51] - 1)  *  60 + 2;
      addGameGridXY(p2trap1Clickable);
      gameStage.addChild(p2trap1Clickable);

      p2squareT2.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2trap2Clickable.addChild(p2squareT2, p2labelT2);
      p2trap2Clickable.addEventListener("click", pieceClick);
      p2trap2Clickable.x = (initXYArray[52] - 1)  *  60 + 2;
      p2trap2Clickable.y = (9 -  initXYArray[53] - 1)  *  60 + 2;
      addGameGridXY(p2trap2Clickable);
      gameStage.addChild(p2trap2Clickable);

      p2squareIT.graphics.beginFill(friendlyColor).drawRect(0, 0, 57, 57);
      p2importantThingClickable.addChild(p2squareIT, p2labelIT);
      p2importantThingClickable.addEventListener("click", pieceClick);
      p2importantThingClickable.x = (initXYArray[54] - 1)  *  60 + 2;
      p2importantThingClickable.y = (9 -  initXYArray[55] - 1)  *  60 + 2;
      addGameGridXY(p2importantThingClickable);
      gameStage.addChild(p2importantThingClickable);

      //added rocks for player 1's perspective
      rock1.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock1.x = (initXYArray[56] - 1)  *  60 + 2;
      rock1.y = (9 - initXYArray[57] - 1)  *  60 + 2;
      addGameGridXY(rock1);
      gameStage.addChild(rock1);

      rock2.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock2.x = (initXYArray[58] - 1)  *  60 + 2;
      rock2.y = (9 - initXYArray[59] - 1)  *  60 + 2;
      addGameGridXY(rock2);
      gameStage.addChild(rock2);

      rock3.graphics.beginFill("black").drawCircle(28, 28, 20);
      rock3.x = (initXYArray[60] - 1)  *  60 + 2;
      rock3.y = (9 - initXYArray[61] - 1)  *  60 + 2;
      addGameGridXY(rock3);
      gameStage.addChild(rock3);
   }

   updateTurnIndicator();
   gameStage.update();
}


