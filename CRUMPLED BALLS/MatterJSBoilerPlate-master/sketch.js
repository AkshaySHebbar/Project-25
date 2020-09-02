
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground,paper;

function preload()
{


	
}

function setup() {
	createCanvas(1600, 300);
	ground = new Ground(800,300,1600,20);
   dustbin1= new Dustbin(1200,500,60,120);
   paper= new Paper(200,400,20,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   ground.display();
   paper.display();
   dustbin.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



