var side1,side2,side3,side4,covering

var player,pimg
var food, foodimg
var enemy1,e1img
var enemy2,e2img
var enemy3,e3img
var enemy4,e4img
var enemy5,e5img



function preload(){
foodimg= loadImage("food.png")
e1img = loadImage("ye.png")
e2img = loadImage("re.png")
e3img = loadImage("me.png")
e4img = loadImage("ge.png")
pimg = loadImage("pame.png")
}



function setup() {
  createCanvas(800,400);
  covering = createSprite(400,200,200,100);
  covering.shapeColor = "blue"
   side1 = createSprite(400,150,200,5);
  side3 = createSprite(400,250,200,5);
  side2 = createSprite(300,200,5,100);
   side4 = createSprite(500,200,5,100);
   enemy1 = createSprite(200,100,20,20)
  
   enemy2 = createSprite(300,100,20,20) 
   enemy3 = createSprite(400,100,20,20)
   enemy4 = createSprite(500,100,20,20)
   enemy1.addImage(e1img)
   enemy2.addImage(e2img)
   enemy3.addImage(e3img)
   enemy4.addImage(e4img)
   enemy1.scale = 0.025
   enemy2.scale = 0.1125
   enemy3.scale = 0.1125
   enemy4.scale = 0.1125
   enemy1.velocityX = random(-3,3)
   enemy1.velocityY = random(-3,3)
   enemy2.velocityX = random(-3,3)
   enemy2.velocityY = random(-3,3)
   enemy3.velocityX = random(-3,3)
   enemy3.velocityY = random(-3,3)
   enemy4.velocityX = random(-3,3)
   enemy4.velocityY = random(-3,3)
   for(var j =15; j<=width;j=j+7.25){
food = createSprite(random(50,750),random(50,350),10,10);
food.addImage(foodimg)
food.scale = 0.15
   }
  side1.visible = false  
  side2.visible = false
  side3.visible = false
  side4.visible = false
  player = createSprite(400,350 , 50, 50);
  player.addImage(pimg)
  player.scale = 0.01982654789     
  
  
}

function draw() {
  background(0);
 if(enemy1.isTouching(covering)){
enemy1.x = random(50,750)
enemy1.y = 100


 }
 if(enemy2.isTouching(covering)){
  enemy2.x = random(50,750)
  enemy2.y = 100
  
  
   }
   if(enemy3.isTouching(covering)){
    enemy3.x = random(50,750)
    enemy3.y = 100
    
    
     }
     if(enemy4.isTouching(covering)){
      enemy4.x = random(50,750)
      enemy4.y = 100
      
      
       }
       if(enemy1.x>800||enemy1.x<0||enemy1.y>400||enemy1.y<0){
        enemy1.x = random(50,750)
        enemy1.y = 100
        
        
         }
         if(enemy2.x>800||enemy2.x<0||enemy2.y>400||enemy2.y<0){
          enemy2.x = random(50,750)
          enemy2.y = 100
          
          
           }
           if(enemy3.x>800||enemy3.x<0||enemy3.y>400||enemy3.y<0){
            enemy3.x = random(50,750)
            enemy3.y = 100
            
            
             }
             if(enemy4.x>800||enemy4.x<0||enemy4.y>400||enemy4.y<0){
              enemy4.x = random(50,750)
              enemy4.y = 100
              
              
               }
 if(player.isTouching(side1)||player.isTouching(side2)||player.isTouching(side3)||player.isTouching(side4)){
player.x = 400
player.y = 350
player.velocityY = 0
player.velocityX = 0


 }
  
  if(keyWentDown(LEFT_ARROW)){
player.velocityX = -1 
player.velocityY = 0


  }
  if(keyWentDown(UP_ARROW)){
    player.velocityX = 0
    player.velocityY = -1 
    
    
      }
      if(keyWentDown(RIGHT_ARROW)){
        player.velocityX = 1
        player.velocityY = 0 
        
        
          }
          if(keyWentDown(DOWN_ARROW)){
            player.velocityX = 0
            player.velocityY = 1 
           
            
              }
          if(keyWentDown("space")){
            player.velocityX = 0
            player.velocityY = 0 
            
            
              }
  createEdgeSprites();
  
  drawSprites();
}