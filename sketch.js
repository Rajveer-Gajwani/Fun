var block,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;

function setup(){
    createCanvas(1600,800);
   block = createSprite(100,100,30,30);
   block.shapeColor = "blue";
   block2 = createSprite(100,100,30,30);
   block2.shapeColor = "red";
   block3 = createSprite(100,100,30,30);
   block3.shapeColor = "yellow";
   block4 = createSprite(100,100,30,30);
   block4.shapeColor = "green";
   block5 = createSprite(100,100,30,30);
   block5.shapeColor = "black";
   block6 = createSprite(100,100,30,30);
   block6.shapeColor = "orange";
   block7 = createSprite(100,100,30,30);
   block7.shapeColor = "blue";
   block8 = createSprite(100,100,30,30);
   block8.shapeColor = "red";
   block9 = createSprite(100,100,30,30);
   block9.shapeColor = "yellow";
   block10 = createSprite(100,100,30,30);
   block10.shapeColor = "green";
   block11 = createSprite(100,100,30,30);
   block11.shapeColor = "black";
   block12 = createSprite(100,100,30,30);
   block12.shapeColor = "orange";
   block13 = createSprite(100,100,30,30);
   block13.shapeColor = "grey";
   block14 = createSprite(100,100,30,30);
   block14.shapeColor = "skyblue";
   block15 = createSprite(100,100,30,30);
   block15.shapeColor = "pink";
  
}

function draw(){
    background = 80;

if(mousePressedOver(block)){
    block.x = mouseX;
    block.y = mouseY;
}

if(block.y>400){
    block.y = 100;
    block.x = Math.round(random(20,1580));
}
if(block2.y>400){
    block2.y = 100;
    block2.x = Math.round(random(20,1580));
}
if(block3.y>400){
    block3.y = 100;
    block3.x = Math.round(random(20,1580));
}
if(block4.y>400){
    block4.y = 100;
    block4.x = Math.round(random(20,1580));
}
if(block5.y>400){
    block5.y = 100;
    block5.x = Math.round(random(20,1580));
}
if(block6.y>400){
    block6.y = 100;
    block6.x = Math.round(random(20,1580));
}
if(block7.y>400){
    block7.y = 100;
    block7.x = Math.round(random(20,1580));
}
if(block8.y>400){
    block8.y = 100;
    block8.x = Math.round(random(20,1580));
}
if(block9.y>400){
    block9.y = 100;
    block9.x = Math.round(random(20,1580));
}
if(block10.y>400){
    block10.y = 100;
    block10.x = Math.round(random(20,1580));
}
if(block11.y>400){
    block11.y = 100;
    block11.x = Math.round(random(20,1580));
}
if(block12.y>400){
    block12.y = 100;
    block12.x = Math.round(random(20,1580));
}
if(block13.y>400){
    block13.y = 100;
    block13.x = Math.round(random(20,1580));
}
if(block14.y>400){
    block14.y = 100;
    block14.x = Math.round(random(20,1580));
}
if(block15.y>400){
    block15.y = 100;
    block15.x = Math.round(random(20,1580));
}



block.velocityY = 5;
block2.velocityY = 5;
block3.velocityY = 5;
block4.velocityY = 5;
block5.velocityY = 5;
block6.velocityY = 5;
block7.velocityY = 5;
block8.velocityY = 5;
block9.velocityY = 5;
block10.velocityY = 5;
block11.velocityY = 5;
block12.velocityY = 5;
block13.velocityY = 5;
block14.velocityY = 5;
block15.velocityY = 5;

    drawSprites();
}