const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon, polygon_img;
var bgColor;
var score = 0;

function preload(){
    polygon_img = loadImage("polygon.png");
    
}

function setup(){
    createCanvas(1200,500);

    engine = Engine.create();
    world = engine.world;

    getBackground();

    stand = new Ground(590,370,300,20);
    //level1
    block1 = new Box(500,340,30,40);
    block2 = new Box(530,340,30,40);
    block3 = new Box(560,340,30,40);
    block4 = new Box(590,340,30,40);
    block5 = new Box(620,340,30,40);
    block6 = new Box(650,340,30,40);
    block7 = new Box(680,340,30,40);
    //level2
    block8 = new Box(530,300,30,40);
    block9 = new Box(560,300,30,40);
    block10 = new Box(590,300,30,40);
    block11 = new Box(620,300,30,40);
    block12 = new Box(650,300,30,40);    
    //level3
    block13 = new Box(560,260,30,40);
    block14 = new Box(590,260,30,40);
    block15 = new Box(620,260,30,40);
    //level4
    block16 = new Box(590,220,30,40);

    var polygon_options = {
        density:1.2,
        restitution:0.5
    }
    polygon = Bodies.circle(50,200,20, polygon_options);
    World.add(world,polygon);

    slingShot = new SlingShot(polygon,{x:100,y:200});

}
function draw(){
    if(bgColor){
        background(bgColor);
    }
    Engine.update(engine);

    fill("white");
    textSize(24);
    text("Score = "+score,width - 300, 50);

    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon,{x:100,y:200});
        slingShot.attach(polygon);
    }
}
async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var time = responseJson.datetime.slice(11,13);
    if(time > 6 && time < 9){
        bgColor = "lightblue";
    }
    else{
        bgColor = "darkblue";
    }
}
