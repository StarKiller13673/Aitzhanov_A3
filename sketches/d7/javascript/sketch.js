function setup() {
  createCanvas(1000, 1000);
  frameRate(30);
}

function draw() {
  background(7,8,8);
  noStroke();
  
  // зуярь пятиугольники
  for (let i = 0; i < 20; i++) {
    push();
    translate(random(width), random(height));
    rotate(frameCount / 20.0 + i * 0.2);
    fill(random(150, 255), random(150, 255), random(150, 255), 50);
    polygon(0, 0, 82, 5);
    pop();
  }

  strokeWeight(3);
  fill(random(255, 0, 0), random(255, 0, 0), random(255, 0, 0));

  push();
  translate(mouseX, mouseY);
  /*rotate(frameCount / 20.0);*/
  textSize(500); 
  text('I', 0, 0); 
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
