let start = false
let levels = false
let selected = false
let drops = [];
let numdrops = 250;
let counter = 15
let dx = -500
let dy = 100
let ds = 7
let dark = 0
let fadered = 0
let newdragon = []
let draghit = false
let death = false
let adddrops = 0
let totaldrops = numdrops + adddrops
let colors = ["red",'orange','yellow','green','blue','indigo','purple','violet']
let dankx = 0
let danky = 0
let sidesign = 1
let upsign = -1
let topstart = -7500
let botstart = -50
let endstart = topstart - 250

function setup() { //start button not activated
    canvas = createCanvas(400, 525);
    canvas.parent("canvas")
    background(30)

  for (let i = 0; i < totaldrops; i++) {
    drops[i] = new droplets (
    random(5,395),
    startheight = random(botstart,topstart)
    );
  }

  for (let ender = 0; ender <= 1; ender++) {
    newdragon[ender] = new dragon()
  }



  life = createElement('h2',counter)
  life.position(350,50)

}

function draw() {

  if (start == false) {

    startscreen()
      character(mouseX,mouseY)

    //balladdition() disabled
  }
  if (start == true) {
    levelselect()
  }

  if (selected == true) {
  background(109,15,15)

    if (dank == true) {
      color = random(colors)
  background(color)
    }

  mountain()
  darkclouds()
  life.html(counter)
  character(mouseX,mouseY)



      if (dank == true) {
    dankx = dankx + sidesign * 10
    danky = danky + upsign * 10

    if (dankx == 200) {
      sidesign = -1
    }

    if (dankx == -200) {
      sidesign = 1
    }

    if (danky == -200) {
      upsign = 1
    }

    if (danky == 200) {
      upsign = -1
    }


      }

  if (counter <= 0) {
    death = true
  }

  if (death == true) {
    dead()
  }





  for (let i = 0; i < drops.length; i++) {
    drops[i].display();
    drops[i].move();
    drops[i].touch(mouseX,mouseY);
  }
  for (let ender = 0; ender < newdragon.length; ender++) {
    newdragon[ender].dragonmovement()
    newdragon[ender].dragonshape()
    newdragon[ender].dragontouch(mouseX,mouseY)
  }
  }
}
