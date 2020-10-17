const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,object,plane;
var box1,box2,box3;
var plane1,planeimg,package,packageimg;

function preload(){
    planeimg=loadImage("planeBlue1.png");
    packageimg=loadImage("package.png");
}
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    package=createSprite(200,100,10,10);
    package.scale=0.1;
    package.addImage("package",packageimg)

    plane1=createSprite(200,100,20,20);
    plane1.velocityX=0;
    plane1.scale=0.7;
    plane1.addImage("plane",planeimg)
   
    

    box1=new Box(150,380,20,100);
    box2=new Box(250,380,20,100);
    box3=new Box(200,380,100,20);

    ground = Bodies.rectangle(200,390,400,20,{isStatic:true});
    World.add(world,ground);

    object=Bodies.rectangle(200,100,50,20,{restitution:1.3,isStatic:true});
    World.add(world,object);

    plane=Bodies.rectangle(200,100,20,20,{isStatic:true});
    World.add(world,plane);

    console.log(object);
    

    //console.log(ground);
}

function draw(){
    background("black");
    drawSprites();
    text(mouseX+" "+mouseY,mouseX,mouseY);

    
   

    if(keyCode===DOWN_ARROW){
      Matter.Body.setStatic(object,false);
    }

    package.x= object.position.x 
    package.y= object.position.y 
    
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);    
}