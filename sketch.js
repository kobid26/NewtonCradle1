const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var slingshot1,slingshot2,slingshot3,slingshot4,slingshot5;
var bgColor;



function setup(){
    
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    bob3 = new Bob (windowWidth/2,windowHeight/3+windowHeight/3,50);
    bob2 = new Bob (bob3.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob1 = new Bob (bob2.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob4 = new Bob (bob3.body.position.x+100,windowHeight/3+windowHeight/3,50);
    bob5 = new Bob (bob4.body.position.x+100,windowHeight/3+windowHeight/3,50);

    slingshot1 = new Slingshot (bob1.body,{x:bob1.body.position.x,y:windowHeight/3-150});
    slingshot2 = new Slingshot (bob2.body,{x:bob2.body.position.x,y:windowHeight/3-150});
    slingshot3 = new Slingshot (bob3.body,{x:bob3.body.position.x,y:windowHeight/3-150});
    slingshot4 = new Slingshot (bob4.body,{x:bob4.body.position.x,y:windowHeight/3-150});
    slingshot5 = new Slingshot (bob5.body,{x:bob5.body.position.x,y:windowHeight/3-150});

   
}

function draw(){

    background();

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    slingshot4.display();
    slingshot5.display();

    textFont("Georgia");
    textSize(60);
    fill(255);
    text("Newton's Cradle!",10,70);
    textSize(15);
   
    
}

function mouseDragged() {
Matter.Body.setPosition(pendulum.body, {x : mouseX , y : mouseY})

}

