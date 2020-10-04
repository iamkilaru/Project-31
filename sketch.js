const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ball;
var wall1,wall2,wall3,wal4,wall5,wall6,wall7,wall8,ceiling;

var balls = [];
var staticBalls1 = [];
var staticBalls2 = [];
var staticBalls3 = [];
var staticBalls4 = [];

var dividers = [];

function setup() {
  createCanvas(480,800);

  console.log("width = " + width);

  engine = Engine.create();
  world = engine.world;
  
  for(var j=40; j<=width;j=j+50){
    staticBalls1.push(new Staticball(j,75));
  }
  for(var j=15; j<=width-10;j=j+50){
    staticBalls2.push(new Staticball(j,175));
  }
  for(var j=40; j<=width;j=j+50){
    staticBalls3.push(new Staticball(j,275));
  }
  for(var j=15;j<=width;j=j+50){
    staticBalls4.push(new Staticball(j,375));
  }
 
  ground = new Ground(240,800,480,20);
  wall1 = new Wall(5,400,20,800);
  wall2 = new Wall(80,700,10,200);
  wall3 = new Wall(160,700,10,200);
  wall4 = new Wall(240,700,10,200);
  wall5 = new Wall(320,700,10,200);
  wall6 = new Wall(400,700,10,200);
  wall7 = new Wall(475,400,20,800);
  ceiling = new Ground(240,0,480,10);
}

function draw() {
  background(0,0,0);  
  
  
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  ceiling.display();

  for(var j=0; j<staticBalls1.length;j++){
    staticBalls1[j].display();
  }
  for(var j=0; j<staticBalls2.length;j++){
    staticBalls2[j].display();
  }
  for(var j=0; j<staticBalls3.length;j++){
    staticBalls3[j].display();
  }
  for(var j=0; j<staticBalls4.length;j++){
    staticBalls4[j].display();
  }
  if(frameCount % 60 === 0){
      balls.push(new Ball(random(10,470), 50));
  }
  for(var j=0; j<balls.length;j++){
    balls[j].display();
  }

  Engine.update(engine);
}