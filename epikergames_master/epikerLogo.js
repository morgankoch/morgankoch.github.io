function startscreen() {
  fill(0)
  quad(80,50,320,50,320,250,80,250)
  triangle(80,250,200,300,320,250)
  fill(255)
  triangle(120,250,200,280,280,250)
  textSize(40)
  textFont("Comic Sans MS")
  fill(255)
  text("E", 115,100)
  text("P", 145,100)
  text("I", 170,100)
  text("K", 195,100)
  text("E", 225,100)
  text("R", 255,100)
  textSize(25)
  text("GAMES",150,140)
}

function startbutton() {
  fill(0)
  rect(120,305,160,85,15)
  fill(255)
  rect(125,310,150,75,15)
  fill(0)
  text("Start",163,355)

  if (mouseIsPressed && mouseX > 125 && mouseX < 275 && mouseY > 310 && mouseY < 385) {
    start = true
  }

}
