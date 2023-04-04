let x, y; 
let dragging = false; 

function setup() {
  createCanvas(1000, 1000);
  x = width / 2; 
  y = height / 2; 
}

function draw() {
  background(0); 
  textSize(500); 
  fill(255); 
  textAlign(CENTER, CENTER); 
  text("I", x, y); 
}

function mousePressed() {

  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    dragging = true; 
  }
}

function mouseReleased() {
  dragging = false; 
}

function mouseDragged() {
  if (dragging) {
    x = mouseX; 
    y = mouseY;
  }
}
