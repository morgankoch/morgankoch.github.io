function draw() {
  if (start == false ) {
    startscreen()
    startbutton()
  }else{
  background(150);
  rect(mouseX - 30, height - 50, 75, 10);
  x = x + dx;
  y = y + dy;
  ball(x, y);
  board.html(score);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].draw();
    if (blocks[i].checkIfCollided()) {
      dy = -dy;
      blocks.splice(i, 1)
      score = score - 1
    }
  }
  //hits side
  if (x < 20 || x > width - 20) {
    dx = -dx;
  }
  //hits top
  if (y < 20) {
    dy = -dy;
  }
  //paddle colision
  if (mouseX - 50 < x && x < mouseX + 65 && height - 50 < y + 15 && y < height - 50 + 10) {
    if (dy > 0) {
      dy = -dy
      dx = dx;
    }
  }
  //speed increase
  if (y > height + 25) {
    dy = 0;
    dx = 0;
  }
  if (score <= 40 && counter >= 0) {
    dx = dx * 1.5
    dy = dy * 1.5
    counter -= 1;
  }
  if (score <= 32 && counter >= -1) {
    dx = dx * 1.3
    dy = dy * 1.3
    counter -= 2;
  }
  if (score <= 24 && counter >= -2) {
    dx = dx * 1.3
    dy = dy * 1.3
    counter -= 3;
  }
  if (score <= 16 && counter >= -3) {
    dx = dx * 1.3
    dy = dy * 1.3
    counter -= 4;
  }
  if (score <= 8 && counter >= -4) {
    dx = dx * 1.3
    dy = dy * 1.3
    counter -= 5;
  }
  if (score <= 1 && counter >= -5) {
    dx = dx * 1.5
    dy = dy * 1.5
    counter -= 6;
  }
  if (blocks.length <= 0) {
    background(random(color));
    textSize(50);
    text('You Win!', 150, 150);
    dx = dx * 1.5
    dy = dy * 1.5
  }
  if (score <= 24 && showing == true) {
    triangle(5, 65, 20, 40, 35, 65);
    if (mouseIsPressed && !powerup_in_use) {
      prev_dx = dx;
      prev_dy = dy;
      dx = 5 * Math.sign(dx);
      dy = 5 * Math.sign(dy);
      powerup_start_time = second();
      powerup_in_use = true
    }
    let delta = second() - powerup_start_time;
    if (powerup_in_use && delta > powerup_duration) {
      dx = prev_dx * Math.sign(dx);
      dy = prev_dy * Math.sign(dy);
      prev_dy = 0;
      prev_dx = 0;
      powerup_in_use = false
      showing = false
    }
  }
}
}
