 var sprite1 

 function setup() {
  createCanvas(400,400);
  sprite1=createSprite(200, 200,20,20);
  background("purple")
}


function draw() 
{

drawSprites()

if (keyIsdown(DOWN_ARROW))
{
  background("green");
}

if (keyIsdown(UP_ARROW))
{
  background("yellow");
}

if (keyIsdown(RIGHT_ARROW))
{
  background("blue");
}

if (keyIsdown(LEFT_ARROW))
{
  background("pink");
}


}

