var food;
var group = [];
var head;
var gameState = "play";
var score= 0
var edges;

function setup(){
head = createSprite(200,200,10,10);
head.velocityX = 2
group.push(head)

food = createSprite(random(30,100),random(30,100),20,20);
food.shapeColor = "yellow"

}

function draw(){
background("black");
edges = createEdgeSprites();

if(gameState === "play"){
    CheckTouch();
    move()
if(score === 1){
head.height = head.height+1
}
if(score === 3){
head.height = head.height+1.1
        
}
if(score === 6){
head.height = head.height+1.4               
}
}

if(gameState === "end"){
background("red");
textSize(40)
text("GAME OVER",80,200);
head.destroy()
group = []
food.destroy()

}
    
fill("green")
textSize(25)
text("Score : " + score,10,30)

drawSprites();
}

function move(){
if(keyDown("UP_ARROW")){
head.setSpeedAndDirection(2,-90)
}
    
if(keyDown("Down_ARROW")){
head.setSpeedAndDirection(2,90)
}
    
if(keyDown("LEFT_ARROW")){
head.setSpeedAndDirection(2,180)
}
    
if(keyDown("RIGHT_ARROW")){
head.setSpeedAndDirection(2,0)
}
}

function CheckTouch(){
if(head.isTouching(food)){

food.x= Math.round((random(20,350)));
food.y= Math.round((random(20,350)));

var body = createSprite(200,200,10,10)
group.push(body)
score ++

}

if(edges[0].isTouching(head) || edges[1].isTouching(head) || edges[2].isTouching(head) || edges[3].isTouching(head)){
gameState = "end"
head.setSpeedAndDirection(0,0)
}

for(var i = group.length-1 ; i > 0;i--){
    group[i].x = group[i-1].x;
    group[i].y = group[i-1].y
}
}