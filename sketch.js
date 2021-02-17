const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundIMG;

function preload() {
backgroundIMG = loadImage("images/GamingBackground.png")


}

function setup() {
  var canvas = createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,500,1000,15);
  hero = new Hero(350,250,500,250)
  rope = new Fly(hero.body,{x:600, y:0});

}

function draw() {
  background(backgroundIMG);
  ground.display();
  hero.display();
  rope.display();
}


function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
  console.log(mouseX, mouseY)
}

