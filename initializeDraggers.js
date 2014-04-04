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