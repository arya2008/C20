var fixedrect,movingrect
function setup() {

  createCanvas(800,400);
  movingrect=createSprite(200, 200, 60, 50);
  fixedrect=createSprite(400,200,70,45);
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if(fixedrect.x-movingrect.x<(movingrect.width+fixedrect.width)/2 &&
  movingrect.x-fixedrect.x<(movingrect.width+fixedrect.width)/2 &&
  fixedrect.y-movingrect.y<(movingrect.height+fixedrect.height)/2 &&
  movingrect.y-fixedrect.y<(movingrect.height+fixedrect.height)/2){

    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  drawSprites();
}