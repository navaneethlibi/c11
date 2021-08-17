var ship,ship_moving ,edges
var ground
var groundimage
function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
groundimage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  edges =createEdgeSprites() ;
ground = createSprite(300,180,400,10);
ground.addImage(groundimage);
ground.velocityX=-3
ship = createSprite(300,250,20,50);
ship.addAnimation("moving",ship_moving);
ship.scale = 0.3;
ship.x = 50
}

function draw() {
  background("blue");
 
  
  console.log(ship)
  
  //jump when space key is pressed
  
  if (ground.x<0){
ground.x=ground.width/2;
  }

  
  drawSprites();

  }
