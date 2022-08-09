var PLAY = 1;
var END = 0;
var gameState = PLAY;

var dog,dogImage
var ground, invisibleGround, groundImage;
var bone, boneImage

var obstacle, obstaclesGroup

function preload(){
  
  dogImage = loadImage("Dog.png");
  groundImage = loadImage("Path.png");
  boneImage = loadImage("Bone.png")
}

function setup() {
  createCanvas(600, 200);
  
  dog = createSprite(50,180,20,50);
  dog.addImage("dog", dogImage)
  dog.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  bone = createSprite(200,150,20,50);
  bone.addImage("bone", boneImage);
  bone.scale = 0.5;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  


}

function draw() {
  background(180);
  
  
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -4;
    //scoring
  
    
    

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& dog.y >=100) {
        dog.velocityY = -13;

        
    }
    
    //add gravity
    dog.velocityY = dog.velocityY + 0.8
  
    
   
  
 
  //stop trex from falling down
  dog.collide(invisibleGround);
  
  
  
  drawSprites();
}
}

