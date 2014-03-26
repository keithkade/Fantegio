var stage = new createjs.Stage("myCanvas");
var boardHeight = 300;
var boardWidth = 480;

//color background green
var background = new createjs.Shape();
background.graphics.beginFill("#4E8154").drawRect(0, 0, boardWidth, boardHeight);
stage.addChild(background);

//highlight placable area
var placable = new createjs.Shape();
placable.graphics.beginFill("#3366FF").drawRect(0, 120, boardWidth, 180);
placable.alpha = .5;
stage.addChild(placable);

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

//rocks //will recieve x and y from server
var rock1 = new createjs.Shape();
rock1.graphics.beginFill("black").drawCircle(29, 29, 20);
stage.addChild(rock1);
var rock2 = new createjs.Shape();
rock2.graphics.beginFill("black").drawCircle(209, 89, 20);
stage.addChild(rock2);
var rock3 = new createjs.Shape();
rock3.graphics.beginFill("black").drawCircle(329, 89, 20);
stage.addChild(rock3);

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

//also establishes intial lastX and lastY
function initializePieceXY (dragger){
	convertToGameGridXY(dragger);
	dragger.lastX = dragger.gameGridX;
	dragger.lastY = dragger.gameGridY;
}

function convertToGameGridXY (dragger){
	dragger.gameGridX = (dragger.x-2)/60 + 1;
	dragger.gameGridY = (dragger.y+178)/60 + 1;
	
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
var squareIT = new createjs.Shape();
squareIT.graphics.beginFill("blue").drawRect(0, 0, 57, 57);
var labelIT = new createjs.Text("Important \nThing", "10px Arial", "#FFFFFF");
labelIT.textAlign = "center";
labelIT.x = 28;
labelIT.y = 15;
var importantThingDragger = new createjs.Container();
importantThingDragger.x = 2;
importantThingDragger.y = 422;
initializePieceXY(importantThingDragger);
importantThingDragger.addChild(squareIT, labelIT);
stage.addChild(importantThingDragger);
addDragAndDrop(importantThingDragger);

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
initializePieceXY(trap1Dragger);
trap1Dragger.addChild(squareT1, labelT1);
stage.addChild(trap1Dragger);
addDragAndDrop(trap1Dragger);

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
initializePieceXY(trap2Dragger);
trap2Dragger.addChild(squareT2, labelT2);
stage.addChild(trap2Dragger);
addDragAndDrop(trap2Dragger);

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
initializePieceXY(archerDragger);
archerDragger.addChild(squareAr, labelAr);
stage.addChild(archerDragger);
addDragAndDrop(archerDragger);

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
initializePieceXY(mysticDragger);
mysticDragger.addChild(squareMy, labelMy);
stage.addChild(mysticDragger);
addDragAndDrop(mysticDragger);

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
initializePieceXY(rider1Dragger);
rider1Dragger.addChild(squareR1, labelR1);
stage.addChild(rider1Dragger);
addDragAndDrop(rider1Dragger);

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
initializePieceXY(rider2Dragger);
rider2Dragger.addChild(squareR2, labelR2);
stage.addChild(rider2Dragger);
addDragAndDrop(rider2Dragger);

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
initializePieceXY(assassinDragger);
assassinDragger.addChild(squareAs, labelAs);
stage.addChild(assassinDragger);
addDragAndDrop(assassinDragger);

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
initializePieceXY(soldier1Dragger);
soldier1Dragger.addChild(squareS1, labelS1);
stage.addChild(soldier1Dragger);
addDragAndDrop(soldier1Dragger);

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
initializePieceXY(soldier2Dragger);
soldier2Dragger.addChild(squareS2, labelS2);
stage.addChild(soldier2Dragger);
addDragAndDrop(soldier2Dragger);

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
initializePieceXY(engineer1Dragger);
engineer1Dragger.addChild(squareE1, labelE1);
stage.addChild(engineer1Dragger);
addDragAndDrop(engineer1Dragger);

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
initializePieceXY(engineer2Dragger);
engineer2Dragger.addChild(squareE2, labelE2);
stage.addChild(engineer2Dragger);
addDragAndDrop(engineer2Dragger);

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
initializePieceXY(captainDragger);
captainDragger.addChild(squareCa, labelCa);
stage.addChild(captainDragger);
addDragAndDrop(captainDragger);

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
initializePieceXY(commanderDragger);
commanderDragger.addChild(squareCo, labelCo);
stage.addChild(commanderDragger);
addDragAndDrop(commanderDragger);

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
		
	stage.update();
}
  			
stage.update();

function startGame(){
	var locationArray;
	locationArray[0] = commanderDragger.gameGridX;
	locationArray[1] = commanderDragger.gameGridY;
	locationArray[2] = captainDragger.gameGridX;
	locationArray[3] = captainDragger.gameGridY;
	locationArray[4] = soldier1Dragger.gameGridX;
	locationArray[5] = soldier1Dragger.gameGridY;
	locationArray[6] = soldier1Dragger.gameGridX;
	locationArray[7] = soldier1Dragger.gameGridY;
	locationArray[8] = engineer1Dragger.gameGridX;
	locationArray[9] = engineer1Dragger.gameGridY;
	locationArray[10] = engineer2Dragger.gameGridX;
	locationArray[11] = engineer2Dragger.gameGridY;		
	locationArray[12] = rider1Dragger.gameGridX;
	locationArray[13] = rider1Dragger.gameGridY;
	locationArray[14] = rider2Dragger.gameGridX;
	locationArray[15] = rider2Dragger.gameGridY;
	locationArray[16] = assassinDragger.gameGridX;
	locationArray[17] = assassinDragger.gameGridY;
	locationArray[18] = archerDragger.gameGridX;
	locationArray[19] = archerDragger.gameGridY;	
	locationArray[20] = mysticDragger.gameGridX;
	locationArray[21] = mysticDragger.gameGridY;		
	locationArray[22] = trap1Dragger.gameGridX;
	locationArray[23] = trap1Dragger.gameGridY;	
	locationArray[24] = trap2Dragger.gameGridX;
	locationArray[25] = trap2Dragger.gameGridY;		
	locationArray[26] = importantThingDragger.gameGridX;
	locationArray[27] = importantThingDragger.gameGridY;
	//send to server									
}

