var timePassed = 0;
var millisecond;
var sec;
var AccIsClicked = false;
var mouseAccuracy;
var reactionTime;
var textColor1 = "white";
var textColor2 = "white";
var textColorRestart = "white";
var startScreen = true;
var end;
var squr;
var scrDsp;
var score = 0;

function draw() {
  if(startScreen == false && mouseAccuracy == true){
    end = false;
    background(220);
    squr.draw();
    scrDsp.html("Score: " + score);
    millisecond = millis() - timePassed;
    sec = floor(millisecond/1000);
    if(sec >= 15){
      end = true;

    }
  }
  if(startScreen == false && reactionTime == true){
    background(220);
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
      textColor1 = "grey";
      textColor2 = "white";
    }
    else if(mouseX >= 111 && mouseX <= 286 && mouseY >= 210 && mouseY <= 232){
      textColor2 = "grey";
      textColor1 = "white";
    }
    else {
      textColor1 = "white";
      textColor2 = "white";
    }
  }
  if(end == true){
    background(255, 0, 0);
    fill(255)
    text("You scored " + score + " in 15 seconds!", 0, 0, 400, 400);
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
  //Mouse Accuracy
  if(mouseX >= 102 && mouseX <= 293 && mouseY >= 190&& mouseY <= 209 && AccIsClicked == false){
    startScreen = false;
    mouseAccuracy = true;
    reactionTime = false;
    AccIsClicked = true;
  }
  //Reaction Time
  if(mouseX >= 111 && mouseX <= 286 && mouseY >= 210 && mouseY <= 232 && mouseAccuracy == false){
    startScreen = false;
    reactionTime = true;
    mouseAccuracy = false;
  }
  //Restart Button
  if(mouseX >= 165 && mouseX <= 234 && mouseY >= 209 && mouseY <= 228 && reactionTime == false){
    end = false;
    mouseAccuracy = true;
    reactionTime = false;
    startScreen = false;
    timePassed = millis()
  }
}
