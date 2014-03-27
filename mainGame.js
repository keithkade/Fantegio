// Main Game Javascript
var stage = new createjs.Stage("myCanvas");
var boardHeight = 480;
var boardWidth = 480;

var urlName = window.location.search.substring(1);
var playerNum = unescape(urlName);

//color background green
var background = new createjs.Shape();
background.graphics.beginFill("#4E8154").drawRect(0, 0, boardWidth, boardHeight);
stage.addChild(background);


//draw grid
for (var x = 0; x <= boardWidth; x += 60) {
	var line = new createjs.Shape();
	line.graphics.beginFill("#000000").drawRect(x, 0, 1, boardHeight);
    stage.addChild(line);
}

for (var y = 0; y <= boardHeight; y += 60) {
	var line = new createjs.Shape();
	line.graphics.beginFill("#000000").drawRect(0, y, boardWidth, 1);
    stage.addChild(line);
}

//also establishes intial lastX and lastY
function initializePieceXY (dragger){
	convertToGameGridXY(dragger);
	dragger.lastX = dragger.gameGridX;
	dragger.lastY = dragger.gameGridY;
}

function addDragAndDrop (toDrag){
	//move piece on drag			
	toDrag.on("pressmove",function(evt) {
		evt.currentTarget.lastX = evt.currentTarget.gameGridX;
		evt.currentTarget.lastY = evt.currentTarget.gameGridY;
		evt.currentTarget.x = evt.stageX;
		evt.currentTarget.y = evt.stageY;
		stage.update();   	
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
		stage.update(); 
	});
}

//create draggable important thing
var p1squareIT = new createjs.Shape();
p1squareIT.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
p1labelIT.textAlign = "center";
p1labelIT.x = 28;
p1labelIT.y = 15;
var p1importantThingDragger = new createjs.Container();
initializePieceXY(p1importantThingDragger);
p1importantThingDragger.addChild(p1squareIT, p1labelIT);
stage.addChild(p1importantThingDragger);
addDragAndDrop(p1importantThingDragger);

//create draggable trap1
var p1squareT1 = new createjs.Shape();
p1squareT1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT1.textAlign = "center";
p1labelT1.x = 28;
p1labelT1.y = 15;
var trap1Dragger = new createjs.Container();
initializePieceXY(p1trap1Dragger);
trap1Dragger.addChild(p1squareT1, p1labelT1);
stage.addChild(p1trap1Dragger);
addDragAndDrop(p1trap1Dragger);

//create draggable trap2
var p1squareT2 = new createjs.Shape();
p1squareT2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT2.textAlign = "center";
var p1trap2Dragger = new createjs.Container();
initializePieceXY(p1trap2Dragger);
trap2Dragger.addChild(p1squareT2, p1labelT2);
stage.addChild(p1trap2Dragger);
addDragAndDrop(p1trap2Dragger);

//create draggable archer
var p1squareAr = new createjs.Shape();
p1squareAr.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
p1labelAr.textAlign = "center";
p1labelAr.x = 28;
p1labelAr.y = 15;
var p1archerDragger = new createjs.Container();
initializePieceXY(p1archerDragger);
p1archerDragger.addChild(p1squareAr, p1labelAr);
stage.addChild(p1archerDragger);
addDragAndDrop(p1archerDragger);

//create draggable mystic
var p1squareMy = new createjs.Shape();
p1squareMy.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
p1labelMy.textAlign = "center";
p1labelMy.x = 28;
p1labelMy.y = 15;
var p1mysticDragger = new createjs.Container();
initializePieceXY(p1mysticDragger);
p1mysticDragger.addChild(p1squareMy, p1labelMy);
stage.addChild(p1mysticDragger);
addDragAndDrop(p1mysticDragger);

//create draggable rider1
var p1squareR1 = new createjs.Shape();
p1squareR1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p1labelR1.textAlign = "center";
p1labelR1.x = 28;
p1labelR1.y = 15;
var p1rider1Dragger = new createjs.Container();
initializePieceXY(p1rider1Dragger);
p1rider1Dragger.addChild(squareR1, labelR1);
stage.addChild(p1rider1Dragger);
addDragAndDrop(p1rider1Dragger);

//create draggable rider2
var p1squareR2 = new createjs.Shape();
p1squareR2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p1labelR2.textAlign = "center";
p1labelR2.x = 28;
p1labelR2.y = 15;
var p1rider2Dragger = new createjs.Container();
initializePieceXY(p1rider2Dragger);
p1rider2Dragger.addChild(squareR2, labelR2);
stage.addChild(p1rider2Dragger);
addDragAndDrop(p1rider2Dragger);

//create draggable assassin
var p1squareAs = new createjs.Shape();
p1squareAs.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
p1labelAs.textAlign = "center";
p1labelAs.x = 28;
p1labelAs.y = 15;
var p1assassinDragger = new createjs.Container();
initializePieceXY(p1assassinDragger);
p1assassinDragger.addChild(p1squareAs, p1labelAs);
stage.addChild(p1assassinDragger);
addDragAndDrop(p1assassinDragger);

//create draggable soldier1
var p1squareS1 = new createjs.Shape();
p1squareS1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p1labelS1.textAlign = "center";
p1labelS1.x = 28;
p1labelS1.y = 15;
var p1soldier1Dragger = new createjs.Container();
initializePieceXY(p1soldier1Dragger);
p1soldier1Dragger.addChild(p1squareS1, p1labelS1);
stage.addChild(p1soldier1Dragger);
addDragAndDrop(p1soldier1Dragger);

//create draggable soldier2
var p1squareS2 = new createjs.Shape();
p1squareS2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p1labelS2.textAlign = "center";
p1labelS2.x = 28;
p1labelS2.y = 15;
var p1soldier2Dragger = new createjs.Container();
initializePieceXY(p1soldier2Dragger);
p1soldier2Dragger.addChild(p1squareS2, p1labelS2);
stage.addChild(p1soldier2Dragger);
addDragAndDrop(p1soldier2Dragger);

//create draggable engineer1
var p1squareE1 = new createjs.Shape();
p1squareE1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p1labelE1.textAlign = "center";
p1labelE1.x = 28;
p1labelE1.y = 15;
var p1engineer1Dragger = new createjs.Container();
initializePieceXY(p1engineer1Dragger);
p1engineer1Dragger.addChild(p1squareE1, p1labelE1);
stage.addChild(p1engineer1Dragger);
addDragAndDrop(p1engineer1Dragger);

//create draggable engineer2
var p1squareE2 = new createjs.Shape();
p1squareE2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p1labelE2.textAlign = "center";
p1labelE2.x = 28;
p1labelE2.y = 15;
var p1engineer2Dragger = new createjs.Container();
initializePieceXY(p1engineer2Dragger);
p1engineer2Dragger.addChild(p1squareE2, p1labelE2);
stage.addChild(p1engineer2Dragger);
addDragAndDrop(p1engineer2Dragger);

//create draggable captain
var p1squareCa = new createjs.Shape();
p1squareCa.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
p1labelCa.textAlign = "center";
p1labelCa.x = 28;
p1labelCa.y = 15;
var p1captainDragger = new createjs.Container();
initializePieceXY(p1captainDragger);
p1captainDragger.addChild(p1squareCa, p1labelCa);
stage.addChild(p1captainDragger);
addDragAndDrop(p1captainDragger);

//create draggable commander
var p1squareCo = new createjs.Shape();
p1squareCo.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
p1labelCo.textAlign = "center";
p1labelCo.x = 28;
p1labelCo.y = 15;
var p1commanderDragger = new createjs.Container();
initializePieceXY(p1commanderDragger);
p1commanderDragger.addChild(p1squareCo, p1labelCo);
stage.addChild(p1commanderDragger);
addDragAndDrop(p1commanderDragger);


function updateBoard(moveArray){
	var x1 = moveArray[1];
	var y2 = moveArray[2];
	var x2 = moveArray[3];
	var y2 = moveArray[4]; 
	var actionType = moveArray[5];
	var playerNum = moveArray[6]; 
	var p1Piece = moveArray[7];
	var p2Piece = moveArray[8];
	
	for(var i=0; i<pieceArray.size(); i++){
		if (pieceArray[i].gameGridX == x1 && pieceArray[i].gameGridY == y1){
			pieceArray[i].gameGridX = x2;
			pieceArray[i].gameGridY = y2;
		}
	}
	
}
