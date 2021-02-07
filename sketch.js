const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint


var ball
var rope
var stand
var stand2
var block
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9

function setup() {
  createCanvas(1440,720);
engine = Engine.create()
world = engine.world;
  ball = new Ball(370,190,30)
  rope = new Rope(ball.body,{x:370,y:50})
  stand = new Stand(370,50,100,10)
  stand2 = new Stand(737,400,200,10)
  block = new Block(680,360,50,50)
  block2 = new Block(734,360,50,50)
  block3 = new Block(788,360,50,50)
  block4 = new Block(708,309,50,50)
  block5 = new Block(762,309,50,50)
  block6 = new Block(737,250,50,50)




}

function draw() {
  background("lightred");
Engine.update(engine)
  ball.display();
  stand.display();
  rope.display();
  stand2.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  // block7.display();
  // block8.display();
  // block9.display();
 

  
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70})
  }
}