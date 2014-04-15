//==========================================================================draggable pieces used for setup
//create draggable important thing
var importantThingBMP = new createjs.Bitmap("images/ImportantThing.png");
var importantThingDragger = new createjs.Container();
importantThingDragger.x = 2;
importantThingDragger.y = 422;
importantThingDragger.addChild(importantThingBMP);
importantThingDragger.pieceType = "Important Thing";
setupStage.addChild(importantThingDragger);

//create draggable trap1
var trap1BMP = new createjs.Bitmap("images/Trap.png");
var trap1Dragger = new createjs.Container();
trap1Dragger.x = 62;
trap1Dragger.y = 422;
trap1Dragger.addChild(trap1BMP);
trap1Dragger.pieceType = "Trap";
setupStage.addChild(trap1Dragger);

//create draggable trap2
var trap2BMP = new createjs.Bitmap("images/Trap.png");
var trap2Dragger = new createjs.Container();
trap2Dragger.x = 122;
trap2Dragger.y = 422;
trap2Dragger.addChild(trap2BMP);
trap2Dragger.pieceType = "Trap";
setupStage.addChild(trap2Dragger);

//create draggable archer
var archerBMP = new createjs.Bitmap("images/Archer.png");
var archerDragger = new createjs.Container();
archerDragger.x = 182;
archerDragger.y = 422;
archerDragger.addChild(archerBMP);
archerDragger.pieceType = "Archer";
setupStage.addChild(archerDragger);

//create draggable mystic
var mysticBMP = new createjs.Bitmap("images/Mystic.png");
var mysticDragger = new createjs.Container();
mysticDragger.x = 242;
mysticDragger.y = 422;
mysticDragger.addChild(mysticBMP);
mysticDragger.pieceType = "Mystic";
setupStage.addChild(mysticDragger);

//create draggable rider1
var rider1BMP = new createjs.Bitmap("images/Rider.png");
var rider1Dragger = new createjs.Container();
rider1Dragger.x = 302;
rider1Dragger.y = 422;
rider1Dragger.addChild(rider1BMP);
rider1Dragger.pieceType = "Rider";
setupStage.addChild(rider1Dragger);

//create draggable rider2
var rider2BMP = new createjs.Bitmap("images/Rider.png");
var rider2Dragger = new createjs.Container();
rider2Dragger.x = 362;
rider2Dragger.y = 422;
rider2Dragger.addChild(rider2BMP);
rider2Dragger.pieceType = "Rider";
setupStage.addChild(rider2Dragger);

//create draggable assassin
var assassinBMP = new createjs.Bitmap("images/Assassin.png");
var assassinDragger = new createjs.Container();
assassinDragger.x = 422;
assassinDragger.y = 422;
assassinDragger.addChild(assassinBMP);
assassinDragger.pieceType = "Assassin";
setupStage.addChild(assassinDragger);

//create draggable soldier1
var soldier1BMP = new createjs.Bitmap("images/Soldier.png");
var soldier1Dragger = new createjs.Container();
soldier1Dragger.x = 2;
soldier1Dragger.y = 362;
soldier1Dragger.addChild(soldier1BMP);
soldier1Dragger.pieceType = "Soldier";
setupStage.addChild(soldier1Dragger);

//create draggable soldier2
var soldier2BMP = new createjs.Bitmap("images/Soldier.png");
var soldier2Dragger = new createjs.Container();
soldier2Dragger.x = 62;
soldier2Dragger.y = 362;
soldier2Dragger.addChild(soldier2BMP);
soldier2Dragger.pieceType = "Soldier";
setupStage.addChild(soldier2Dragger);

//create draggable engineer1
var engineer1BMP = new createjs.Bitmap("images/Engineer.png");
var engineer1Dragger = new createjs.Container();
engineer1Dragger.x = 122;
engineer1Dragger.y = 362;
engineer1Dragger.addChild(engineer1BMP);
engineer1Dragger.pieceType = "Engineer";
setupStage.addChild(engineer1Dragger);

//create draggable engineer2
var engineer2BMP = new createjs.Bitmap("images/Engineer.png");
var engineer2Dragger = new createjs.Container();
engineer2Dragger.x = 182;
engineer2Dragger.y = 362;
engineer2Dragger.addChild(engineer2BMP);
engineer2Dragger.pieceType = "Engineer";
setupStage.addChild(engineer2Dragger);

//create draggable captain
var captainBMP = new createjs.Bitmap("images/Captain.png");
var captainDragger = new createjs.Container();
captainDragger.x = 242;
captainDragger.y = 362;
captainDragger.addChild(captainBMP);
captainDragger.pieceType = "Captain";
setupStage.addChild(captainDragger);

//create draggable commander
var commanderBMP = new createjs.Bitmap("images/Commander.png");
var commanderDragger = new createjs.Container();
commanderDragger.x = 302;
commanderDragger.y = 362;
commanderDragger.addChild(commanderBMP);
commanderDragger.pieceType = "Commander";
setupStage.addChild(commanderDragger);