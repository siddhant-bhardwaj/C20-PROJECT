var slider;

function setup() {
  createCanvas(1200,800);
  slider=createSprite(200,200,20,20);
  



}

function draw() {
 

  background(50,80,250); 
  slider.x=mouseX;
  

if(slider.x>300){
  background(100,30,60);
}



if(slider.x>600){
background(100,200,300);
}


if(slider.x>900){
background(250,60,100);

}

if(slider.x>1100){
background(300,200,40);
}


  drawSprites();
}