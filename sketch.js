
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var mango1,mango2,mango3,mango4,mango5;
var ground;
var tree;
var sling;
var boy;

function preload()
{}

function setup() {
	createCanvas(800, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	boy=new Boy(400,600,20,30);

	stone=new Stone(200,600,20,30);

	sling=new Launcher(stone.body,{x:200,y:600});

	tree=new Tree(650,600,100,100);

	mango1=new Mango(650,200,30);
	mango2=new Mango(630,200,32);
	mango3=new Mango(680,230,28);
	mango4=new Mango(700,361,40);
	mango5=new Mango(590,400,35);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  tree.display();
  stone.display();
  ground.display();
  boy.display();

  drawSprites();
 
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}

	function mouseReleased(){
		launcher.fly();
		}

