var path,pathImg
var boy,boyImg
var leftB
var rightB

function preload(){
  //pre-load images
  pathImg = loadImage ("path.png");
boyImg = loadAnimation ("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite (200,200);
  path.addImage (pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
boy = createSprite (180,340,30,30);
boy.addAnimation ("boyRun",boyImg);
boy.scale = 0.08
leftB = createSprite (0,0,100,800)
leftB.visible = false;
rightB = createSprite (410,0,100,800);
rightB.visible = false;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
if(path.y>400){
  path.y = 200;
}
boy.collide(leftB);
boy.collide(rightB);

drawSprites ();
}
