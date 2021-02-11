var wall, thickness;
var bullet,speed,weight ;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  //wall.debug = true;
  bullet = createSprite(0,200,40,30);
  bullet.shapeColor = "white";
  //bullet.debug = true;
  console.log(speed);
  
}

function draw() {
  background(0,0,0);  
  
  bullet.velocityX = speed;
 // bullet.x = World.mouseX;
  //bullet.y = World.mouseY;

 if (isTouching() ){
   bullet.velocityX = 0;
     console.log("message");       
  var destructionn = 0.5 * weight*speed*speed;
  var destructiond = thickness*thickness*thickness;
  var deformation = destructionn/destructiond;
  
 // console.log("d n ",destructionn);
 // console.log("d d ",destructiond);
  console.log("hi",deformation);
    
  if (deformation>10){
    console.log("inside if block");
    bullet.shapeColor = color(255,0,0);
    bullet.velocityX = 0
  }
  
  if(deformation<10){
    bullet.shapeColor = color(0,255,0);
    
  }
  console.log("yes");
 }
 console.log(speed);
  drawSprites();
}
function isTouching(){
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2){
 return true;
}
else{
  console.log("did not return");
  return false;
}
}