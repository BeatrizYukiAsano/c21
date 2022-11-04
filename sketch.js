
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;
var ground;
var radius = 40;
var leftSide;
var rightSide;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(260,100,radius/2,ball_options);
    World.add(world,ball);

    ground1=new Ground(700,600,1200,20);
	leftSide = new Ground(800,600,20,120);
	rightSide = new Ground(1000,600,20,120);

	Engine.run(engine);
  
}

function keyPressed(){

   if(keyCode === UP_ARROW){
	
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

   }
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,radius,radius);


  drawSprites();
 
}



