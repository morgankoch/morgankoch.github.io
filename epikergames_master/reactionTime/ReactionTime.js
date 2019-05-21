var mouseAccuracy;
var reactionTime;
var textColor = "white";
var textColorRestart = "white";
var startScreen = true;
var end;
var sec = 1;
var e;
var squr;
var scrDsp;
var score = 0

class Square{
  constructor(x, y){
    this.x = x
    this.y = y
    this.length = 20
    this.r = this.length/2
  }
  move(){
    print(this.x, this.y)
    this.x = round(random(0, width - this.r*2))
    this.y = round(random(0, height - this.r*2))
  }
  draw(){
    rect(this.x, this.y, this.length, this.length);
  }
}


function setup() {
  scrDsp = createElement('h2', "Score: ")
  squr = new Square(256, 156);
  createCanvas(400, 400);
  e = second();
}

function draw() {
  //print(mouseX);
  //print(mouseY);
  if(startScreen == false && mouseAccuracy == true){
    end = false;
    background(220);
    squr.draw();
    if(sec > 0){
      sec = (e + 15 - second()) % 60;
    }
    scrDsp.html("Score: " + score);
    if(sec <= 0){
      end = true;
    }
  }
  if(startScreen == true){
    background(255, 0, 0);
    fill(textColor1);
    text("Mouseclick Accuracy", 0, 0, 400, 400);
    fill(textColor2);
    text("Reaction Time Test", 0, 20, 400, 400);
    textSize(20);
    textAlign(CENTER, CENTER);
    if(mouseX >= 102 && mouseX <= 293 && mouseY >= 190 && mouseY <= 209){
      textColor = "grey";
    }
    else {
      textColor = "white";
    }
  }
  if(end == true && mouseAccuracy == false){
    background(255, 0, 0);
    fill(255)
    text("You scored" + score + "in 30 seconds!", 0, 0, 400, 400);
    fill(textColorRestart);
    text("Restart", 0, 20, 400, 400);
    textAlign(CENTER, CENTER);
    if(mouseX >= 165 && mouseX <= 234 && mouseY >= 209 && mouseY <= 228){
      textColorRestart = "grey";
    }
    else {
      textColorRestart = "white"
      }
    }
  }

function mouseClicked(){
  if(mouseX >= squr.x && mouseX <= squr.x + squr.length && mouseY >= squr.y && mouseY <= squr.y + squr.length){
    squr.move();
    score += 10;
  }
  if(mouseX >= 102 && mouseX <= 293 && mouseY >= 190&& mouseY <= 209 && reactionTime == false && mouseAccuracy == false && end == false){
    startScreen = false;
    mouseAccuracy = true;
    reactionTime = false;
  }
  if(mouseX >= 165 && mouseX <= 234 && mouseY >= 209 && mouseY <= 228 && reactionTime == false && mouseAccuracy == false){
    end = false;
    console.log("hello");
    mouseAccuracy = true;
    reactionTime = false;
    startScreen = false;
  }
}
