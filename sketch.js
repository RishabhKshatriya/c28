
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boy_img,tree,tree_img;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

boy = createSprite(200,200);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

stone = new Stone (100,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 stone.display(); 
 
}



