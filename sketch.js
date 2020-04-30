var car1, car2, car3;

var wall;

function setup() {
  createCanvas(1600,400);

  car1 = createSprite(50, 100, 50, 50);
  car1.shapeColor="white";
  car1.velocityX=60;

  car2 = createSprite(50, 200, 50, 50);
  car2.shapeColor="white";
  car2.velocityX=50;                           

  car3 = createSprite(50, 300, 50, 50);
  car3.shapeColor="white";                                  
  car3.velocityX=45;

  wall = createSprite(1500, 0, 50, 6000);
  wall.shapeColor="black";
  
}

function draw() {
  background(0,255,0); 
  

  
  text("GREEN means safe ", 1300, 20);
  text("YELLOW means is average ", 1300, 40);
  text("RED means dangerous ", 1300, 60);
    if (wall.x-car1.x<wall.width/2+car1.width/2){
      if ((0.5*2260*60*60/22500)<100 && (0.5*2260*60*60/22500)===100){             
        car1.shapeColor="green";
      }
      if ((0.5*2260*60*60/22500)>100 && (0.5*2260*60*60/22500)<180 || (0.5*2260*60*60/22500)===180) {
    car1.shapeColor="yellow";              
      }
      if ((0.5*2260*60*60/22500)>180){
      car1.shapeColor="red";
      }
    car1.velocityX=0;
    car1.width=100;
    }                                
    
  
  if (wall.x-car3.x<wall.width/2+car3.width/2){
    if ((0.5*3000*45*45/22500)<100 ||(0.5*3000*45*45/22500)===100){
      car3.shapeColor="green";
    }
  if ((0.5*3000*45*45/22500)>100 && (0.5*3000*45*45/22500)<180 || (0.5*3000*45*45/22500)===180){
   car3.shapeColor="yellow";
  }
  if ((0.5*3000*45*45/22500)>180){
    car3.shapeColor="red";
  }
    car3.velocityX=0;
   car3 . width=100;

  }
  if (wall.x-car2.x<wall.width/2+car2.width/2){
    if ((0.5*1522*50*50/22500)<100||(0.5*1522*50*50/22500)===100){
      car2.shapeColor="green"; 
    }
  if ((0.5*1522*50*50/22500)>100 && (0.5*1522*50*50/22500)<180 || (0.5*1522*50*50/22500)===180){
   car2.shapeColor="yellow";
  }
  if ((0.5*1522*50*50/22500)>180){
    car2.shapeColor="red";
  }
    car2.velocityX=0;
    car2.width = 100;

  }

  drawSprites();

}                              

