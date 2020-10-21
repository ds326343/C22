
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var engine;
var world;
var object;
var ball; 
function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;


var object_options={
  isStatic : true
}


var ball_options={
  restitution: 0.63
}

object = Bodies.rectangle(200,386.5,405,50,object_options);
World . add(world,object);
ball = Bodies.circle(200,70,40,ball_options);
World.add(world,ball);
console.log(object);
console.log(object.type);



}

function draw() {
  background(2);  


  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,50);
  ellipseMode(RADIUS)
  fill("white")
  ellipse(ball.position.x,ball.position.y,40,40)
}



