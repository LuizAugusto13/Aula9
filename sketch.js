var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "red"
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
    box.velocityY = -3
  }
  if(keyDown(DOWN_ARROW)){
    box.velocityY = 3
  }
  if(keyDown(LEFT_ARROW)){
    box.velocityX = -3
  }
  if(keyDown(RIGHT_ARROW)){
    box.velocityX = 3
  }
  drawSprites();
}




