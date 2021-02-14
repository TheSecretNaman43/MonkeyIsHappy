 //VARS!!!
 var KingKong, KKImage;
 var BananaF, BananaImage;
 var Obstacles, ObstaclesImage;
 var BackGround, BackGroundImage;
 var Ground, G2;
 var Dice;
 var GameState=1;
 var Score=0, Lose=0;

 function preload(){
 //Loading Images!!
 KKImage=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png"  ,"sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") ; 
 
 BananaImage= loadImage("banana.png");
 ObstaclesImage= loadImage("obstacle.png");  
 BackGroundImage=loadImage("download.jpg");
 }

 function setup() {
 createCanvas(600,600);
 
 BackGround= createSprite(200,200,600,600) 
 BackGround.addImage("bg", BackGroundImage); 
 BackGround.scale=4.75; 
 BackGround.x = BackGround.width /2;
 BackGround.velocityX = -4;        
 
 Ground=createSprite(60,500,10000,20);
 Ground.shapeColor = color("lime");  
 G2=createSprite(60,500,10000,10);  
 G2.visible = false;     
 
 Monkey(); 
 KingKong.collide(Ground);  
   
 BanG = new Group();
 RockG = new Group();  
 KingKong.collide(Ground);   
 }

 function draw() {
 background(220);
 Moving_BackGround(); 
 Dropper(); 
 Jump();  
 Points();  
 drawSprites();    
 text(mouseX+","+mouseY,mouseX,mouseY);  

 //Displaying Score!!  
 fill("lime");
 stroke("black")  
 textSize(20);
 text("Points:"+Score, 510,40);  
 }

 function Banana(){
 BananaF=createSprite(Math.round(random(250,500)),450,50,50);
 BananaF.addImage(BananaImage); 
 BananaF.scale=0.15;   
 BananaF.velocityX=-2;
 if (BananaF.y<500){
 BananaF.y=450;   
 }
 BanG.add(BananaF);  
 }
 
 function Rocks(){
 Obstacles=createSprite(Math.round(random(250,450)),450,50,50);
 Obstacles.addImage(ObstaclesImage); 
 Obstacles.scale=0.2;  
 Obstacles.velocityX=-1.5;
 RockG.add(Obstacles);  
 }
 
 function Moving_BackGround(){
 if (BackGround.x < 0) {
 BackGround.x = BackGround.width / 2;
 } 
 }

 function Monkey(){
 KingKong= createSprite(80,410,10,10);
 KingKong.addAnimation("minecraft",KKImage);  
 KingKong.scale=0.15;      
 }
 
 function Jump(){ 
 if(keyDown("space")&&KingKong.y >= 350){
 KingKong.velocityY=-10
 }
 KingKong.velocityY = KingKong.velocityY + 0.3;  
 KingKong.collide(Ground);  
 }  

 function Dropper(){
 Dice=Math.round(random(1,2));
 if(frameCount%80===0){  
 if(Dice===1 && GameState === 1){
 Banana();
 }
 else if (Dice===2 && GameState === 1){
 Rocks();
 }
 }
 }  

 function Points(){
 if (BanG.isTouching(KingKong)){
 Score=Score+1;
 BanG.destroyEach();  
 }      
 if (RockG.isTouching(KingKong)){  
 Score=Score-1;
 RockG.destroyEach();  
 }  
 }