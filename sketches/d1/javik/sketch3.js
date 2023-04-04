let rectX = 400;
let rectY = 300;
let x, y, r, vx, vy;
let rx, ry;
let kx, ky;

function setup() {
  createCanvas(1000, 1000);
  background (245, 133, 105);
  stroke(255, 102, 0);
  strokeWeight(10);
  noFill();

  frameRate(15);

  x = random(width);
  y = random(height);
  r = 30;
  vx = random(-5, 5);
  vy = random(-5, 5);
  rx = random(-100, 100);
  ry = random(-100, 100);
  kx = random(-150, 150);
  ky = random(-150, 150);

  zx = random(-200, 200);
  zy = random(-200, 200);
  ex = random(-250, 250);
  ey = random(-250, 250);
  bx = random(-300, 300);
  by = random(-300, 300);
  mx = random(-450, 450);
  my = random(-450, 450);
}

function draw() {
  
  background(245, 133, 105);
  
 
  rectX += random(-5, 5);
  rectY += random(-5, 5);
  
  
  stroke(0);
  strokeWeight(0);
  fill(32, 82, 58);
  rect(rectX, rectY, 100, 300);

  rect(rectX - 50, rectY, 200, 20);
  rect(rectX - 50, rectY + 280, 200, 20);


  x += vx;
  y += vy;

  if (x - r < 0 || x + r > width) {
    vx *= -1;
  }
  if (y - r < 0 || y + r > height) {
    vy *= -1;
  }

  noStroke();
  fill(245, 133, 105);
  ellipse(x, y, r * 2);

  x += rx;
  y += ry;

  if (x - r < 0 || x + r > width) {
    rx *= -1;
  }
  if (y - r < 0 || y + r > height) {
    ry *= -1;
  }

  noStroke();
  fill(245, 133, 105);
  ellipse(x, y, r * 2);x += rx;
  y += ry;

  x += kx;
  y += ky;

  if (x - r < 0 || x + r > width) {
    kx *= -1;
  }
  if (y - r < 0 || y + r > height) {
    ky *= -1;
  }

  noStroke();
  fill(245, 133, 105);
  ellipse(x, y, r * 2);

  x += zx;
  y += zy;

  if (x - r < 0 || x + r > width) {
    zx *= -1;
  }
  if (y - r < 0 || y + r > height) {
    zy *= -1;
  }

  noStroke();
  fill(245, 133, 105);
  ellipse(x, y, r * 2);
  x += ex;
  y += ey;

  if (x - r < 0 || x + r > width) {
    ex *= -1;
  }
  if (y - r < 0 || y + r > height) {
    ey *= -1;
  }

  noStroke();
  fill(245, 133, 105);
  ellipse(x, y, r * 2);

  
}
