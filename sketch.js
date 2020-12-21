//Create variables here
var dog, happyDog, database, foodS, foodStock;


function preload()
{
  //load images here
  dog1=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png")
}

function setup() {
   //for database
  database=firebase.database();
  createCanvas(500, 500);
  
  //for dog
  dog=createSprite(250,300,150,150);
  dog.addImage(dog1);
  dog.scale=0.15;
  //dog.addImage(happyDog1);
  

  //for stock
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46, 139, 87);

//for feeding
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

drawSprites();

//add styles here
fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,200);
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",120,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}



