var ship,ship_moving ,edges
var ground
var groundimage
function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
groundimage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(250,150,20,50);
  ship.addAnimation("moving",ship_moving);
  edges =createEdgeSprites() ;
ground = createSprite(300,160,400,10);
ground.addImage(groundimage);
ground.velocityX=0
ship.scale = 0.5;
ship.x = 50
}

function draw() {
  background("blue");
 
  
  console.log(ship)
  
  //jump when space key is pressed
  if(keyDown("space")){
   ship .velocityY = 10;  }
  ship.velocityY =ship .velocityY + 0.5;
  if (ground.x<0){
ground.x=ground.width/2;
  }

  ship.collide(ground)
  drawSprites();


  }