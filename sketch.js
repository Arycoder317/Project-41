const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var ball_img
var cup
var cup_img
var glove
var glove_img
var backgroundimg







function preload() {
  ball_img = loadImage("ball.png")
  cup_img = loadImage("cup.png")
  glove_img = loadImage("glove.png")
  backgroundimg = loadImage("background.png")
}

function setup() {
  createCanvas(800,400);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;




  var ball_options = {
    restitution:0.95,
    frictionAir:0.01
  }



  ball = Bodies.circle(150,60,100, ball_options)
  World.add(world, ball);

  glove = Bodies.rectangle(300,100,200,200);
  World.add(world, glove);
  glove.mousePressed(hForce);

  cup = Bodies.rectangle(300,380,200,200);
  World.add(world, cup);



}




function draw() 
{
  background(51);
  image(backgroundimg, 0,0, displayWidth+80, displayHeight)
  Engine.update(engine);

  imageMode(CENTER);
  image(ball_img, ball.position.x, ball.position.y, 100, 100);
  image(glove_img, glove.position.x, glove.position.y, 200, 200);
  image(cup_img, cup.position.x, cup.position.y, 200, 200);

  collide()
  hForce()
  mousePressed()

  drawSprites()
}

function collide(cup, ball)
{
  World.remove(engine.world,ball, cup);
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
