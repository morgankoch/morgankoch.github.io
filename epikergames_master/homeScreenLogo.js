function startscreen() {
  canvas = createCanvas(400, 400);
  canvas.parent("canvas")
  let sx = 100
  let sy = 100
  background(40)
  fill(0)
  quad(sx - 20,sy - 50,sx + 220,sy - 50,sx + 220,sy + 150,sx - 20,sy + 150)
  triangle(sx - 20,sy + 150,sx + 100,sy + 200,sx + 220,sy + 150)
  fill(255)
  triangle(sx + 20,sy + 150,sx + 100,sy + 180,sx + 180,sy + 150)
  textSize(40)
  textFont("Comic Sans MS")
  fill(255)
  text("E", sx + 15,sy)
  text("P", sx + 45,sy)
  text("I", sx + 70,sy)
  text("K", sx + 95,sy)
  text("E", sx + 125,sy)
  text("R", sx + 155,sy)
  textSize(25)
  text("GAMES",sx + 50,sy + 40)

}

function draw() {
  startscreen();
}
