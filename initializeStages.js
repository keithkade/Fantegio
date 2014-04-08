//==========================================================================setup board 
var setupStage = new createjs.Stage("setupCanvas");

var setupBoardHeight = 300;
var setupBoardWidth = 540;

var urlName = window.location.search.substring(1);
var playerNum = unescape(urlName);

//make bottom white
var whiteBackdrop = new createjs.Shape();
whiteBackdrop.graphics.beginFill("#FFFFFF").drawRect(0, 300, setupBoardWidth, 180);
setupStage.addChild(whiteBackdrop);

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

//==========================================================================canvases for lostcaptured units board 
var lostStage = new createjs.Stage("lostPiecesCanvas");
var captStage = new createjs.Stage("capPiecesCanvas");

//draw grid for lostCanvas
for (var x = 0; x <= 300; x += 60) {
   var line = new createjs.Shape();
   line.graphics.beginFill("#000000").drawRect(x, 0, 1, 180);
   lostStage.addChild(line);
}

for (var y = 0; y <= 180; y += 60) {
   var line = new createjs.Shape();
   line.graphics.beginFill("#000000").drawRect(0, y, 300, 1);
   lostStage.addChild(line);
}

//draw grid for captCanvas
for (var x = 0; x <= 300; x += 60) {
   var line = new createjs.Shape();
   line.graphics.beginFill("#000000").drawRect(x, 0, 1, 180);
   captStage.addChild(line);
}

for (var y = 0; y <= 180; y += 60) {
   var line = new createjs.Shape();
   line.graphics.beginFill("#000000").drawRect(0, y, 300, 1);
   captStage.addChild(line);
}

//==========================================================================game board
var gameStage = new createjs.Stage("gameCanvas");
var board = new Array(9);
var gameBoardHeight = 480;
var gameBoardWidth = 540;
var background = new createjs.Shape();


for (var x = 1; x < 9; x++)
{
   board[x] = new Array(9);
   for (var y = 1; y < 9; y++)
   {
      var square = new createjs.Shape();      
      square.graphics.beginFill("#4E8154").drawRect(3, 3, 54, 54);
      square.alpha=0.02;
      board[x][y] = new createjs.Container();
      board[x][y].x = ((x-1)*60);
      board[x][y].y = ((y-1)*60);
      board[x][y].gameGridX = x;
      board[x][y].gameGridY = y;
      board[x][y].team = '0';
      board[x][y].addChild(square);
      //gameStage.addChild(board[x][y]);
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

captStage.update();
lostStage.update();
gameStage.update();
setupStage.update();


