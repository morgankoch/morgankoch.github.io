function startscreen() {
  let sx = 100
  let sy = 100
  background(40)
  fill(0)
  quad(sx - 20,sy - 50,sx + 220,sy - 50,sx + 220,sy + 150,sx - 20,sy + 150)
  triangle(sx - 20,sy + 150,sx + 100,sy + 200,sx + 220,sy + 150)
  fill(255)
  if (dank == true) {
    fill(color)
  }
  triangle(sx + 20,sy + 150,sx + 100,sy + 180,sx + 180,sy + 150)
  textSize(40)
  textFont("Comic Sans MS")
  fill(255)
  if (dank == true){
    fill(color)
  }
  text("E", sx + 15,sy)
  text("P", sx + 45,sy)
  text("I", sx + 70,sy)
  text("K", sx + 95,sy)
  text("E", sx + 125,sy)
  text("R", sx + 155,sy)
  textSize(25)
  text("GAMES",sx + 50,sy + 40)

  fill(0)
  rect(sx + 20,sy + 245,sx + 60,sy - 15,15)
  fill(255)
  if (dank == true) {
    fill(color)
  }
  rect(sx + 25,sy + 250,sx + 50,sy - 25,15)
  fill(0)
  text("Start",sx + 63,sy + 295)

  textSize(25)
  text("DON'T OOF", sx + 35, sy + 375)

  dankstarter()

  if (mouseIsPressed && mouseX > sx + 25 && mouseX < sx + 175 && mouseY > sy + 250 && mouseY < sy + 325) {
    start = true
  }

}
/*  function balladdition() {
    rect(20,335,75,100)

    rect(20,335,75,-61)
    rect(20,435,75,61)
    fill(50)
    rect(25,335,65,-56)
    rect(25,435,65,56)

    fill(0)
    triangle(20,335,95,335,60,275)
    triangle(20,435,95,435,60,495)


    fill(255)
    rect(25,340,65,90)
    triangle(25,335,90,335,60,285)
    triangle(25,435,90,435,60,485)

    fill(0)
    text(adddrops,27,393)



    if (mouseIsPressed && mouseX >= 20 && mouseX <= 95 && mouseY <= 335 && mouseY >= 274) {
      if (adddrops < 2000) {
      adddrops = adddrops + 10
      }
    }

    if (mouseIsPressed && mouseX >= 20 && mouseX <= 95 && mouseY >= 435 && mouseY <= 496) {
      if (adddrops > 0){
      adddrops = adddrops - 10
      }
    }
  }
*/

  function levelselect() {
    selected = true


  }


 function dead() {
   fill(0,dark)
   rect(0,0,400,525)
   fader()

   noStroke()
   textFont("Adobe Garamond Pro")
   textSize(35)
   fill(fadered,0,0,dark)
   text("You Died", 135, height/2)

  }

 function fader() {
   if (dark != 255) {
     dark = dark + 1.5
   }
   if (fadered != 255) {
     fadered = fadered + 1.5
   }
 }
