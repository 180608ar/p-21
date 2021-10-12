var bullet,wall;

var speed,weight; 

function setup(){
  createCanvas(1600,400);
  bullet = createSprite(50,210,50,10);
  wall = createSprite(1200,200,60,100);

  speed=random(223,400);
  weight=random(30,70);

   bullet.velocityX = speed;

}

function draw(){
 background("black"); 
 var deformation=0.5 * weight * speed * speed/22509;
 console.log(deformation);
 if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
  bullet.velocityX=0;
  
  if(deformation>180){
    bullet.shapeColor = "white";
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor = "red";
  }
  if(deformation<100){
    bullet.shapeColor = "green"
  }
}



drawSprites();

}


