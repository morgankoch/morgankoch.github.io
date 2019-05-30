function mountain() {
  noStroke()
    fill(27, 5, 2)
  triangle(-40,525,15 + dankx,175 + danky,150,525)
  triangle(50,525,150 + dankx,300 + danky,225,525)
  triangle(250,525,350 + dankx,100 + danky,425,525)
    fill(56, 13, 1)
  triangle(0,525,100 + dankx,250 + danky,175,525)
  triangle(125,525,220 + dankx,100 + danky,325,525)
  triangle(250,525,350 + dankx,325 + danky,400,525)
    fill(86, 48, 16)
  triangle(0,525,75 + dankx,275 + danky,150,525)
  triangle(125,525,250 + dankx,125 + danky,300,525)
  triangle(250,525,315 + dankx,350 + danky,375,525)
  }



function plains() {
 background(104, 184, 249)


    fill(21, 109, 39)
    stroke(10)
    strokeWeight(2.5)
    ellipse(124,450,225,300)
    fill(38, 91, 26)
    ellipse(50,500,200,200)
    fill(41, 147, 17)
    ellipse(390,475,100,150)
    rect(-10,475,410,50)
  fill(91, 54, 27)
    rect(-10,485,410,40)

    fill("yellow")
    noStroke()
    ellipse(400,0,150,150)
    clouds()

}


function clouds() {
  let cx = 50
  let cy = 60
  noStroke()
  fill(255)

  for (let i = 0; i <= 1; i ++){
    ellipse(cx,cy,50,50)
    ellipse(cx + 10,cy + 10,50,50)
    ellipse(cx + 30,cy + 15, 50,50)
    ellipse(cx + 5,cy - 10,50,50)
    ellipse(cx + 27,cy - 13,50,50)
    ellipse(cx + 49,cy + 10,50,50)
    ellipse(cx + 55,cy - 10,50,50)
    ellipse(cx + 60,cy,50,50)
  cx = cx + 285
  cy = cy + 30
  }
}


function darkclouds() {
  for (c = 0; c <= width; c = c + 40) {
    fill(40)
  ellipse(c,25,50,50)
    fill(30)
  ellipse(c,5,50,50)
  }
}
