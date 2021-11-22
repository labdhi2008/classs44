var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var gameOver, gameOverImg;
var restart, restartImg, backgroundImg;
var score = 0;
var jumpSound, dieSound;


function preload(){
  bgImg = loadImage("assets/bg.png");
  obsTop1 = loadImage("assets/obsTop1.png");
  obsTop2 = loadImage("assets/obsTop2.png");
  obsBottom1 = loadImage("assets/obsBottom1.png");
  obsBottom2 = loadImage("assets/obsBottom2.png");
  obsBottom3 = loadImage("assets/obsBottom3.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
  jumpSound = loadSound ("assets/jump.mp3");
  dieSound = loadSound("assets/die.mp3");
}

function setup(){
  createCanvas (400, 400);
  //background image
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3

  //creating top and bottom grounds
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //creating balloon     
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.2;

  //creating groups
  topObstaclesGroup = new Group();
  bottomObstaclesGroup = new Group();
  barGroup = new Group();

  //creating game over and restart sprite
  gameOver = createSprite(220,200);
  restart = createSprite(220,240);
  gameOver.addImage(gameOverImg);
  restart.addImage(restartImg);
  //gameOver.visible = false;
  //restart.visible = false;
  gameOver.scale = 0.5;
  restart.scale = 0.5;


}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}