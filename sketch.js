function setup() {
  createCanvas(800,600);
 mrect = createSprite(100, 200, 50, 50);
 mrect.shapeColor = "red";

 frect = createSprite(200, 300, 50, 50);
 frect.shapeColor = "red";

 crect = createSprite (400, 250 , 50,50);
 crect.shapeColor = "red";

 drect = createSprite (300, 150 , 50,50);
 drect.shapeColor = "red";
}

function draw() {
  
 

  background(0);  
  mrect.x = mouseX
  mrect.y = mouseY

   if(collide (mrect, drect)) {
  mrect.shapeColor= "purple"
drect.shapeColor= "purple"

  
   } else {
    mrect.shapeColor= "red"
    
    drect.shapeColor = "red"
    

   }


  drawSprites();
}

function collide (a,b) {

  if(a.x- b.x < a.width/2 + b.width/2 &&
    b.x- a.x < a.width/2 + b.width/2 &&
    a.y- b.y < a.height/2 + b.height/2 &&
    b.y- a.y <a.height/2 + b.height/2 
) {

return true 

}
else {
  
  return false

}




}