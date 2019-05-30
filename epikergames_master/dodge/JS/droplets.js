class droplets {

  constructor(x, y) { // we could add radius or r to the constructor
  this.x = x;
  this.y = y;
  this.velocityY = 2;
  this.rad = 12;
  this.dropcolor = "red"
  this.velocityChanger = 0.002

}
move() {
  this.y += this.velocityY
  this.velocityY += this.velocityChanger //change this to increase acceleration
}
  display() {
    if (death == false) {
    fill(this.dropcolor)
    ellipse(this.x, this.y, this.rad, this.rad);
    }
}


  touch(px,py) {
    if (death == false) {
    let d = dist(px,py,this.x,this.y)
    if (d < 1/2 * this.rad){
      let i = drops.indexOf(this);
      drops.splice(i,1)
      counter = counter - 1
    }
    }
    }


}
