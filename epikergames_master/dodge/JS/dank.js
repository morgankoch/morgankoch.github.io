let dPress = false
let aPress = false
let nPress = false
let dank = false

function dankstarter() {

  if (dPress == true) {
    ellipse(width/2 - 150,500,30,30)
    fill("red")
    ellipse(width/2 - 150,500,20,20)

  }

  if (aPress == true) {
    fill(0)
    ellipse(width/2 - 50,500,30,30)
    fill("yellow")
    ellipse(width/2 - 50,500,20,20)
  }

  if (nPress == true) {
    fill(0)
    ellipse(width/2 + 50,500,30,30)
    fill("green")
    ellipse(width/2 + 50,500,20,20)
  }

  if (dank == true) {
    fill(0)
    ellipse(width/2 + 150,500,30,30)
    fill("blue")
    ellipse(width/2 + 150,500,20,20)
  }
 

  if (mouseX >= 133 && mouseX <= 153 && mouseY >= 453 && mouseY <= 476 && mouseIsPressed){
    console.log("D")
    dPress = true
  }

  if (dPress == true && mouseX >= 166 && mouseX <= 186 && mouseY >= 118 && mouseY <= 141 && mouseIsPressed){
  console.log("A")
    aPress = true

}

if (aPress == true && mouseX >= 172 && mouseX <= 195 && mouseY >= 453 && mouseY <= 476 && mouseIsPressed){
  console.log("N")
  nPress = true

}

  if (nPress == true && mouseX >= 195 && mouseX <= 225 && mouseY >= 67 && mouseY <= 103 && mouseIsPressed){
  console.log("K")
  dank = true

  }

if (dank == true) {
  color = random(colors)
  fill(color)
  text("Are You Dank Enough?",dx - 30,325)
  }



}
