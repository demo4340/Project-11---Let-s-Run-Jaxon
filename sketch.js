var track, trackImg;
var boy, boyImg;
var leftBoundary, rightBoundary;

function preload(){

  //pre-load images
  trackImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){

  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200, 400, 400);
  track.addImage("track", trackImg);
  track.velocityY = 3;

  leftBoundary = createSprite(30, 200, 30, 400);
  leftBoundary.visible = false;

  rightBoundary = createSprite(380, 200, 30, 400);
  rightBoundary.visible = false;

  boy = createSprite(200, 350);
  boy.addAnimation("running", boyImg);
  boy.scale = 0.1;




}

function draw() {

  background(0);

  if(track.y > 400){

    track.y = height/2;

  }

  boy.x = World.mouseX;
  boy.y == World.mouseY;

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  drawSprites();

}
