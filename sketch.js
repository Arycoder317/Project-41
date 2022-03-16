var path,boy,bone,spike;
var pathImg,boyImg,boneImg,spikeImg;
var treasureCollection = 0;
var boneG,spikeGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  boneImg = loadImage("asdfgh.png");
  spikeImg = loadImage("images.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
boneG=new Group();
spikeGroup=new Group();



}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createBone();
    createSpike();

    if (boneG.isTouching(boy)) {
      boneG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
      
  
      if(spikeGroup.isTouching(boy)) {
        gameState=END;
        

        boy.addAnimation("SahilRunning",endImg);

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
       
        
         boneG.destroyEach();
         spikeGroup.destroyEach();
        

        
        boneG.setVelocityYEach(0);
        spikeGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }


function createBone() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  bone.addImage(boneImg);
  bone.scale=0.0012;
  bone.velocityY = 3;
  bone.lifetime = 150;
  boneG.add(bone);
  }
}




function createSpike(){
  if (World.frameCount % 530 == 0) {
  var spike = createSprite(Math.round(random(50, 350),40, 10, 10));
  spike.addImage(swordImg);
  spike.scale=0.1;
  spike.velocityY = 3;
  spike.lifetime = 150;
  spikeGroup.add(spike);
  }
}
