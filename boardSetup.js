var stage = new createjs.Stage("myCanvas");
var boardHeight = 300;
var boardWidth = 480;

//color background green
var background = new createjs.Shape();
background.graphics.beginFill("#4E8154").drawRect(0, 0, boardWidth, boardHeight);
stage.addChild(background);

//highlight placable area
var background = new createjs.Shape();
background.graphics.beginFill("#3366FF").drawRect(0, 120, boardWidth, 180);
//opacity
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

//create draggable important thing
var square = new createjs.Shape();
square.graphics.beginFill("red").drawRect(0, 0, 55, 55);
var label = new createjs.Text("Important \n Thing", "10px Arial", "#FFFFFF");
label.textAlign = "center";
label.x = 28;
label.y = 15;
var importantThingDragger = new createjs.Container();
importantThingDragger.x = 2;
importantThingDragger.y = 482;
importantThingDragger.addChild(square, label);
stage.addChild(importantThingDragger);


function addDragAndDrop (toDrag){
	//move piece on drag			
	toDrag.on("pressmove",function(evt) {
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
		evt.currentTarget.x = x;
		evt.currentTarget.y = y;
		stage.update(); 
	});
}

addDragAndDrop(importantThingDragger);

stage.update();
