var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, groundSprite;
var box1;
var box2;
var box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)
	
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);
	Engine.run(engine);
	
	box1 = new Box(400, 600, 200, 20);
	box2 = new Boxleft(293, 560, 20, 100);
	box3 = new Boxright(493, 560, 20, 100);
}


function draw() {

	Engine.update(engine);

	

rectMode(CENTER);
background(0);
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y  
	console.log(packageBody);
	box1.display();
	box2.display();
	box3.display();
	
keyPressed();
drawSprites();

}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
	
}
}
