var y = 175;
var dx = 5;
var dy = 5;
var score = 48
var blocks = [];
var counter = 0;
let color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "pink", 'cyan', 'lime']
const powerup_duration = 3; //seconds
var powerup_in_use = false;
var powerup_start_time = 0;
var prev_dx = 0;
var prev_dy = 0;
var showing = true;
var start = false

function setup() {
  canvas = createCanvas(500, 400);
  canvas.parent("canvas")
  x = random(50, 450);
  board = createElement('h2', score)
  board.position(10, -10)
  block();
}
class b {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colors = random(color)
  }
  draw() {

    stroke(0);
    strokeWeight(3);
    fill(this.colors)
    rect(this.x, this.y, 40, 15);
  }
  checkIfCollided() {
    let d = dist(this.x, this.y, x, y);
    return d < 40
  }
}


function ball(x, y) {
  noFill();
  stroke(0);
  strokeWeight(3);
  fill(color);
  ellipse(x, y, 30, 30);
}

function block() {
  for (let y = 1.5; y < 7; y++) {
    for (let x = 1; x < 9; x++) {
      blocks.push(new b(x * 51, y * 20));
    }
  }
}
