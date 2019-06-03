let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
let color
class Square{
  constructor(x, y){
    this.x = x
    this.y = y
    this.length = 20
    this.r = this.length/2
  }
  move(){
    this.x = round(random(0, width - this.r*2))
    this.y = round(random(0, height - this.r*2))
  }
  draw(){
    color = random(colors);
    fill(color);
    rect(this.x, this.y, this.length, this.length);
  }
}

function setup() {
  scrDsp = createElement('h2', "Score: ")
  title.style.textAlign = "center";
  squr = new Square(256, 156);
  console.log("Above");
  canvas = createCanvas(400, 400);
  canvas.parent("canvas")
  console.log("below");
}
