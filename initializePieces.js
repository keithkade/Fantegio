//==========================================================================setup board 
var setupStage = new createjs.Stage("setupCanvas");

var setupBoardHeight = 300;
var setupBoardWidth = 480;

var urlName = window.location.search.substring(1);
var playerNum = unescape(urlName);

//socket stuf is commented out for local testing
//var socket = io.connect('http://' + document.location.host);

//color background green
var background = new createjs.Shape();
background.graphics.beginFill("#4E8154").drawRect(0, 0, setupBoardWidth, setupBoardHeight);
setupStage.addChild(background);

//highlight placable area
var placable = new createjs.Shape();
placable.graphics.beginFill("#3366FF").drawRect(0, 120, setupBoardWidth, 180);
placable.alpha = .5;
setupStage.addChild(placable);

//draw grid for setup 
for (var x = 0; x <= setupBoardWidth; x += 60) {
	var line = new createjs.Shape();
	line.graphics.beginFill("#000000").drawRect(x, 0, 1, setupBoardHeight);
    setupStage.addChild(line);
}

for (var y = 0; y <= setupBoardHeight; y += 60) {
	var line = new createjs.Shape();
	line.graphics.beginFill("#000000").drawRect(0, y, setupBoardWidth, 1);
    setupStage.addChild(line);
}

//rocks //will recieve x and y from server
//var rock1 = new createjs.Shape();
//rock1.graphics.beginFill("black").drawCircle(29, 29, 20);
//stage.addChild(rock1);
//var rock2 = new createjs.Shape();
//rock2.graphics.beginFill("black").drawCircle(209, 89, 20);
//stage.addChild(rock2);
//var rock3 = new createjs.Shape();
//rock3.graphics.beginFill("black").drawCircle(329, 89, 20);
//stage.addChild(rock3);

//==========================================================================game board
var gameStage = new createjs.Stage("gameCanvas");
var board = new Array(8);
var gameBoardHeight = 480;
var gameBoardWidth = 480;


for (var x = 0; x < 8; x++)
{
	board[x] = new Array(8);
	for (var y = 0; y < 8; y++)
	{
		var squareIT = new createjs.Shape();
		squareIT.graphics.beginFill("#4E8154").drawRect(0, 0, 60, 60);
		board[x][y] = new createjs.Container();
		board[x][y].x = (x*60);
		board[x][y].y = (y*60);
		board[x][y].addChild(squareIT);
		gameStage.addChild(board[x][y]);
	}
}

//draw grid for game 
for (var x = 0; x <= gameBoardWidth; x += 60) {
	var line = new createjs.Shape();
	line.graphics.beginFill("#000000").drawRect(x, 0, 1, gameBoardHeight);
    gameStage.addChild(line);
}

for (var y = 0; y <= gameBoardHeight; y += 60) {
	var line = new createjs.Shape();
	line.graphics.beginFill("#000000").drawRect(0, y, gameBoardWidth, 1);
    gameStage.addChild(line);
}


gameStage.update();

//==========================================================================Player 1 game pieces
//create clickable important thing
var p1squareIT = new createjs.Shape();
var p1labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
p1labelIT.textAlign = "center";
p1labelIT.x = 28;
p1labelIT.y = 15;
var p1importantThingClickable = new createjs.Container();
p1importantThingClickable.addChild(p1labelIT);

//create clickable trap1
var p1squareT1 = new createjs.Shape();
var p1labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT1.textAlign = "center";
p1labelT1.x = 28;
p1labelT1.y = 15;
var p1trap1Clickable = new createjs.Container();
p1trap1Clickable.addChild(p1labelT1);

//create clickable trap2
var p1squareT2 = new createjs.Shape();
var p1labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT2.textAlign = "center";
p1labelT1.x = 28;
p1labelT1.y = 15;
var p1trap2Clickable = new createjs.Container();
p1trap2Clickable.addChild(p1labelT1);

//create clickable archer
var p1squareAr = new createjs.Shape();
p1squareAr.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
p1labelAr.textAlign = "center";
p1labelAr.x = 28;
p1labelAr.y = 15;
var p1archerClickable = new createjs.Container();
p1archerClickable.addChild(p1labelAr);

//create clickable mystic
var p1squareMy = new createjs.Shape();
var p1labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
p1labelMy.textAlign = "center";
p1labelMy.x = 28;
p1labelMy.y = 15;
var p1mysticClickable = new createjs.Container();
p1mysticClickable.addChild(p1labelMy);

//create clickable rider1
var p1squareR1 = new createjs.Shape();
p1squareR1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p1labelR1.textAlign = "center";
p1labelR1.x = 28;
p1labelR1.y = 15;
var p1rider1Clickable = new createjs.Container();
p1rider1Clickable.addChild(p1labelR1);

//create clickable rider2
var p1squareR2 = new createjs.Shape();
var p1labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p1labelR2.textAlign = "center";
p1labelR2.x = 28;
p1labelR2.y = 15;
var p1rider2Clickable = new createjs.Container();
p1rider2Clickable.addChild(p1labelR2);

//create clickable assassin
var p1squareAs = new createjs.Shape();
var p1labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
p1labelAs.textAlign = "center";
p1labelAs.x = 28;
p1labelAs.y = 15;
var p1assassinClickable = new createjs.Container();
p1assassinClickable.addChild(p1labelAs);

//create clickable soldier1
var p1squareS1 = new createjs.Shape();
var p1labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p1labelS1.textAlign = "center";
p1labelS1.x = 28;
p1labelS1.y = 15;
var p1soldier1Clickable = new createjs.Container();
p1soldier1Clickable.addChild(p1labelS1);

//create clickable soldier2
var p1squareS2 = new createjs.Shape();
var p1labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p1labelS2.textAlign = "center";
p1labelS2.x = 28;
p1labelS2.y = 15;
var p1soldier2Clickable = new createjs.Container();
p1soldier2Clickable.addChild(p1labelS2);

//create clickable engineer1
var p1squareE1 = new createjs.Shape();
var p1labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p1labelE1.textAlign = "center";
p1labelE1.x = 28;
p1labelE1.y = 15;
var p1engineer1Clickable = new createjs.Container();
p1engineer1Clickable.addChild(p1labelE1);

//create clickable engineer2
var p1squareE2 = new createjs.Shape();
var p1labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p1labelE2.textAlign = "center";
p1labelE2.x = 28;
p1labelE2.y = 15;
var p1engineer2Clickable = new createjs.Container();
p1engineer2Clickable.addChild(p1labelE2);

//create clickable captain
var p1squareCa = new createjs.Shape();
var p1labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
p1labelCa.textAlign = "center";
p1labelCa.x = 28;
p1labelCa.y = 15;
var p1captainClickable = new createjs.Container();
p1captainClickable.addChild(p1labelCa);

//create clickable commander
var p1squareCo = new createjs.Shape();
var p1labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
p1labelCo.textAlign = "center";
p1labelCo.x = 28;
p1labelCo.y = 15;
var p1commanderClickable = new createjs.Container();
p1commanderClickable.addChild(p1labelCo);

//==========================================================================Player 2 game pieces
//create clickable important thing
var p2squareIT = new createjs.Shape();
var p2labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
p2labelIT.textAlign = "center";
p2labelIT.x = 28;
p2labelIT.y = 15;
var p2importantThingClickable = new createjs.Container();
p2importantThingClickable.addChild(p2labelIT);

//create clickable trap2
var p2squareT1 = new createjs.Shape();
var p2labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p2labelT1.textAlign = "center";
p2labelT1.x = 28;
p2labelT1.y = 15;
var p2trap1Clickable = new createjs.Container();
p2trap1Clickable.addChild(p2labelT1);

//create clickable trap2
var p2squareT2 = new createjs.Shape();
var p2labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p2labelT2.textAlign = "center";
p2labelT2.x = 28;
p2labelT2.y = 15;
var p2trap2Clickable = new createjs.Container();
p2trap2Clickable.addChild(p2labelT2);

//create clickable archer
var p2squareAr = new createjs.Shape();
var p2labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
p2labelAr.textAlign = "center";
p2labelAr.x = 28;
p2labelAr.y = 15;
var p2archerClickable = new createjs.Container();
p2archerClickable.addChild(p2labelAr);

//create clickable mystic
var p2squareMy = new createjs.Shape();
var p2labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
p2labelMy.textAlign = "center";
p2labelMy.x = 28;
p2labelMy.y = 15;
var p2mysticClickable = new createjs.Container();
p2mysticClickable.addChild(p2labelMy);

//create clickable rider1
var p2squareR1 = new createjs.Shape();
var p2labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p2labelR1.textAlign = "center";
p2labelR1.x = 28;
p2labelR1.y = 15;
var p2rider1Clickable = new createjs.Container();
p2rider1Clickable.addChild(p2labelR1);

//create clickable rider2
var p2squareR2 = new createjs.Shape();
var p2labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p2labelR2.textAlign = "center";
p2labelR2.x = 28;
p2labelR2.y = 15;
var p2rider2Clickable = new createjs.Container();
p2rider2Clickable.addChild(p2labelR2);

//create clickable assassin
var p2squareAs = new createjs.Shape();
var p2labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
p2labelAs.textAlign = "center";
p2labelAs.x = 28;
p2labelAs.y = 15;
var p2assassinClickable = new createjs.Container();
p2assassinClickable.addChild(p2labelAs);

//create clickable soldier1
var p2squareS1 = new createjs.Shape();
var p2labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p2labelS1.textAlign = "center";
p2labelS1.x = 28;
p2labelS1.y = 15;
var p2soldier1Clickable = new createjs.Container();
p2soldier1Clickable.addChild(p2labelS1);

//create clickable soldier2
var p2squareS2 = new createjs.Shape();
var p2labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p2labelS2.textAlign = "center";
p2labelS2.x = 28;
p2labelS2.y = 15;
var p2soldier2Clickable = new createjs.Container();
p2soldier2Clickable.addChild(p2labelS2);

//create clickable engineer1
var p2squareE1 = new createjs.Shape();
var p2labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p2labelE1.textAlign = "center";
p2labelE1.x = 28;
p2labelE1.y = 15;
var p2engineer1Clickable = new createjs.Container();
p2engineer1Clickable.addChild(p2labelE1);

//create clickable engineer2
var p2squareE2 = new createjs.Shape();
var p2labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p2labelE2.textAlign = "center";
p2labelE2.x = 28;
p2labelE2.y = 15;
var p2engineer2Clickable = new createjs.Container();
p2engineer2Clickable.addChild(p2labelE2);

//create clickable captain
var p2squareCa = new createjs.Shape();
var p2labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
p2labelCa.textAlign = "center";
p2labelCa.x = 28;
p2labelCa.y = 15;
var p2captainClickable = new createjs.Container();
p2captainClickable.addChild(p2labelCa);

//create clickable commander
var p2squareCo = new createjs.Shape();
var p2labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
p2labelCo.textAlign = "center";
p2labelCo.x = 28;
p2labelCo.y = 15;
var p2commanderClickable = new createjs.Container();
p2commanderClickable.addChild(p2labelCo);

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
pieceArray[23] = p1archerClickable;
pieceArray[24] = p1trap1Clickable;
pieceArray[25] = p2trap1Clickable;
pieceArray[26] = p1trap2Clickable;
pieceArray[27] = p2trap2Clickable;

for (var i = 0; i < pieceArray.length; i++){
	pieceArray[i].x = 100;
	pieceArray[i].y = 100;
	gameStage.addChild(pieceArray[i]);
}

//==========================================================================draggable pieces used for setup
//create draggable important thing
var squareIT = new createjs.Shape();
squareIT.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
labelIT.textAlign = "center";
labelIT.x = 28;
labelIT.y = 15;
var importantThingDragger = new createjs.Container();
importantThingDragger.x = 2;
importantThingDragger.y = 422;
importantThingDragger.addChild(squareIT, labelIT);
setupStage.addChild(importantThingDragger);


//create draggable trap1
var squareT1 = new createjs.Shape();
squareT1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
labelT1.textAlign = "center";
labelT1.x = 28;
labelT1.y = 15;
var trap1Dragger = new createjs.Container();
trap1Dragger.x = 62;
trap1Dragger.y = 422;
trap1Dragger.addChild(squareT1, labelT1);
setupStage.addChild(trap1Dragger);


//create draggable trap2
var squareT2 = new createjs.Shape();
squareT2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
labelT2.textAlign = "center";
labelT2.x = 28;
labelT2.y = 15;
var trap2Dragger = new createjs.Container();
trap2Dragger.x = 122;
trap2Dragger.y = 422;
trap2Dragger.addChild(squareT2, labelT2);
setupStage.addChild(trap2Dragger);


//create draggable archer
var squareAr = new createjs.Shape();
squareAr.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
labelAr.textAlign = "center";
labelAr.x = 28;
labelAr.y = 15;
var archerDragger = new createjs.Container();
archerDragger.x = 182;
archerDragger.y = 422;
archerDragger.addChild(squareAr, labelAr);
setupStage.addChild(archerDragger);


//create draggable mystic
var squareMy = new createjs.Shape();
squareMy.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
labelMy.textAlign = "center";
labelMy.x = 28;
labelMy.y = 15;
var mysticDragger = new createjs.Container();
mysticDragger.x = 242;
mysticDragger.y = 422;
mysticDragger.addChild(squareMy, labelMy);
setupStage.addChild(mysticDragger);


//create draggable rider1
var squareR1 = new createjs.Shape();
squareR1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
labelR1.textAlign = "center";
labelR1.x = 28;
labelR1.y = 15;
var rider1Dragger = new createjs.Container();
rider1Dragger.x = 302;
rider1Dragger.y = 422;
rider1Dragger.addChild(squareR1, labelR1);
setupStage.addChild(rider1Dragger);


//create draggable rider2
var squareR2 = new createjs.Shape();
squareR2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
labelR2.textAlign = "center";
labelR2.x = 28;
labelR2.y = 15;
var rider2Dragger = new createjs.Container();
rider2Dragger.x = 362;
rider2Dragger.y = 422;
rider2Dragger.addChild(squareR2, labelR2);
setupStage.addChild(rider2Dragger);


//create draggable assassin
var squareAs = new createjs.Shape();
squareAs.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
labelAs.textAlign = "center";
labelAs.x = 28;
labelAs.y = 15;
var assassinDragger = new createjs.Container();
assassinDragger.x = 422;
assassinDragger.y = 422;
assassinDragger.addChild(squareAs, labelAs);
setupStage.addChild(assassinDragger);

//create draggable soldier1
var squareS1 = new createjs.Shape();
squareS1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
labelS1.textAlign = "center";
labelS1.x = 28;
labelS1.y = 15;
var soldier1Dragger = new createjs.Container();
soldier1Dragger.x = 2;
soldier1Dragger.y = 482;
soldier1Dragger.addChild(squareS1, labelS1);
setupStage.addChild(soldier1Dragger);

//create draggable soldier2
var squareS2 = new createjs.Shape();
squareS2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
labelS2.textAlign = "center";
labelS2.x = 28;
labelS2.y = 15;
var soldier2Dragger = new createjs.Container();
soldier2Dragger.x = 62;
soldier2Dragger.y = 482;
soldier2Dragger.addChild(squareS2, labelS2);
setupStage.addChild(soldier2Dragger);


//create draggable engineer1
var squareE1 = new createjs.Shape();
squareE1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
labelE1.textAlign = "center";
labelE1.x = 28;
labelE1.y = 15;
var engineer1Dragger = new createjs.Container();
engineer1Dragger.x = 122;
engineer1Dragger.y = 482;
engineer1Dragger.addChild(squareE1, labelE1);
setupStage.addChild(engineer1Dragger);


//create draggable engineer2
var squareE2 = new createjs.Shape();
squareE2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
labelE2.textAlign = "center";
labelE2.x = 28;
labelE2.y = 15;
var engineer2Dragger = new createjs.Container();
engineer2Dragger.x = 182;
engineer2Dragger.y = 482;
engineer2Dragger.addChild(squareE2, labelE2);
setupStage.addChild(engineer2Dragger);


//create draggable captain
var squareCa = new createjs.Shape();
squareCa.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
labelCa.textAlign = "center";
labelCa.x = 28;
labelCa.y = 15;
var captainDragger = new createjs.Container();
captainDragger.x = 242;
captainDragger.y = 482;
captainDragger.addChild(squareCa, labelCa);
setupStage.addChild(captainDragger);


//create draggable commander
var squareCo = new createjs.Shape();
squareCo.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
labelCo.textAlign = "center";
labelCo.x = 28;
labelCo.y = 15;
var commanderDragger = new createjs.Container();
commanderDragger.x = 302;
commanderDragger.y = 482;
commanderDragger.addChild(squareCo, labelCo);
setupStage.addChild(commanderDragger);

gameStage.update();
setupStage.update();