
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 450);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
paper =new Paper(200,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
 
}



