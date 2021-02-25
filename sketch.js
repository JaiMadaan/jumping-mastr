var canvas;
var music,surface1,surface2,surface3,surface4,ball;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
  surface1 = createSprite(40,400,100,50)
  surface1.shapeColor="blue"
  surface2= createSprite(140,400,100,50)
  surface2.shapeColor="Green"
   surface3 = createSprite(240,400,100,50)
   surface3.shapeColor="grey"
   surface4 = createSprite(340,400,100,50)
   surface4.shapeColor="Pink"
   ball = createSprite(200,180,30,30)
ball.shapeColor="yellow"

    //create box sprite and give velocity

}

function draw() {
    background(rgb(255,25,5));
    //create edgeSprite



  drawSprites()
}
