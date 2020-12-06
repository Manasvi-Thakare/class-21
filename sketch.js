var movingRect,fixedRect;
var gameObject1, gameObject2, gameObject3;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400,200,80,30);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="lightblue";
  movingRect.shapeColor="lightblue";
  gameObject1=createSprite(100,200,50,50);
  gameObject1.shapeColor="lightpink";
  gameObject2=createSprite(200,200,50,50);
  gameObject2.shapeColor="lightpink";
  gameObject3=createSprite(300,200,50,50);
  gameObject3.shapeColor="lightpink";
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
  
  if(isTouching(movingRect, gameObject3)){
  movingRect.shapeColor="purple";
  gameObject3.shapeColor="purple";
  }
  else{
  movingRect.shapeColor="orange";
  gameObject3.shapeColor="orange";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2 &&
    object2.x-object1.x<=object1.width/2+object2.width/2 &&
    object1.y-object2.y<=object1.height/2+object2.height/2 &&
    object2.y-object1.y<=object1.height/2+object2.height/2){
 
    return true;
 }
 else{
  return false;
 }
}