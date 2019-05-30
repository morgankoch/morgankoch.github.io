class dragon {
  constructor() {
    dx = 100
    dy = 50
    ds = 7

  }

  dragonmovement() {
  if (dx <= 900){
    dx = dx + ds
  }

  if (dx >= 900){
    dx = -1200
    dy = random(25,425)
    draghit = false
}

  }

  dragonshape() {
    if (death == false) {

  noStroke()

  fill(0)

  rect(dx + 200,dy + 38,38,30)
  rect(dx + 230,dy + 61,40,7)
  rect(dx + 230,dy + 51,40,7)
  rect(dx + 145,dy + 46,60,15)
  rect(dx + 80,dy + 35,80,45)
  rect(dx - 50,dy + 45,130,15)
  rect(dx + 80,dy + 80,10,20)
  rect(dx + 150,dy + 80,10,20)
  triangle(dx,dy + 10,dx + 160,dy + 35,dx + 70,dy + 50)
  fill(255,0,0,50)
  rect(-50,dy,500,100)
  }
  }

  dragontouch(dragx, dragy) {
        if (dragx >= dx && dragx <= dx + 100 && dragy >= dy + 10 && dragy <= dy + 60) {
    if (death == false) {
      if (draghit == false) {
        counter = counter - 3
        draghit = true
      }
      }
        }
  if (dragx >= dx + 100 && dragx <= dx + 160 && dragy >= dy + 23 && dragy <= dy + 53) {
    if (death == false) {
      if (draghit == false) {
        counter = counter - 3
        draghit = true
      }
      }
  }
  if (dragx >= dx + 80 && dragx <= dx + 90 && dragy >= dy + 80 && dragy <= dy + 100) {
  if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
    }
  }
  if (dragx >= dx + 230 && dragx <= dx + 270 && dragy >= dy + 51 && dragy <= dy + 58) {
  if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
    }
  }
  if (dragx >= dx + 200 && dragx <= dx + 238 && dragy >= dy + 38 && dragy <= dy + 68) {
  if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
  }
  }
  if (dragx >= dx + 230 && dragx <= dx + 270 && dragy >= dy + 61 && dragy <= dx + 68) {
   if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
  }
  }
  if (dragx >= dx - 50 && dragx <= dx + 130 && dragy >= dy + 45 && dragy <= dy + 60) {
   if (death == false) {
    if (draghit == false) {
        counter = counter - 3
          draghit = true
    }
  }
  }
  if (dragx >= dx + 80 && dragx <= dx + 160 && dragy >= dy + 35 &&  dragy <= dy + 80) {
  if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
  }
  }
  if (dragx >= dx + 150 && dragx <= dx + 160 && dragy >= dy + 80 && dragy <= dy + 100) {
  if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
  }
  }
  if (dragx >= dx + 145 && dragx <= dx + 205 && dragy >= dy + 46 && dragy <= dy + 61) {
  if (death == false) {
    if (draghit == false) {
        counter = counter - 3
        draghit = true
    }
  }
  }

  }
}
