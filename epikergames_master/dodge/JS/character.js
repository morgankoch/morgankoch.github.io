function character(hx,hy){
  stroke(0)
  fill(5, 140, 10)
  rect(hx,hy,8,10)

  fill(255)
  ellipse(hx + 4,hy,10,10)

  strokeWeight(1.5)
  line(hx,hy - 0.5,hx + 8,hy - 0.5)

  fill(0)
  ellipse(hx + 2, hy + 0.5, 3,3)
  ellipse(hx + 6,hy + 0.5,3,3)
  strokeWeight(1)

  line(hx,hy + 5,hx -5,hy + 5)
  line(hx + 8,hy + 5,hx + 13,hy + 5)
  
  fill(5, 140, 10)
  triangle(hx - 2,hy - 3,hx + 10,hy - 3,hx + 4,hy - 10)
}
