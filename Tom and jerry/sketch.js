var cat, mouse;
var bg;
var catImage, mouseImage;

function preload() {
  catImage=loadAnimation("cat2.png","cat3.png", "cat4.png");
  mouseImage=loadAnimation("mouseRun2.png","mouseRun3.png")
  bg=loadImage("road.png")
}

function setup() {
  createCanvas(1500,700);
  back=createSprite(750,300,1800,600)
  back.addImage(bg)
  back.velocityX=-3
  back.scale=2
  back.x=back.width/2
  
  cat=createSprite(150, 450, 50, 50);
  cat.addAnimation("catRunning",catImage)

  mouse=createSprite(750,500,50,50)
  mouse.addAnimation("mouseRunning", mouseImage)
}

function draw() {
  background(0);
  if(back.x<700){
    back.x=900
  }
  drawSprites();
}

function obstacles(){
  var obstacle=createSprite(1500,500,50,50)
  
}