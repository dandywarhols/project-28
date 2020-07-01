const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject;
var slingshot	;
var gameState = "onSling";
function setup() {
  createCanvas(1300, 700);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(100,550,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Box(1000,520);
	slingshot = new Launcher(paperObject.body,{x:190, y:300});
	Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  slingshot.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

