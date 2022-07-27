// made variables for gameStates and gave the value of play and end in order of 1 and 0
// also set the current gameState to play because it is necessery that player should face play gamestate every time when he/she opens the game
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bgImg;
var superhero;
var ghostImg;
var invisibleGround, ground; 
var gameOver,restart;

// the function give us the place to define all pictures, gifS, animation, etc 
function preload(){

    // loaded all images in perticular variables

    bgImg = loadImage("background.jpg");

    superheroImg = loadImage("superhero.png");

    fireballImg = loadImage("magicball.png");

    ghostImg = loadImage("ghost.png");

    bombImg = loadImage("bomb.png");

    missileImg = loadImage("missile.png");

    gameOverImg = loadImage("gameOver.png");

    restartImg = loadImage("restart.png");

}

//this function makes all the things in practical
function setup(){
    
    // created canvas for playing area
    createCanvas(windowWidth,windowHeight);

    backgroundImg = createSprite(0,height/2,width*2,height);
    backgroundImg.addImage("background", bgImg);
    backgroundImg.x = width/2;
    backgroundImg.scale = 0.3;
    backgroundImg.visible = true;
     
     superhero = createSprite(190,height-120,20,50);
     superhero.addImage("superhero",superheroImg);
     superhero.scale = 0.5;

     ghost = createSprite(1300,height-140,20,50);
     ghost.addImage("ghost",ghostImg);
     ghost.scale = 0.21;

    // made group for obstacles to use the loop
     obstaclesGroup = new Group();
}

//this function makes all the things seen in playarea
function draw(){

    // set backgroung image
    background(0);

    /*if(ground.x < 600 ){
        //ground.x = width/2;
    }*/

    spawnObstacles();

    drawSprites();

}


function spawnObstacles() {
    if(frameCount % 120 === 0) {
      var obstacle = createSprite(1250,height-190,20,30);
      obstacle.setCollider('circle',0,0,45);
      obstacle.y = Math.round(random(height-120,height-70));
      // obstacle.debug = true
    
      obstacle.velocityX = -(45);

      obstacle.addImage(missileImg);
    
      /*var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: obstacle.addImage(missileImg);
                break;
        case 2: obstacle.addImage(fireballImg);
                break;
        default: break;
      }*/
             
      obstacle.scale = 0.1;
      obstacle.lifetime = 300;
      obstacle.depth = superhero.depth;
      superhero.depth +=1;
      obstaclesGroup.add(obstacle);
    }
  }