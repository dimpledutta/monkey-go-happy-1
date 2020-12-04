var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.veloctiyX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
   bananaGroup = new Group();
 obstacleGroup = new Group();
  score=0;
var survivaltime
  
}


function draw() {
background(150)
 if(ground.x<0) {
   ground.x=ground.width/2
 }
  monkey.velocityY = monkey.velocityY + 0.8

  
  if(keyDown("space")&& monkey.y >= 100) {
monkey.velocityY = -10;
  }
  
  monkey.collide(ground);
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  if(obstacleGroup.isTouching(monkey)) {
    ground.velocityX= 0;
    monkey.velocityY= 0;
    obstacleGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  food();
  obstacles();
  drawSprites();
  
}

function food() {
  if (frameCount % 80 === 0) {
banana = createSprite(300,100,40,10);
banana.y = Math.round(random(120,200));
    banana.velocityX=-5
banana.addImage(bananaImage);
banana.scale = 0.2;
    banana.lifetime=300;
bananaGroup.add(banana);
    monkey.depth=banana.depth+1
    
//banana.velocityX = -3;
  
  }
}
  function obstacles() {
   if (frameCount % 300 === 0) {
obstacle = createSprite(300,320,40,10);
//obstacle.y = Math.round(random(120,200));
obstacle.velocityX=-6     
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;
     obstacle.lifetime=300;
obstacleGroup.add(obstacle);
   }
    
    
  }
