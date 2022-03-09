var backgroundimg,BOMBimg,Bulletsimg,Playersimg,Youimg, Zombiesimg 
var background, player, BOMB, Zombies, Enemy
function preload(){
backgroundimg=loadImage("Background.png")
BOMBimg=loadImage("BOMB.jpg")
Bulletsimg=loadImage("Bullets.png")
Playersimg=loadImage("Players.jpg")
Youimg=loadImage("You.jpg")
Zombiesimg=loadImage("Zombies.jpg")
} 
 function setup(){
     createCanvas(600,600)
     background=createSprite(0,0,600,600)
     background.addImage(backgroundimg)
     player=createSprite(400,200,20,50)
     player.addImage("Playersimg")
     BOMB= new Group()
     Zombies= new Group()
     Enemy= new Group()
     
 }
 function draw(){
     drawSprites()
 }