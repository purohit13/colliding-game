var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(400, 200, 80, 30);
  fixedRectangle = createSprite(200,200,50,50);

  movingRectangle.shapeColor = "green";
  fixedRectangle.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2+movingRectangle.width/2
    && fixedRectangle.x-movingRectangle.x< movingRectangle.width/2+fixedRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y < fixedRectangle.height/2+movingRectangle.height/2
    &&fixedRectangle.y - movingRectangle.y < movingRectangle.height/2+fixedRectangle.height/2){
  movingRectangle.shapeColor = "red";
  fixedRectangle.shapeColor = "red";
  }
  else{
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "green";
  }

  
  
  drawSprites();
}