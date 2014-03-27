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