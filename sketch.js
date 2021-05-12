var bg,bgImg;
var player, shooterImg, shooter_shooting;
var  zombieImg,zombieImg1;
var  bulletImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;
 
function preload(){
  
  heart1Img = loadImage("assets/h1.png")
  heart2Img = loadImage("assets/h2.png")
  heart3Img = loadImage("assets/h3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bulletImg = loadImage("assets/bullet.png");

  zombieImg = loadAnimation("assets/1.png","assets/2.png","assets/3.png","assets/4.png")
  
  bgImg = loadImage("assets/bg.jpeg")

  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionSound = loadSound("assets/explosion.mp3")

   
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2,windowHeight/2)
  bg.addImage(bgImg)
  bg.scale=1

  //creating shouter 
  player=createSprite(windowWidth/4,windowHeight-100)
  player.addImage(shooterImg)
  player.scale=0.3
  zombieGroup = new Group();
  bulletsGroup = new Group();


}

function draw() {
  background(0); 
  if(gameState == "fight"){

  
  if(keyDown("UP_ARROW")){
     player.y = player.y-30 
    }
    if(keyDown("DOWN_ARROW")){
      player.y = player.y+30
    }
    if(keyDown("LEFT_ARROW")){
      player.x = player.x-30
    }
    if(keyDown("RIGHT_ARROW")){
      player.x = player.x+30
    }
    spawnzombies();
    if(keyWentDown("space")){
      spawnbullets();
    }
    
  }
  drawSprites();

}

function spawnzombies(){
  if (frameCount % 100 == 0) {
    var r = Math.round(random(windowHeight- 400, windowHeight - 50))
    var zombie = createSprite(windowWidth, r, 20, 10);
    zombie.velocityX = -5
    zombie.scale=0.5
    zombie.addAnimation("walking",zombieImg)
    zombie.lifetime = windowWidth / 5
    zombieGroup.add(zombie);
    
}
}
function spawnbullets(){
  
    var r =player.x
    var y =player.y
    var bullets = createSprite(r,y, 20, 10);
    bullets.velocityX = +5
    bullets.scale=0.3
    bullets.addImage(bulletImg)
    bullets.lifetime = windowWidth / 5
    bulletsGroup.add(bullets);
}
