var bullet,wall,thickness;

var speed,weight;

function setup(){
  createCanvas(1600,400);
thickness=random(22,83);
speed=random();
weight=random();
bullet = createSprite(50,200,50,5);

wall = createSprite(1500,200,thickness,height/2);



}

function draw(){
background("black");


drawSprites();

}


