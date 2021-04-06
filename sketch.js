const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var abengine,abworld,Ground,ball;

function setup() {
  createCanvas(800,400);

  abengine=Engine.create(); // abengine.world;
  abworld=abengine.world;
  
  var options={isStatic:true}
  Ground=Bodies.rectangle(400,380,800,30,options);
  World.add(abworld,Ground);
  console.log(Ground);
 boptions={restitution:0.8}
ball=Bodies.circle(400,100,25,boptions);
World.add(abworld,ball);
  



}

function draw() {
  background(255,255,255); 
  Engine.update(abengine);
  rectMode(CENTER);
 
  rect(Ground.position.x,Ground.position.y,800,30);
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25);

  drawSprites();
}