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
	//convertToGameGridXY(dragger);
	//dragger.lastX = dragger.gameGridX;
	//dragger.lastY = dragger.gameGridY;
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


//============================================================player 1 pieces
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
var p1trap1Dragger = new createjs.Container();
initializePieceXY(p1trap1Dragger);
p1trap1Dragger.addChild(p1squareT1, p1labelT1);
stage.addChild(p1trap1Dragger);
addDragAndDrop(p1trap1Dragger);

//create draggable trap2
var p1squareT2 = new createjs.Shape();
p1squareT2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p1labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p1labelT2.textAlign = "center";
var p1trap2Dragger = new createjs.Container();
initializePieceXY(p1trap2Dragger);
p1trap2Dragger.addChild(p1squareT2, p1labelT2);
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
p1rider1Dragger.addChild(p1squareR1, p1labelR1);
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
p1rider2Dragger.addChild(p1squareR2, p1labelR2);
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


//============================================================player 2 pieces
//create draggable important thing
var p2squareIT = new createjs.Shape();
p2squareIT.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
p2labelIT.textAlign = "center";
p2labelIT.x = 28;
p2labelIT.y = 15;
var p2importantThingDragger = new createjs.Container();
initializePieceXY(p2importantThingDragger);
p2importantThingDragger.addChild(p2squareIT, p2labelIT);
stage.addChild(p2importantThingDragger);
addDragAndDrop(p2importantThingDragger);

//create draggable trap1
var p2squareT1 = new createjs.Shape();
p2squareT1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelT1 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p2labelT1.textAlign = "center";
p2labelT1.x = 28;
p2labelT1.y = 15;
var p2trap1Dragger = new createjs.Container();
initializePieceXY(p2trap1Dragger);
p2trap1Dragger.addChild(p2squareT1, p2labelT1);
stage.addChild(p2trap1Dragger);
addDragAndDrop(p2trap1Dragger);

//create draggable trap2
var p2squareT2 = new createjs.Shape();
p2squareT2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelT2 = new createjs.Text("Trap - T", "10px Arial", "#FFFFFF");
p2labelT2.textAlign = "center";
var p2trap2Dragger = new createjs.Container();
initializePieceXY(p2trap2Dragger);
p2trap2Dragger.addChild(p2squareT2, p2labelT2);
stage.addChild(p2trap2Dragger);
addDragAndDrop(p2trap2Dragger);

//create draggable archer
var p2squareAr = new createjs.Shape();
p2squareAr.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelAr = new createjs.Text("Archer - 1", "10px Arial", "#FFFFFF");
p2labelAr.textAlign = "center";
p2labelAr.x = 28;
p2labelAr.y = 15;
var p2archerDragger = new createjs.Container();
initializePieceXY(p2archerDragger);
p2archerDragger.addChild(p2squareAr, p2labelAr);
stage.addChild(p2archerDragger);
addDragAndDrop(p2archerDragger);

//create draggable mystic
var p2squareMy = new createjs.Shape();
p2squareMy.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelMy = new createjs.Text("Mystic - 1", "10px Arial", "#FFFFFF");
p2labelMy.textAlign = "center";
p2labelMy.x = 28;
p2labelMy.y = 15;
var p2mysticDragger = new createjs.Container();
initializePieceXY(p2mysticDragger);
p2mysticDragger.addChild(p2squareMy, p2labelMy);
stage.addChild(p2mysticDragger);
addDragAndDrop(p2mysticDragger);

//create draggable rider1
var p2squareR1 = new createjs.Shape();
p2squareR1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelR1 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p2labelR1.textAlign = "center";
p2labelR1.x = 28;
p2labelR1.y = 15;
var p2rider1Dragger = new createjs.Container();
initializePieceXY(p2rider1Dragger);
p2rider1Dragger.addChild(p2squareR1, p2labelR1);
stage.addChild(p2rider1Dragger);
addDragAndDrop(p2rider1Dragger);

//create draggable rider2
var p2squareR2 = new createjs.Shape();
p2squareR2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelR2 = new createjs.Text("Rider - 2", "10px Arial", "#FFFFFF");
p2labelR2.textAlign = "center";
p2labelR2.x = 28;
p2labelR2.y = 15;
var p2rider2Dragger = new createjs.Container();
initializePieceXY(p2rider2Dragger);
p2rider2Dragger.addChild(p2squareR2, p2labelR2);
stage.addChild(p2rider2Dragger);
addDragAndDrop(p2rider2Dragger);

//create draggable assassin
var p2squareAs = new createjs.Shape();
p2squareAs.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelAs = new createjs.Text("Assassin\n - A", "10px Arial", "#FFFFFF");
p2labelAs.textAlign = "center";
p2labelAs.x = 28;
p2labelAs.y = 15;
var p2assassinDragger = new createjs.Container();
initializePieceXY(p2assassinDragger);
p2assassinDragger.addChild(p2squareAs, p2labelAs);
stage.addChild(p2assassinDragger);
addDragAndDrop(p2assassinDragger);

//create draggable soldier1
var p2squareS1 = new createjs.Shape();
p2squareS1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelS1 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p2labelS1.textAlign = "center";
p2labelS1.x = 28;
p2labelS1.y = 15;
var p2soldier1Dragger = new createjs.Container();
initializePieceXY(p2soldier1Dragger);
p2soldier1Dragger.addChild(p2squareS1, p2labelS1);
stage.addChild(p2soldier1Dragger);
addDragAndDrop(p2soldier1Dragger);

//create draggable soldier2
var p2squareS2 = new createjs.Shape();
p2squareS2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelS2 = new createjs.Text("Soldier - 4", "10px Arial", "#FFFFFF");
p2labelS2.textAlign = "center";
p2labelS2.x = 28;
p2labelS2.y = 15;
var p2soldier2Dragger = new createjs.Container();
initializePieceXY(p2soldier2Dragger);
p2soldier2Dragger.addChild(p2squareS2, p2labelS2);
stage.addChild(p2soldier2Dragger);
addDragAndDrop(p2soldier2Dragger);

//create draggable engineer1
var p2squareE1 = new createjs.Shape();
p2squareE1.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelE1 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p2labelE1.textAlign = "center";
p2labelE1.x = 28;
p2labelE1.y = 15;
var p2engineer1Dragger = new createjs.Container();
initializePieceXY(p2engineer1Dragger);
p2engineer1Dragger.addChild(p2squareE1, p2labelE1);
stage.addChild(p2engineer1Dragger);
addDragAndDrop(p2engineer1Dragger);

//create draggable engineer2
var p2squareE2 = new createjs.Shape();
p2squareE2.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelE2 = new createjs.Text("Engineer\n - 3", "10px Arial", "#FFFFFF");
p2labelE2.textAlign = "center";
p2labelE2.x = 28;
p2labelE2.y = 15;
var p2engineer2Dragger = new createjs.Container();
initializePieceXY(p2engineer2Dragger);
p2engineer2Dragger.addChild(p2squareE2, p2labelE2);
stage.addChild(p2engineer2Dragger);
addDragAndDrop(p2engineer2Dragger);

//create draggable captain
var p2squareCa = new createjs.Shape();
p2squareCa.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelCa = new createjs.Text("Captian - 5", "10px Arial", "#FFFFFF");
p2labelCa.textAlign = "center";
p2labelCa.x = 28;
p2labelCa.y = 15;
var p2captainDragger = new createjs.Container();
initializePieceXY(p2captainDragger);
p2captainDragger.addChild(p2squareCa, p2labelCa);
stage.addChild(p2captainDragger);
addDragAndDrop(p2captainDragger);

//create draggable commander
var p2squareCo = new createjs.Shape();
p2squareCo.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var p2labelCo = new createjs.Text("Commander\n - 6", "10px Arial", "#FFFFFF");
p2labelCo.textAlign = "center";
p2labelCo.x = 28;
p2labelCo.y = 15;
var p2commanderDragger = new createjs.Container();
initializePieceXY(p2commanderDragger);
p2commanderDragger.addChild(p2squareCo, p2labelCo);
stage.addChild(p2commanderDragger);
addDragAndDrop(p2commanderDragger);

//put all pieces in array so it can be search 
var pieceArray = new Array();
pieceArray[0] = p1importantThingDragger;
pieceArray[1] = p2importantThingDragger;
pieceArray[2] = p1commanderDragger;
pieceArray[3] = p2commanderDragger;
pieceArray[4] = p1captainDragger;
pieceArray[5] = p2captainDragger;
pieceArray[6] = p1engineer1Dragger;
pieceArray[7] = p2engineer1Dragger;
pieceArray[8] = p1engineer2Dragger;
pieceArray[9] = p2engineer2Dragger;
pieceArray[10] = p1soldier1Dragger;
pieceArray[11] = p2soldier1Dragger;
pieceArray[12] = p1soldier2Dragger;
pieceArray[13] = p2soldier2Dragger;
pieceArray[14] = p1assassinDragger;
pieceArray[15] = p2assassinDragger;
pieceArray[16] = p1rider1Dragger;
pieceArray[17] = p2rider1Dragger;
pieceArray[18] = p1rider2Dragger;
pieceArray[19] = p2rider2Dragger;
pieceArray[20] = p1mysticDragger;
pieceArray[21] = p2mysticDragger;
pieceArray[22] = p1archerDragger;
pieceArray[23] = p1archerDragger;
pieceArray[24] = p1trap1Dragger;
pieceArray[25] = p2trap1Dragger;
pieceArray[26] = p1trap2Dragger;
pieceArray[27] = p2trap2Dragger;


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
